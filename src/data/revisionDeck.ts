// Last-Minute Revision deck for the BCBR exam.
// Authored from the official BCBR syllabus (ICMR-NIE / SWAYAM-NPTEL, 23 graded
// lectures), the NMC course flyer, and the high-yield patterns in this app's
// own past-question bank. Fact cards — one coherent concept per card.
// Math is written in LaTeX ($...$) and rendered with KaTeX.

import { REVISION_PART_1 } from './revisionDeckParts/part1';
import { REVISION_PART_2 } from './revisionDeckParts/part2';
import { REVISION_PART_3 } from './revisionDeckParts/part3';

export interface RevisionCard {
  id: string;
  /** 1..23 = BCBR lecture number */
  module: number;
  front: string;
  back: string;
}

export const REVISION_DECK_TITLE = 'Last-Minute Revision — BCBR Exam';

export const REVISION_CARDS: RevisionCard[] = [...REVISION_PART_1, ...REVISION_PART_2, ...REVISION_PART_3];

export const REVISION_DECK_ID = 0;