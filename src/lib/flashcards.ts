import { Question } from '../types';

/**
 * Builds the display order for a deck of cards.
 *
 * @param count - Number of cards in the deck. Non-positive counts yield an empty order.
 * @param shuffled - When false, returns the identity order `[0, 1, ..., count - 1]`.
 *   When true, returns a Fisher–Yates permutation of the same range (every index
 *   appears exactly once).
 * @param rng - Source of randomness (defaults to `Math.random`). Pass a seeded
 *   function to get a deterministic shuffle. Never called when `shuffled` is false.
 * @returns A new array of card indices in display order. No external state is mutated.
 */
export function buildDeckOrder(count: number, shuffled: boolean, rng: () => number = Math.random): number[] {
  if (count <= 0) return [];
  const order: number[] = [];
  for (let i = 0; i < count; i++) {
    order.push(i);
  }
  if (!shuffled) return order;
  // Fisher–Yates shuffle (from the top): each element is swapped with a
  // random element at or before its position, so every permutation is
  // equally likely and the result always contains every index exactly once.
  for (let i = count - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = order[i];
    order[i] = order[j];
    order[j] = tmp;
  }
  return order;
}

/**
 * Builds a due-first display order for a deck of cards with SRS state.
 *
 * The full permutation of `[0..count-1]` is built first (Fisher–Yates when
 * `shuffled` is true, ascending otherwise), then stable-partitioned so that
 * **due cards come first** (cards whose SRS state is due — including NEW cards
 * with no state — see `isCardDue`) followed by the remaining cards, each group
 * keeping the shuffled/ascending relative order.
 *
 * @param count - Number of cards in the deck. Non-positive counts yield `[]`.
 * @param shuffled - When true, shuffles the full permutation before partitioning.
 * @param srs - Per-card SRS state (id -> state). May be `undefined`, in which
 *   case every card is treated as due (all-new deck).
 * @param cardIds - Deck ids, index-aligned with the cards. A card whose index
 *   has no id in `cardIds` is defensively treated as due.
 * @param now - Current epoch ms (defaults to `Date.now()`).
 * @returns A permutation of `[0..count-1]` with due indices first.
 */
export function buildDueFirstOrder(
  count: number,
  shuffled: boolean,
  srs: Record<string, FlashcardSrsState> | undefined,
  cardIds: string[],
  now: number = Date.now(),
): number[] {
  const order = buildDeckOrder(count, shuffled);
  if (order.length === 0) return order;
  const due: number[] = [];
  const later: number[] = [];
  for (const idx of order) {
    const id = cardIds[idx];
    const state = id === undefined ? undefined : srs?.[id];
    if (id === undefined || isCardDue(state, now)) {
      due.push(idx);
    } else {
      later.push(idx);
    }
  }
  return [...due, ...later];
}

/**
 * Adds a card id to the list of "Got it" ids.
 *
 * @param ids - Existing known ids. Never mutated.
 * @param id - The id to add. Appended only when it is not already present, so
 *   calling this repeatedly with the same id is idempotent.
 * @returns A new array containing the original ids plus `id` when it was absent.
 */
export function addKnownId(ids: string[], id: string): string[] {
  if (ids.includes(id)) return [...ids];
  return [...ids, id];
}

/**
 * Removes a card id from the list of "Got it" ids.
 *
 * @param ids - Existing known ids. Never mutated.
 * @param id - The id to remove. Every occurrence is removed; absent ids are a no-op,
 *   so calling this is idempotent.
 * @returns A new array with every occurrence of `id` filtered out.
 */
export function removeKnownId(ids: string[], id: string): string[] {
  return ids.filter(current => current !== id);
}

/**
 * Counts how many of the saved known ids still belong to a given deck.
 *
 * Used for progress displays: a saved id that no longer exists in the deck
 * (stale saved state) is ignored, so the count can never exceed the deck length.
 *
 * @param knownIds - Saved known card ids (duplicates count once).
 * @param deckQuestions - The questions currently in the deck (matched on `Question.id`).
 * @returns The number of known ids present in the deck; never exceeds `deckQuestions.length`.
 */
export function countKnownInIds(knownIds: string[], cardIds: string[]): number {
  const deckIds = new Set<string>(cardIds);
  const uniqueKnownIds = new Set<string>(knownIds);
  let count = 0;
  for (const id of uniqueKnownIds) {
    if (deckIds.has(id)) {
      count++;
    }
  }
  return count;
}

export function countKnownInDeck(knownIds: string[], deckQuestions: Question[]): number {
  return countKnownInIds(knownIds, deckQuestions.map(question => question.id));
}

/**
 * Moves an index by `delta` positions and clamps the result into the deck bounds.
 *
 * @param current - Current index.
 * @param delta - Positions to move (negative for previous).
 * @param length - Deck length. When `length <= 0` the only valid index is 0.
 * @returns `current + delta` clamped into `[0, length - 1]`, or `0` when `length <= 0`.
 */
export function clampIndex(current: number, delta: number, length: number): number {
  if (length <= 0) return 0;
  const next = current + delta;
  if (next < 0) return 0;
  if (next > length - 1) return length - 1;
  return next;
}

/**
 * Builds a shortened "brief" version of an explanation for the flashcard back
 * face, where the full explanation can be very long (especially on mobile).
 *
 * @param text - The full explanation text. Leading and trailing whitespace is trimmed.
 * @param maxChars - Soft length limit for the brief (default 200).
 * @returns The trimmed text when it already fits within `maxChars`. Otherwise the
 *   text is cut at the last sentence boundary (`. `, `! `, `? `) within the first
 *   `maxChars` characters — used only when that boundary lands after position 40,
 *   otherwise the cut falls back to the last space — and `…` is appended. Text
 *   without any usable boundary is hard-cut at `maxChars`. Never returns an empty
 *   string for non-empty input.
 */
export function briefExplanation(text: string, maxChars: number = 200): string {
  const trimmed = text.trim();
  if (trimmed.length <= maxChars) return trimmed;

  const head = trimmed.slice(0, maxChars);

  // Prefer ending on a complete sentence, but only when the boundary sits far
  // enough in (after position 40) — otherwise the brief would be uselessly short.
  let sentenceCut = -1;
  for (const marker of ['. ', '! ', '? ']) {
    const pos = head.lastIndexOf(marker);
    if (pos > sentenceCut) sentenceCut = pos;
  }
  if (sentenceCut > 40) {
    return trimmed.slice(0, sentenceCut + 1) + '…';
  }

  const spaceCut = head.lastIndexOf(' ');
  if (spaceCut >= 0) {
    return trimmed.slice(0, spaceCut) + '…';
  }

  // No usable boundary at all: hard-cut at the limit so non-empty input never
  // yields an empty brief.
  return trimmed.slice(0, maxChars) + '…';
}

/* ------------------------------------------------------------------ */
/* Anki-style spaced repetition (simplified SM-2)                      */
/* ------------------------------------------------------------------ */

const MINUTE_MS = 60_000;
const DAY_MS = 24 * 60 * MINUTE_MS;

/** The four review grades: 1 Again, 2 Hard, 3 Good, 4 Easy. */
export type FlashcardGrade = 1 | 2 | 3 | 4;

/** Persisted per-card scheduling state (stored in `UserProgress.cardSrs`). */
export interface FlashcardSrsState {
  ease: number;         // default 2.5, minimum 1.3
  intervalDays: number; // 0 while learning
  dueAt: number;        // epoch ms
  reps: number;         // graduated reviews completed (learning step index while learning)
  lapses: number;
  learning: boolean;
}

const MIN_EASE = 1.3;
const MAX_INTERVAL_DAYS = 365;

function clampEase(ease: number): number {
  return Math.max(MIN_EASE, ease);
}

/** Round days to at most 1 decimal and cap at the maximum interval. */
function roundInterval(days: number): number {
  return Math.min(MAX_INTERVAL_DAYS, Math.round(days * 10) / 10);
}

/**
 * Computes the next scheduling state for a card after the given grade.
 *
 * New/undefined `prev` starts a learning card at step 0. Learning steps are
 * 1 min -> 10 min -> graduate (1 day); "Easy" graduates immediately (4 days).
 * A lapsed card (`lapses > 0`) relearns in a single 10-minute step, then
 * graduates with a 1-day interval. Graduated cards: Again -> lapses + 1,
 * ease - 0.20 (min 1.3), back to relearning due in 10 min; Hard -> ease - 0.15,
 * interval x 1.2; Good -> interval x ease; Easy -> ease + 0.15, interval x ease
 * x 1.3. Intervals are capped at 365 days and `dueAt = now + interval`.
 *
 * @param prev - The current SRS state, or `undefined` for a new card.
 * @param grade - The review grade (1 Again, 2 Hard, 3 Good, 4 Easy).
 * @param now - Current epoch ms (defaults to `Date.now()`).
 * @returns A new `FlashcardSrsState`; the input is never mutated.
 */
export function scheduleFlashcard(
  prev: FlashcardSrsState | undefined,
  grade: FlashcardGrade,
  now: number = Date.now(),
): FlashcardSrsState {
  const fresh: FlashcardSrsState = {
    ease: 2.5,
    intervalDays: 0,
    dueAt: now,
    reps: 0,
    lapses: 0,
    learning: true,
  };

  // --- New card or (re)learning card ---
  if (!prev || prev.learning) {
    const base = prev ?? fresh;
    if (base.lapses > 0) {
      // Relearning: a single 10-minute step, then graduate.
      switch (grade) {
        case 1:
        case 2:
          return { ...base, learning: true, intervalDays: 0, dueAt: now + 10 * MINUTE_MS };
        case 3:
          return { ...base, learning: false, reps: base.reps + 1, intervalDays: 1, dueAt: now + DAY_MS };
        case 4:
          return { ...base, learning: false, reps: base.reps + 1, intervalDays: 4, dueAt: now + 4 * DAY_MS };
      }
    }
    // First-time learning steps: step 0 = 1 min, step 1 = 10 min, then graduate.
    const step = Math.min(base.reps, 1);
    switch (grade) {
      case 1:
        return { ...base, reps: 0, learning: true, intervalDays: 0, dueAt: now + MINUTE_MS };
      case 2:
        // Hard repeats the current learning step.
        return { ...base, learning: true, intervalDays: 0, dueAt: now + (step === 0 ? MINUTE_MS : 10 * MINUTE_MS) };
      case 3:
        if (step === 0) {
          return { ...base, reps: 1, learning: true, intervalDays: 0, dueAt: now + 10 * MINUTE_MS };
        }
        return { ...base, learning: false, reps: base.reps + 1, intervalDays: 1, dueAt: now + DAY_MS };
      case 4:
        // Easy graduates immediately.
        return { ...base, learning: false, reps: base.reps + 1, intervalDays: 4, dueAt: now + 4 * DAY_MS };
    }
  }

  // --- Graduated card ---
  switch (grade) {
    case 1:
      // Lapse: back to relearning, due in 10 minutes; the next graduation
      // interval is 1 day (handled by the relearning branch above).
      return {
        ...prev,
        learning: true,
        intervalDays: 0,
        lapses: prev.lapses + 1,
        ease: clampEase(prev.ease - 0.2),
        dueAt: now + 10 * MINUTE_MS,
      };
    case 2: {
      const ease = clampEase(prev.ease - 0.15);
      const intervalDays = roundInterval(Math.max(prev.intervalDays, 1) * 1.2);
      return { ...prev, ease, intervalDays, dueAt: now + intervalDays * DAY_MS };
    }
    case 3: {
      const intervalDays = roundInterval(Math.max(prev.intervalDays, 1) * prev.ease);
      return { ...prev, intervalDays, dueAt: now + intervalDays * DAY_MS };
    }
    case 4: {
      const ease = prev.ease + 0.15;
      const intervalDays = roundInterval(Math.max(prev.intervalDays, 1) * ease * 1.3);
      return { ...prev, ease, intervalDays, dueAt: now + intervalDays * DAY_MS };
    }
  }
}

/**
 * Whether a card is due for review. An undefined state means the card has
 * never been seen, i.e. a NEW card, which is always due.
 *
 * @param srs - The card's SRS state, or `undefined` for a new card.
 * @param now - Current epoch ms (defaults to `Date.now()`).
 * @returns `true` for new cards and cards whose `dueAt` has passed.
 */
export function isCardDue(srs: FlashcardSrsState | undefined, now: number = Date.now()): boolean {
  if (!srs) return true;
  return srs.dueAt <= now;
}

/**
 * Human-readable label for the interval a grade would schedule, used on the
 * grade buttons: minutes under an hour ("1m", "10m"), days below a month
 * ("1d", "6d"), months with 1 decimal from 30 days up ("2.4mo").
 *
 * @param prev - The card's current SRS state, or `undefined` for a new card.
 * @param grade - The review grade to preview.
 * @param now - Current epoch ms (defaults to `Date.now()`).
 * @returns The formatted interval label.
 */
export function formatNextInterval(
  prev: FlashcardSrsState | undefined,
  grade: FlashcardGrade,
  now: number = Date.now(),
): string {
  const next = scheduleFlashcard(prev, grade, now);
  const delta = Math.max(0, next.dueAt - now);
  if (delta < 60 * MINUTE_MS) {
    return `${Math.max(1, Math.round(delta / MINUTE_MS))}m`;
  }
  const days = delta / DAY_MS;
  if (days >= 30) {
    const months = Math.round((days / 30) * 10) / 10;
    return `${months}mo`;
  }
  const rounded = Math.round(days * 10) / 10;
  return `${Number.isInteger(rounded) ? rounded : rounded.toFixed(1)}d`;
}
