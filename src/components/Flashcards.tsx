import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Check, ChevronLeft, ChevronRight, Info, RefreshCw, RotateCcw, Shuffle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkBreaks from 'remark-breaks';
import rehypeKatex from 'rehype-katex';
import { briefExplanation, buildDeckOrder, buildDueFirstOrder, clampIndex, countKnownInIds, formatNextInterval, isCardDue, FlashcardGrade, FlashcardSrsState } from '../lib/flashcards';
import { cn } from '../lib/utils';

export interface FlashcardItem { id: string; front: string; back: string; note?: string; tag?: string; }

/** The four Anki-style grades: tinted background + matching text colour (no gradients). */
const GRADES: Array<{ grade: FlashcardGrade; label: string; tone: string }> = [
  {
    grade: 1,
    label: 'Again',
    tone: 'bg-rose-50 text-rose-700 ring-rose-600/15 hover:bg-rose-100 dark:bg-rose-500/10 dark:text-rose-300 dark:ring-rose-400/20 dark:hover:bg-rose-500/20',
  },
  {
    grade: 2,
    label: 'Hard',
    tone: 'bg-amber-50 text-amber-700 ring-amber-600/15 hover:bg-amber-100 dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-400/20 dark:hover:bg-amber-500/20',
  },
  {
    grade: 3,
    label: 'Good',
    tone: 'bg-emerald-50 text-emerald-700 ring-emerald-600/15 hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-400/20 dark:hover:bg-emerald-500/20',
  },
  {
    grade: 4,
    label: 'Easy',
    tone: 'bg-sky-50 text-sky-700 ring-sky-600/15 hover:bg-sky-100 dark:bg-sky-500/10 dark:text-sky-300 dark:ring-sky-400/20 dark:hover:bg-sky-500/20',
  },
];

/** Shared shell for both card faces: premium glass with a layered soft shadow. */
const FACE_CLASS =
  'relative flex h-full min-h-[260px] max-[359px]:min-h-[210px] sm:min-h-[400px] flex-col overflow-hidden rounded-[28px] bg-white dark:bg-slate-900 p-5 pt-6 sm:p-10 sm:pt-11 ring-1 ring-slate-900/[0.06] dark:ring-white/10 shadow-[0_1px_2px_rgb(15_23_42/0.04),0_24px_48px_-24px_rgb(15_23_42/0.22)] dark:shadow-[0_24px_48px_-24px_rgb(0_0_0/0.7)] [backface-visibility:hidden]';

/** Thin accent strip across the top of a face: teal for the question, emerald for the answer. */
const STRIP_FRONT = 'pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-sky-400 via-sky-500 to-indigo-500';
const STRIP_BACK = 'pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500';

/**
 * Scrollable content wrapper INSIDE each face. Long answer/key-facts content
 * scrolls within the card instead of growing the page. The overflow lives here
 * (not on the transformed face element) so the 3D flip transform is unaffected.
 */
const FACE_CONTENT_CLASS = 'min-h-0 flex-1 overflow-y-auto';

/** Micro-label above the front/back content ("Question", "Answer", ...). */
const MICROLABEL_CLASS = 'text-[11px] font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400';

/**
 * Renders card text (question / answer / explanation) as Markdown with LaTeX
 * math support. `$...$` and `$$...$$` are typeset via KaTeX (rehype-katex);
 * `remark-breaks` keeps single newlines as visible line breaks (the previous
 * `whitespace-pre-line` behaviour). Font sizes and colours are inherited from
 * the wrapper's `className`, so each usage site controls its own typography.
 * No sanitizer is applied on purpose: the content is our own vetted deck data
 * and sanitizing would strip KaTeX output. Safe inside the 3D-transformed
 * faces — only the overflow wrapper matters for the flip transform.
 */
const MathText = React.memo(({ text, className }: { text: string; className?: string }) => (
  <div
    className={cn(
      'break-words [&_p]:m-0 [&_ul]:my-1 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:my-1 [&_ol]:list-decimal [&_ol]:pl-5',
      className,
    )}
  >
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath, remarkBreaks]}
      rehypePlugins={[[rehypeKatex, { throwOnError: false }]]}
    >{text}</ReactMarkdown>
  </div>
));
MathText.displayName = 'MathText';

/** Static copy for the grade-button explainer panel (toggled by the Info icon). */
const GRADE_HELP_LINES: Array<{ word: string; tone: string; rest: string }> = [
  { word: 'Again', tone: 'text-rose-700 dark:text-rose-300', rest: ' — could not recall. Card returns in ~10 minutes.' },
  { word: 'Hard', tone: 'text-amber-700 dark:text-amber-300', rest: ' — recalled with difficulty. Shorter interval.' },
  { word: 'Good', tone: 'text-emerald-700 dark:text-emerald-300', rest: ' — recalled correctly. Normal interval growth.' },
  { word: 'Easy', tone: 'text-sky-700 dark:text-sky-300', rest: ' — recalled instantly. Much longer interval.' },
];

const CHIP_CLASS = 'text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full';

/** Header pill toggle variants (Shuffle / Due-first). */
const PILL_ACTIVE =
  'bg-sky-600 text-white shadow-sm hover:bg-sky-700 dark:bg-sky-600 dark:hover:bg-sky-500';
const PILL_INACTIVE =
  'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 ring-1 ring-slate-900/10 dark:ring-white/10 hover:bg-slate-50 dark:hover:bg-slate-800';

/** Nav pill (Prev / Next) shared classes. */
const NAV_PILL_CLASS =
  'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 ring-1 ring-slate-900/10 dark:ring-white/10 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95 transition-all duration-150 disabled:opacity-30 disabled:pointer-events-none';

/** Spring used for the 3D flip — smooth, nothing bouncy. */
const FLIP_SPRING = { type: 'spring' as const, stiffness: 260, damping: 26 };
const FADE = { duration: 0.15, ease: 'easeOut' as const };

interface FlashcardsProps {
  deckTitle: string;
  cards: FlashcardItem[];
  backLabel?: string;
  /** Micro-label above the card front ("Question" for QBank decks, e.g. "Recall" for fact cards). */
  frontLabel?: string;
  knownCardIds: string[];
  onToggleKnown: (questionId: string, known: boolean) => void;
  /** Per-card spaced-repetition state (id -> state). Required for grade-button labels. */
  srs?: Record<string, FlashcardSrsState>;
  /** When provided, the flipped card shows a 4-button Anki-style grade row. */
  onGradeCard?: (cardId: string, grade: FlashcardGrade) => void;
  onExit: () => void;
}

export const Flashcards: React.FC<FlashcardsProps> = ({
  deckTitle,
  cards,
  backLabel = 'Answer',
  frontLabel = 'Question',
  knownCardIds,
  onToggleKnown,
  srs,
  onGradeCard,
  onExit,
}) => {
  const [shuffled, setShuffled] = useState(false);
  // Due-first study queue: ON by default (Anki behaviour). Only meaningful when
  // SRS state exists — without it there is no due concept, so the toggle is hidden.
  const [dueFirst, setDueFirst] = useState(true);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showFullExplanation, setShowFullExplanation] = useState(false);
  // Toggles the grade-button explainer panel shown above the SRS grade row.
  const [showGradeHelp, setShowGradeHelp] = useState(false);
  // True once the flip animation has settled: the hidden face is then also made
  // `invisible` (belt-and-braces on top of backface-visibility) so it can never
  // intercept pointer events or linger in the accessibility tree.
  const [facesSettled, setFacesSettled] = useState(true);

  const reduceMotion = useReducedMotion() ?? false;
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  // After each flip toggle, wait for the spring to settle before marking the
  // hidden face invisible (toggling it instantly would clip the mid-flip frame).
  useEffect(() => {
    setFacesSettled(false);
    const t = window.setTimeout(() => setFacesSettled(true), 320);
    return () => window.clearTimeout(t);
  }, [flipped]);

  // SRS data presence: with no (non-empty) srs record the deck has no due
  // concept, so order falls back to the plain deck order and the toggle hides.
  const hasSrs = !!srs && Object.keys(srs).length > 0;

  // Builds the study order for the given toggle states. With SRS data and
  // due-first ON, due/new cards are queued ahead of the rest; otherwise the
  // plain (optionally shuffled) deck order is used.
  const buildOrderFor = (shuffledFlag: boolean, dueFirstFlag: boolean): number[] => {
    if (hasSrs && dueFirstFlag) {
      return buildDueFirstOrder(cards.length, shuffledFlag, srs, cards.map(c => c.id));
    }
    return buildDeckOrder(cards.length, shuffledFlag);
  };

  // Keep the deck order in sync when the underlying deck changes size
  // (e.g. a different assignment is opened while the view is mounted).
  useEffect(() => {
    setOrder(buildOrderFor(shuffled, dueFirst));
    setIndex(0);
    setFlipped(false);
    // `shuffled` and `dueFirst` are deliberately excluded: both toggles have
    // their own handlers that rebuild the order, and re-running on toggle
    // changes would double-build. `srs` is also excluded on purpose — grading
    // mutates it, and re-running would reshuffle the queue mid-session; the
    // session order is a snapshot taken at (re)build time only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards.length]);

  // Session order snapshot: built once on mount (dueFirst defaults to ON).
  const [order, setOrder] = useState<number[]>(() =>
    hasSrs
      ? buildDueFirstOrder(cards.length, false, srs, cards.map(c => c.id))
      : buildDeckOrder(cards.length, false),
  );

  // Collapse the explanation whenever the displayed card changes (navigation,
  // shuffle or deck rebuild) so a new card never opens pre-expanded.
  useEffect(() => {
    setShowFullExplanation(false);
  }, [index, order]);

  const cardIndex = order[index];
  const card = cardIndex !== undefined ? cards[cardIndex] : undefined;

  const goPrev = useCallback(() => {
    setIndex(current => clampIndex(current, -1, order.length));
    setFlipped(false);
  }, [order.length]);

  const goNext = useCallback(() => {
    setIndex(current => clampIndex(current, 1, order.length));
    setFlipped(false);
  }, [order.length]);

  const toggleShuffle = () => {
    const next = !shuffled;
    setShuffled(next);
    setOrder(buildOrderFor(next, dueFirst));
    setIndex(0);
    setFlipped(false);
  };

  const toggleDueFirst = () => {
    const next = !dueFirst;
    setDueFirst(next);
    setOrder(buildOrderFor(shuffled, next));
    setIndex(0);
    setFlipped(false);
  };

  const handleGotIt = () => {
    if (!card) return;
    onToggleKnown(card.id, true);
    setIndex(current => clampIndex(current, 1, order.length));
    setFlipped(false);
  };

  const handleReviewAgain = () => {
    if (!card) return;
    onToggleKnown(card.id, false);
    setIndex(current => clampIndex(current, 1, order.length));
    setFlipped(false);
  };

  const handleGrade = (grade: FlashcardGrade) => {
    if (!card || !onGradeCard) return;
    onGradeCard(card.id, grade);
    setIndex(current => clampIndex(current, 1, order.length));
    setFlipped(false);
  };

  // Desktop keyboard shortcuts. The listener is re-registered whenever `order`
  // changes so the clamping always sees the current deck length (never a stale
  // closure). The activeElement guard stops Enter/Space on a focused button
  // from ALSO flipping the card.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const el = document.activeElement as HTMLElement | null;
      if (
        el &&
        (el.tagName === 'BUTTON' || el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)
      ) {
        return;
      }
      if (order.length === 0) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setFlipped(f => !f);
      } else if (onGradeCard && flipped && card && ['1', '2', '3', '4'].includes(e.key)) {
        e.preventDefault();
        onGradeCard(card.id, Number(e.key) as FlashcardGrade);
        setIndex(current => clampIndex(current, 1, order.length));
        setFlipped(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [order, goNext, goPrev, onGradeCard, flipped, card]);

  // Mobile swipe. Horizontal-dominant gestures navigate; vertical ones are
  // ignored so page scrolling still works.
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = touch ? { x: touch.clientX, y: touch.clientY } : null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartRef.current;
    touchStartRef.current = null;
    if (!start || order.length === 0) return;
    const touch = e.changedTouches[0];
    if (!touch) return;
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) goNext();
      else goPrev();
    }
  };

  const isKnown = card ? knownCardIds.includes(card.id) : false;
  // Due/New chip: a card with no SRS state is new; otherwise check its due date.
  const cardSrs = srs && card ? srs[card.id] : undefined;
  const dueChip = onGradeCard && card ? (cardSrs === undefined ? 'New' : isCardDue(cardSrs) ? 'Due' : null) : null;
  const knownCount = countKnownInIds(knownCardIds, cards.map(c => c.id));
  // Deck-wide due count for the stats line (new cards count as due).
  const dueCount =
    hasSrs && srs
      ? cards.filter(c => {
          const st = srs[c.id];
          return st === undefined || isCardDue(st);
        }).length
      : null;
  const progressPercent = cards.length > 0 ? (knownCount / cards.length) * 100 : 0;
  const brief = card?.note ? briefExplanation(card.note) : '';
  const isTruncated = brief.endsWith('…');

  /** Subtle bottom hint row shared by both faces. */
  const flipHint = (label: string) => (
    <div className="pointer-events-none mt-auto flex items-center justify-center gap-1.5 pt-4 text-[11px] font-medium text-slate-400 dark:text-slate-500 sm:pt-6">
      <RefreshCw size={12} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );

  // ---- Card faces -----------------------------------------------------------
  // In the 3D branch both faces are stacked in the same grid cell so the shell
  // height is the max of the two (no layout jump mid-flip). The hidden face is
  // rotated 180deg + backface-hidden; `invisible` is added once the spring has
  // settled. In the reduced-motion branch only the visible face is rendered and
  // faces crossfade instead of rotating.

  const frontFace = (hidden: boolean, rotate180: boolean) => (
    <div
      aria-hidden={flipped}
      className={`${FACE_CLASS} [grid-area:1/1] ${rotate180 ? '[transform:rotateY(180deg)]' : ''} ${hidden ? 'invisible pointer-events-none' : ''}`}
    >
      <div className={STRIP_FRONT} aria-hidden="true" />
      {(card?.tag || dueChip || isKnown) && (
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {card?.tag && (
              <span className={`${CHIP_CLASS} bg-violet-100/70 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300`}>
                {card.tag}
              </span>
            )}
            {dueChip && (
              <span
                className={`${CHIP_CLASS} ${
                  dueChip === 'New'
                    ? 'bg-sky-100/70 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300'
                    : 'bg-amber-100/70 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'
                }`}
              >
                {dueChip}
              </span>
            )}
          </div>
          {isKnown && (
            <span className={`${CHIP_CLASS} inline-flex shrink-0 items-center gap-1 bg-emerald-100/70 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400`}>
              <Check size={10} aria-hidden="true" />
              Known
            </span>
          )}
        </div>
      )}
      <div className={FACE_CONTENT_CLASS}>
        <p className={`${MICROLABEL_CLASS} mt-3 sm:mt-5`}>{frontLabel}</p>
        <MathText
          text={card?.front ?? ''}
          className="mt-3 text-lg font-semibold leading-snug tracking-tight text-slate-900 dark:text-white sm:text-[26px] sm:leading-[1.35]"
        />
      </div>
      {flipHint('Tap to flip')}
    </div>
  );

  const backFace = (hidden: boolean, rotate180: boolean) => (
    <div
      aria-hidden={!flipped}
      className={`${FACE_CLASS} [grid-area:1/1] ${rotate180 ? '[transform:rotateY(180deg)]' : ''} ${hidden ? 'invisible pointer-events-none' : ''}`}
    >
      <div className={STRIP_BACK} aria-hidden="true" />
      <div className={FACE_CONTENT_CLASS}>
        <p className={`${MICROLABEL_CLASS} text-emerald-600 dark:text-emerald-400`}>{backLabel}</p>
        <MathText
          text={card?.back ?? ''}
          className="mt-3 text-lg font-bold leading-snug text-slate-900 dark:text-white sm:text-2xl sm:leading-[1.35]"
        />
        {card?.note && (
          <div className="mt-5 rounded-2xl border-l-4 border-emerald-400 bg-emerald-50/60 p-3.5 ring-1 ring-emerald-900/5 dark:bg-slate-800/60 dark:ring-white/5 sm:p-4">
          <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-400">
            <Info size={12} aria-hidden="true" />
            Explanation
          </p>
          <MathText
            text={showFullExplanation || !isTruncated ? (card.note ?? '') : brief}
            className="text-sm leading-relaxed text-slate-600 dark:text-slate-300"
          />
          {isTruncated && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowFullExplanation(s => !s);
              }}
              className="mt-2 text-xs font-semibold text-sky-600 hover:underline dark:text-sky-400"
            >
              {showFullExplanation ? 'Show less' : 'Show full explanation'}
            </button>
          )}
          </div>
        )}
      </div>
      {flipHint('Tap to see question')}
    </div>
  );

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-2 sm:gap-4">
      {/* Header row: back, title, shuffle + due-first pills */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={onExit}
          aria-label="Back"
          title="Back"
          className="shrink-0 rounded-full p-2 -ml-2 text-slate-500 transition-colors hover:bg-slate-900/5 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-slate-200"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-sm font-bold text-slate-900 dark:text-slate-100 sm:text-base">{deckTitle}</h2>
          <p className="text-[11px] tabular-nums text-slate-500 dark:text-slate-400">
            {order.length > 0 ? `Card ${index + 1} of ${order.length}` : 'Empty deck'}
          </p>
        </div>
        <button
          onClick={toggleShuffle}
          aria-pressed={shuffled}
          title={shuffled ? 'Shuffled' : 'Shuffle'}
          className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-150 active:scale-[0.98] ${
            shuffled ? PILL_ACTIVE : PILL_INACTIVE
          }`}
        >
          <Shuffle size={13} aria-hidden="true" />
          <span className="hidden sm:inline">{shuffled ? 'Shuffled' : 'Shuffle'}</span>
        </button>
        {hasSrs && (
          <button
            onClick={toggleDueFirst}
            aria-pressed={dueFirst}
            title={dueFirst ? 'Due and new cards come first — turn off to study in deck order' : 'Study due and new cards first'}
            className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-150 active:scale-[0.98] ${
              dueFirst ? PILL_ACTIVE : PILL_INACTIVE
            }`}
          >
            <span>{dueFirst ? 'Due first' : 'Oldest first'}</span>
          </button>
        )}
      </div>

      {/* Keyboard hint on desktop (touch users get the swipe/tap affordances) */}
      <p className="hidden sm:block text-center text-[11px] text-slate-400 dark:text-slate-500">
        <kbd className="rounded bg-slate-100 px-1.5 py-0.5 font-sans dark:bg-slate-800">Space</kbd> flip · <kbd className="rounded bg-slate-100 px-1.5 py-0.5 font-sans dark:bg-slate-800">←</kbd> <kbd className="rounded bg-slate-100 px-1.5 py-0.5 font-sans dark:bg-slate-800">→</kbd> move
        {onGradeCard ? <> · <kbd className="rounded bg-slate-100 px-1.5 py-0.5 font-sans dark:bg-slate-800">1–4</kbd> grade</> : null}
      </p>

      {order.length === 0 || !card ? (
        <div className="rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-900/5 dark:bg-slate-900 dark:ring-white/10">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">No cards in this deck.</p>
        </div>
      ) : (
        <>
          {/* Progress: slim bar + stats line */}
          <div className="space-y-1">
            <div
              className="h-2 w-full overflow-hidden rounded-full bg-slate-200/70 dark:bg-slate-800"
              role="progressbar"
              aria-valuenow={Math.round(progressPercent)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Cards marked known"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 transition-all duration-500"
                style={{ width: `${Math.min(progressPercent, 100)}%` }}
              />
            </div>
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5 text-[11px] font-semibold tabular-nums">
              <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">{knownCount} known</span>
              {dueCount !== null && (
                <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">{dueCount} due</span>
              )}
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-slate-600 dark:bg-slate-800 dark:text-slate-300">{cards.length} total</span>
              {hasSrs && dueFirst && <span className="font-medium text-slate-400 dark:text-slate-500">· due first</span>}
            </div>
          </div>

          {/* Card: perspective container wraps the 3D-flipping faces */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Flashcard — tap to flip"
            aria-pressed={flipped}
            onClick={() => setFlipped(f => !f)}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
                setFlipped(f => !f);
              }
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="flex min-h-0 flex-1 cursor-pointer select-none flex-col rounded-3xl [perspective:1200px] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            {/* Fade the whole card in when the displayed card changes */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={cardIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={FADE}
                className="flex min-h-0 flex-1 flex-col"
              >
                {reduceMotion ? (
                  /* Reduced motion: crossfade between faces instead of rotating. */
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={flipped ? 'back' : 'front'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={FADE}
                      className="flex min-h-0 flex-1 flex-col"
                    >
                      {flipped ? backFace(false, false) : frontFace(false, false)}
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  /* Both faces stacked in one grid cell; the inner wrapper springs rotateY. */
                  <motion.div
                    className="grid min-h-0 flex-1 [transform-style:preserve-3d]"
                    animate={{ rotateY: flipped ? 180 : 0 }}
                    transition={FLIP_SPRING}
                  >
                    {frontFace(facesSettled && flipped, false)}
                    {backFace(facesSettled && !flipped, true)}
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev / flip / Next */}
          <div className="flex items-center gap-3">
            <button onClick={goPrev} disabled={index === 0} aria-label="Previous card" className={NAV_PILL_CLASS}>
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              onClick={() => setFlipped(f => !f)}
              className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-slate-900 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 active:scale-[0.98] dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              <RefreshCw size={15} aria-hidden="true" />
              {flipped ? 'Show question' : 'Show answer'}
            </button>
            <button onClick={goNext} disabled={index === order.length - 1} aria-label="Next card" className={NAV_PILL_CLASS}>
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>

          {onGradeCard && flipped ? (
            /* Anki-style grade row (only when grading is enabled and the card is flipped) */
            <div className="flex flex-col gap-1.5">
              {/* Info affordance: right-aligned above the grade row; toggles the explainer panel. */}
              <div className="flex justify-end">
                <button
                  type="button"
                  aria-label="What do the grade buttons mean?"
                  aria-expanded={showGradeHelp}
                  title="What do the grades mean?"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowGradeHelp(s => !s);
                  }}
                  className="rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 dark:text-slate-500 dark:hover:bg-slate-800"
                >
                  <Info size={14} aria-hidden="true" />
                </button>
              </div>
              {showGradeHelp && (
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3 text-[11px] text-slate-600 dark:text-slate-300 space-y-1 w-full">
                  {GRADE_HELP_LINES.map(({ word, tone, rest }) => (
                    <p key={word}>
                      <span className={`font-semibold ${tone}`}>{word}</span>
                      {rest}
                    </p>
                  ))}
                </div>
              )}
              <div className="grid grid-cols-4 gap-1.5 sm:gap-3">
              {GRADES.map(({ grade, label, tone }) => (
                <button
                  key={grade}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleGrade(grade);
                  }}
                  className={`flex flex-col items-center gap-0.5 rounded-2xl px-1 py-2.5 text-xs font-semibold ring-1 ring-inset transition-all duration-150 hover:shadow-md active:scale-[0.98] sm:gap-1 sm:py-3.5 sm:text-sm ${tone}`}
                >
                  <span className="text-sm">{label}</span>
                  <span className="text-[10px] font-normal tabular-nums opacity-80">
                    {formatNextInterval(srs?.[card?.id ?? ''], grade)}
                  </span>
                </button>
              ))}
              </div>
            </div>
          ) : (
            /* Got it / Review again */
            <div className="grid grid-cols-2 gap-1.5 sm:gap-3">
              <button
                onClick={handleGotIt}
                className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-600/20 transition-all duration-150 hover:bg-emerald-700 active:scale-[0.98] sm:py-3.5"
              >
                <Check size={16} aria-hidden="true" />
                Got it
              </button>
              <button
                onClick={handleReviewAgain}
                className="flex items-center justify-center gap-2 rounded-2xl bg-white py-3 text-sm font-semibold text-amber-700 ring-1 ring-slate-900/10 transition-all duration-150 hover:bg-amber-50 active:scale-[0.98] dark:bg-slate-900 dark:text-amber-400 dark:ring-white/10 dark:hover:bg-slate-800 sm:py-3.5"
              >
                <RotateCcw size={16} aria-hidden="true" />
                Review again
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
