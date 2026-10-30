import { CuratedCard } from './types';

// Module 10 — Measurement of study variables (BCBR lecture 10).
export const MODULE_10_CARDS: CuratedCard[] = [
  {
    id: 'cur-m10-001',
    type: 'LIST',
    topic: 'Measurement of study variables',
    difficulty: 'easy',
    front: 'Scales of measurement — four types (NOIR)',
    back: '1. Nominal\n2. Ordinal\n3. Interval\n4. Ratio',
    note: 'Mnemonic: NOIR (like Noir films). They go from simplest (categories) to most complex (true zero).'
  },
  {
    id: 'cur-m10-002',
    type: 'DEFINITION',
    topic: 'Measurement of study variables',
    difficulty: 'easy',
    front: 'Nominal variable',
    back: 'A categorical variable whose values are just labels or names, with NO inherent order.\nExamples: Gender, eye color, place of residence.',
    note: 'Nominal = Name.'
  },
  {
    id: 'cur-m10-003',
    type: 'DEFINITION',
    topic: 'Measurement of study variables',
    difficulty: 'easy',
    front: 'Ordinal variable',
    back: 'A categorical variable whose categories have a natural, inherent order or rank.\nExamples: Socio-economic status (Lower, Middle, Upper), Hypertension stages (Normal, Pre, Stage 1, Stage 2).',
    note: 'Ordinal = Order.'
  },
  {
    id: 'cur-m10-004',
    type: 'DIFFERENCE',
    topic: 'Measurement of study variables',
    difficulty: 'medium',
    front: 'Continuous vs Discrete variables',
    back: 'Continuous: Can take any fractional/decimal value within a range (e.g., Height = 60.5 inches, Cholesterol, Hemoglobin).\nDiscrete: Can only take whole integer counts (e.g., Number of children per household, Number of asthma attacks).',
    note: 'If you can have half of it (like half a cm), it\'s continuous. You can\'t have half a child.'
  },
  {
    id: 'cur-m10-005',
    type: 'DEFINITION',
    topic: 'Measurement of study variables',
    difficulty: 'easy',
    front: 'Most commonly used measure of central tendency',
    back: 'The Mean (Arithmetic Average).',
    note: 'Add them all up and divide by the number of values.'
  },
  {
    id: 'cur-m10-006',
    type: 'DIFFERENCE',
    topic: 'Measurement of study variables',
    difficulty: 'medium',
    front: 'Mean vs Median in skewed data',
    back: 'The MEAN is heavily influenced by extreme values (outliers).\nThe MEDIAN is NOT influenced by extreme values.\n🎯 Exam trap: If a dataset has extreme values (e.g., blood sugars of 85, 93, 104, 410), the MEDIAN is the most representative average.',
    note: 'One billionaire walks into a room of poor people. The mean wealth skyrockets, but the median wealth barely changes.'
  },
  {
    id: 'cur-m10-007',
    type: 'DEFINITION',
    topic: 'Measurement of study variables',
    difficulty: 'easy',
    front: 'Median — equivalent percentile',
    back: 'The 50th percentile (or 2nd Quartile, Q2).\nIt divides the distribution exactly into two halves.',
    note: 'Median = Middle.'
  },
  {
    id: 'cur-m10-008',
    type: 'DEFINITION',
    topic: 'Measurement of study variables',
    difficulty: 'easy',
    front: 'First Quartile (Q1) — equivalent percentile',
    back: 'The 25th percentile.',
    note: 'Think of quarters of a dollar. 1 quarter = 25 cents.'
  },
  {
    id: 'cur-m10-009',
    type: 'DEFINITION',
    topic: 'Measurement of study variables',
    difficulty: 'medium',
    front: 'Inter-quartile Range (IQR)',
    back: 'The difference between the 3rd Quartile (75th percentile) and the 1st Quartile (25th percentile).\nIt covers the middle 50% of the observations.',
    note: 'Because it only looks at the middle 50%, it is NOT affected by extreme values.'
  },
  {
    id: 'cur-m10-010',
    type: 'DEFINITION',
    topic: 'Measurement of study variables',
    difficulty: 'medium',
    front: 'Pairing measures of central tendency and dispersion',
    back: 'If you report the Mean → report Standard Deviation.\nIf you report the Median → report the Inter-quartile Range (IQR).',
    note: 'Mean goes with SD. Median goes with IQR.'
  },
  {
    id: 'cur-m10-011',
    type: 'DEFINITION',
    topic: 'Measurement of study variables',
    difficulty: 'easy',
    front: 'Range',
    back: 'The difference between the minimum and maximum value in a dataset.',
    note: 'Maximum minus Minimum = Range.'
  },
  {
    id: 'cur-m10-012',
    type: 'DEFINITION',
    topic: 'Measurement of study variables',
    difficulty: 'medium',
    front: 'Standard Deviation (SD)',
    back: 'The square root of the average of the squared deviations of the observations from the arithmetic mean.',
    note: 'It is the most important measure of dispersion. It is measured in the exact same units as the original data.'
  },
  {
    id: 'cur-m10-013',
    type: 'DEFINITION',
    topic: 'Measurement of study variables',
    difficulty: 'medium',
    front: 'Variance',
    back: 'The square of the standard deviation.\n🎯 Exam trap: Variance is calculated based on deviations from the MEAN, not median or mode.',
    note: 'Standard deviation = √Variance'
  },
  {
    id: 'cur-m10-014',
    type: 'DEFINITION',
    topic: 'Measurement of study variables',
    difficulty: 'medium',
    front: 'Mean Deviation',
    back: 'The average of the absolute deviations of the observations from the arithmetic mean.',
    note: 'If you just take absolute values (no squaring) and average them, it\'s Mean Deviation.'
  },
  {
    id: 'cur-m10-015',
    type: 'DEFINITION',
    topic: 'Measurement of study variables',
    difficulty: 'hard',
    front: 'Coefficient of Variation (CV)',
    back: 'Formula: (Standard Deviation / Mean) × 100.\nIt is a relative, unit-free measure of dispersion.\nUse it when comparing the variability of two variables that are measured in DIFFERENT units (e.g., comparing weight in kg vs height in cm).',
    note: 'The only measure of dispersion that gives you a percentage instead of units.'
  },
  {
    id: 'cur-m10-016',
    type: 'SCENARIO',
    topic: 'Measurement of study variables',
    difficulty: 'medium',
    front: 'Scenario: Mean = 25, Standard Deviation = 5. Calculate Coefficient of Variation.',
    back: 'CV = (5 / 25) × 100 = 20%.',
    note: '(SD / Mean) × 100'
  },
  {
    id: 'cur-m10-017',
    type: 'SCENARIO',
    topic: 'Measurement of study variables',
    difficulty: 'medium',
    front: 'Scenario: Find the median of 12, 26, 10, 29, 48.',
    back: '26.\nSteps: First, SORT the data (10, 12, 26, 29, 48). The middle value is 26.',
    note: 'Never find the median without sorting the numbers first!'
  },
  {
    id: 'cur-m10-018',
    type: 'SCENARIO',
    topic: 'Measurement of study variables',
    difficulty: 'hard',
    front: 'Scenario: In 100 COPD patients, median FEV is 2.0L. Q1 is 1.5L, Q3 is 3.0L. How many patients have FEV between 1.5L and 3.0L?',
    back: '50 patients.\nWhy? The space between Q1 and Q3 is the Inter-quartile Range, which always covers exactly 50% of the sample.',
    note: '100 patients × 50% = 50 patients.'
  },
  {
    id: 'cur-m10-019',
    type: 'LIST',
    topic: 'Measurement of study variables',
    difficulty: 'easy',
    front: 'Measures of Dispersion',
    back: 'Range, Inter-quartile range, Variance, Standard deviation, Mean deviation.\n🎯 Exam trap: Mean, median, and mode are measures of Central Tendency, NOT dispersion.',
    note: 'Central tendency = Where is the middle? Dispersion = How spread out are they?'
  },
  {
    id: 'cur-m10-020',
    type: 'DEFINITION',
    topic: 'Measurement of study variables',
    difficulty: 'easy',
    front: 'Operational definition',
    back: 'Defining a construct specifically in terms of the operations used to measure it in your study (e.g., "Hypertension is defined as BP > 140/90 measured twice with a mercury sphygmomanometer").',
    note: 'It tells other researchers exactly HOW you measured the variable.'
  }
];