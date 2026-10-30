import { RevisionCard } from '../revisionDeck';
import { MODULE_FLASHCARDS_SLICE as M01_06 } from './m01_06';
import { MODULE_FLASHCARDS_SLICE as M07_12 } from './m07_12';
import { MODULE_FLASHCARDS_SLICE as M13_18 } from './m13_18';
import { MODULE_FLASHCARDS_SLICE as M19_23 } from './m19_23';

/** Module flashcard decks, keyed by BCBR lecture number (1..23). 50 cards each. */
export const MODULE_FLASHCARDS: Record<number, RevisionCard[]> = { ...M01_06, ...M07_12, ...M13_18, ...M19_23 };

/** Deck ids in progress use 1000 + lecture number (1001..1023) — no collision with assignment ids (1..23) or the revision deck (0). */
export const moduleDeckId = (lecture: number): number => 1000 + lecture;
