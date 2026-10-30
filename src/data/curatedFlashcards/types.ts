// Curated flashcards — 100 per module, authored from the BCBR curriculum
// (NPTEL/ICMR-NIE BCBR syllabus, ICMR National Ethical Guidelines 2017), not
// from the question bank. Kept separate from the ../revisionDeck.

/** The kind of recall a curated card tests. */
export type CuratedCardType = 'DEFINITION' | 'DIFFERENCE' | 'LIST' | 'SCENARIO';

/** Self-rated difficulty for the curated card. */
export type CuratedCardDifficulty = 'easy' | 'medium' | 'hard';

export interface CuratedCard {
  /** Stable id, e.g. "cur-m1-001". */
  id: string;
  type: CuratedCardType;
  /** Human-readable topic label. */
  topic: string;
  difficulty: CuratedCardDifficulty;
  front: string;
  back: string;
  /** Memory hack, mnemonic, or clinical correlation shown in the explanation panel on the card back. */
  note?: string;
  /** Present only when a fact could not be fully verified this session. */
  flag?: 'CHECK';
  /** Why the card is flagged (required when flag === 'CHECK'). */
  check_reason?: string;
}