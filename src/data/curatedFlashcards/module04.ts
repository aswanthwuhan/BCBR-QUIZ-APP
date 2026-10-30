import { CuratedCard } from './types';

// Module 4 — Measures of disease frequency
export const MODULE_4_CARDS: CuratedCard[] = [
  {
    id: 'cur-m4-001',
    type: 'DEFINITION',
    topic: 'Measures of disease frequency',
    difficulty: 'easy',
    front: 'Incidence — definition',
    back: 'Measures the rapidity with which NEW cases are occurring in a population over a specified period. Estimates the risk of acquiring disease.',
    note: 'Incidence = NEW cases only. Risk = Incidence.'
  },
  {
    id: 'cur-m4-002',
    type: 'DEFINITION',
    topic: 'Measures of disease frequency',
    difficulty: 'easy',
    front: 'Prevalence — definition',
    back: 'The proportion of ALL cases (both new and pre-existing) present in a population at a specific point in time (Point Prevalence) or over a period (Period Prevalence).',
    note: 'Prevalence = ALL existing cases. Burden = Prevalence.'
  },
  {
    id: 'cur-m4-003',
    type: 'DEFINITION',
    topic: 'Measures of disease frequency',
    difficulty: 'medium',
    front: 'Evaluating a prevention program — best measure',
    back: 'Incidence.\nIf a prevention program (e.g., vaccine) works, the rate of NEW cases (incidence) will drop.',
    note: 'Prevention stops new cases.'
  },
  {
    id: 'cur-m4-004',
    type: 'DEFINITION',
    topic: 'Measures of disease frequency',
    difficulty: 'medium',
    front: 'Measuring disease with gradual onset',
    back: 'Incidence is NOT suitable for diseases with gradual onset (e.g., osteoarthritis) because the exact onset time cannot be dated.\nPrevalence is used instead.',
    note: 'To calculate incidence, you must know exactly WHEN the disease started.'
  },
  {
    id: 'cur-m4-005',
    type: 'DIFFERENCE',
    topic: 'Measures of disease frequency',
    difficulty: 'hard',
    front: 'What increases / decreases prevalence?',
    back: 'Increases Prevalence: Low cure rate, low case fatality (patients live longer with the disease).\nDecreases Prevalence: High cure rate, high case fatality (patients exit the prevalence pool quickly by recovering or dying).',
    note: 'Think of a bathtub: Incidence = faucet (inflow). Cure/Death = drain (outflow). Prevalence = water level.'
  },
  {
    id: 'cur-m4-006',
    type: 'DEFINITION',
    topic: 'Measures of disease frequency',
    difficulty: 'medium',
    front: 'Severity of an acute infectious disease — measure',
    back: 'Case fatality ratio.\nIt is the proportion of people with the condition who die from it. Indicates poor prognosis.\n🎯 Exam trap: Case fatality is a proportion/ratio, NOT a true rate.',
    note: 'Case fatality = (Deaths from disease) / (Total cases of disease).'
  },
  {
    id: 'cur-m4-007',
    type: 'DEFINITION',
    topic: 'Measures of disease frequency',
    difficulty: 'medium',
    front: 'Burden of disease in terms of DEATHS in a population',
    back: 'Disease-specific mortality.\nIt relates the number of deaths from a disease to the TOTAL population.',
    note: 'Mortality denominator = total population. Case fatality denominator = diseased people.'
  },
  {
    id: 'cur-m4-008',
    type: 'DEFINITION',
    topic: 'Measures of disease frequency',
    difficulty: 'easy',
    front: 'Cumulative incidence — synonym',
    back: 'Attack rate (or Incidence proportion).',
    note: 'Often used in outbreaks (e.g., food poisoning attack rate).'
  },
  {
    id: 'cur-m4-009',
    type: 'DEFINITION',
    topic: 'Measures of disease frequency',
    difficulty: 'medium',
    front: 'Incidence density — definition & numerator/denominator',
    back: 'Numerator: Number of NEW cases.\nDenominator: Total PERSON-TIME (e.g., person-years) of observation for the population at risk.\n🎯 Exam trap: The denominator is NOT the number of persons, it is person-time.',
    note: 'Used when follow-up times vary between subjects.'
  },
  {
    id: 'cur-m4-010',
    type: 'SCENARIO',
    topic: 'Measures of disease frequency',
    difficulty: 'medium',
    front: 'Scenario: Chronic disease incidence vs prevalence',
    back: 'Chronic diseases (like diabetes) typically have LOW incidence but HIGH prevalence, because cases accumulate over many years.',
    note: 'Chronic = High prevalence.'
  },
  {
    id: 'cur-m4-011',
    type: 'SCENARIO',
    topic: 'Measures of disease frequency',
    difficulty: 'medium',
    front: 'Scenario: Acute infectious disease incidence vs prevalence',
    back: 'Acute diseases (like common cold) typically have HIGH incidence but LOW prevalence, because they resolve quickly (high cure rate).',
    note: 'Acute = High incidence, low prevalence.'
  },
  {
    id: 'cur-m4-012',
    type: 'SCENARIO',
    topic: 'Measures of disease frequency',
    difficulty: 'hard',
    front: 'Calculation: Person-years. 100 people followed. Year 1: 10 get disease. Year 2: 10 leave study. Year 3: 10 get disease.',
    back: 'Total person-years = 270.\nYear 1: 100 people.\nYear 2: 90 people (100 - 10 diseased).\nYear 3: 80 people (90 - 10 left).\n100 + 90 + 80 = 270 person-years.',
    note: 'Once a person gets the disease or leaves, they no longer contribute person-years.'
  },
  {
    id: 'cur-m4-013',
    type: 'SCENARIO',
    topic: 'Measures of disease frequency',
    difficulty: 'medium',
    front: 'Calculation: Incidence of suicidal ideation. 100 patients total. 7 had past history. 20 developed it during 1 year.',
    back: 'Incidence = 21.5%.\nNumerator = 20 new cases.\nDenominator = 93 at risk (100 total - 7 who already had it).\n20 / 93 = 21.5%.',
    note: 'ALWAYS subtract pre-existing cases from the denominator when calculating incidence.'
  },
  {
    id: 'cur-m4-014',
    type: 'SCENARIO',
    topic: 'Measures of disease frequency',
    difficulty: 'easy',
    front: 'Calculation: Prevalence per 1000. 105 cases in 25,000 population.',
    back: '4.2 per 1000.\n(105 / 25,000) * 1000 = 4.2.',
    note: 'Formula: (Cases / Population) * Multiplier.'
  },
  {
    id: 'cur-m4-015',
    type: 'SCENARIO',
    topic: 'Measures of disease frequency',
    difficulty: 'easy',
    front: 'Calculation: Case fatality ratio. 75 affected, 50 hospitalized, 2 died.',
    back: '2.7%.\n(2 deaths / 75 total cases) * 100 = 2.66%.\n🎯 Exam trap: Do not use the 50 hospitalized as the denominator; use TOTAL affected cases.',
    note: 'Case fatality denominator = Total cases.'
  },
  {
    id: 'cur-m4-016',
    type: 'DEFINITION',
    topic: 'Measures of disease frequency',
    difficulty: 'easy',
    front: 'What is NOT required for calculating prevalence?',
    back: 'Total person-time of observation.\n🎯 Exam trap: Person-time is ONLY used for calculating Incidence Density, never prevalence.',
    note: 'Prevalence uses population (headcount). Incidence density uses person-time.'
  },
  {
    id: 'cur-m4-017',
    type: 'DEFINITION',
    topic: 'Measures of disease frequency',
    difficulty: 'medium',
    front: 'Prevalence multiplier',
    back: 'The multiplier (e.g., per 100, per 1000, per 100,000) is chosen depending upon how rare or common the disease is.',
    note: 'Common disease = %. Rare disease = per 100,000.'
  },
  {
    id: 'cur-m4-018',
    type: 'DEFINITION',
    topic: 'Measures of disease frequency',
    difficulty: 'medium',
    front: 'Change in prevalence over time — causes',
    back: 'It may be the result of changes in incidence rates, changes in the duration of the disease, or both.',
    note: 'If prevalence rises, either more people are getting it (incidence), or they are living longer with it (duration).'
  },
  {
    id: 'cur-m4-019',
    type: 'DEFINITION',
    topic: 'Measures of disease frequency',
    difficulty: 'medium',
    front: 'Measuring disease occurrence — components',
    back: 'Must consider:\n1. Number of people affected\n2. Population size from which cases arise\n3. Length of time the population is followed.',
    note: 'Count, Denominator, and Time.'
  },
  {
    id: 'cur-m4-020',
    type: 'SCENARIO',
    topic: 'Measures of disease frequency',
    difficulty: 'hard',
    front: 'Calculation: Cross-sectional prevalence. 10,000 population. 400 reported spectacle use, 800 identified during survey.',
    back: 'Prevalence = 12.0%.\nTotal existing cases = 400 (known) + 800 (newly found) = 1200.\n1200 / 10,000 = 12%.',
    note: 'Prevalence counts ALL cases, both pre-existing and newly identified.'
  }
];