import type { FlashcardSrsState } from './lib/flashcards';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number; // Index of options
  explanation: string;
}

export interface Assignment {
  id: number;
  title: string;
  questions: Question[];
}

export interface UserProgress {
  assignmentId: number;
  completedQuestionIds: string[];
  lastQuestionIndex: number;
  wrongQuestionIds: string[];
  selectedAnswers?: Record<string, number>;
  knownCardIds?: string[];          // flashcards marked "Got it"
  cardSrs?: Record<string, FlashcardSrsState>; // spaced-repetition state per card id
}

export interface SRSData {
  nextReviewDate: number;
  interval: number;
  easeFactor: number;
  repetitions: number;
}

export interface GlobalState {
  version: number;
  progress: Record<number, UserProgress>;
  apiKey?: string;
  username?: string;
  fullName?: string;
  college?: string;
  place?: string;
  qualification?: string;
  email?: string;
  hasAcceptedDisclaimer?: boolean;
  hasSeenAIWarning?: boolean;
  enableSpacedRepetition?: boolean;
  srsData?: Record<string, SRSData>;
  isDarkMode?: boolean;
}
