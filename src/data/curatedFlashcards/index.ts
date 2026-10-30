import { CuratedCard } from './types';
import { MODULE_1_CARDS } from './module01';
import { MODULE_2_CARDS } from './module02';
import { MODULE_3_CARDS } from './module03';
import { MODULE_4_CARDS } from './module04';
import { MODULE_5_CARDS } from './module05';
import { MODULE_6_CARDS } from './module06';
import { MODULE_7_CARDS } from './module07';
import { MODULE_8_CARDS } from './module08';
import { MODULE_9_CARDS } from './module09';
import { MODULE_10_CARDS } from './module10';
import { MODULE_11_CARDS } from './module11';
import { MODULE_12_CARDS } from './module12';
import { MODULE_13_CARDS } from './module13';
import { MODULE_14_CARDS } from './module14';
import { MODULE_15_CARDS } from './module15';
import { MODULE_16_CARDS } from './module16';
import { MODULE_17_CARDS } from './module17';
import { MODULE_18_CARDS } from './module18';
import { MODULE_19_CARDS } from './module19';
import { MODULE_20_CARDS } from './module20';
import { MODULE_21_CARDS } from './module21';
import { MODULE_22_CARDS } from './module22';
import { MODULE_23_CARDS } from './module23';
import { MODULE_24_CARDS } from './module24';
import { MODULE_25_CARDS } from './module25';

/**
 * Curated flashcard decks, keyed by BCBR lecture number (1..23).
 * Authored from external authoritative sources; see
 * .kimchi/docs/curated-flashcards-notes.md for per-module provenance.
 *
 * Modules with no curated cards yet are simply absent from the map.
 */
export const CURATED_FLASHCARDS: Record<number, CuratedCard[]> = {
  1: MODULE_1_CARDS,
  2: MODULE_2_CARDS,
  3: MODULE_3_CARDS,
  4: MODULE_4_CARDS,
  5: MODULE_5_CARDS,
  6: MODULE_6_CARDS,
  7: MODULE_7_CARDS,
  8: MODULE_8_CARDS,
  9: MODULE_9_CARDS,
  10: MODULE_10_CARDS,
  11: MODULE_11_CARDS,
  12: MODULE_12_CARDS,
  13: MODULE_13_CARDS,
  14: MODULE_14_CARDS,
  15: MODULE_15_CARDS,
  16: MODULE_16_CARDS,
  17: MODULE_17_CARDS,
  18: MODULE_18_CARDS,
  19: MODULE_19_CARDS,
  20: MODULE_20_CARDS,
  21: MODULE_21_CARDS,
  22: MODULE_22_CARDS,
  23: MODULE_23_CARDS,
  24: MODULE_24_CARDS,
  25: MODULE_25_CARDS,
};

/** Titles for curated modules that are NOT represented in the app's ASSIGNMENTS
 * list (BCBR lectures 24 and 25 carry no graded assignment). */
export const CURATED_MODULE_TITLES: Record<number, string> = {
  24: 'Manuscript Writing',
  25: 'Grant Proposal Writing',
};

/** Flashcards for one BCBR lecture (empty array if none authored yet). */
export const curatedCardsForModule = (lecture: number): CuratedCard[] =>
  CURATED_FLASHCARDS[lecture] ?? [];

/** Curated deck ids use 2000 + lecture number (2001..2023) — no collision with
 * assignment ids (1..23), module decks (1001..1023) or the revision deck (0). */
export const curatedDeckId = (lecture: number): number => 2000 + lecture;

export type { CuratedCard, CuratedCardType, CuratedCardDifficulty } from './types';