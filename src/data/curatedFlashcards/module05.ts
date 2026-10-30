import { CuratedCard } from './types';

// Module 5 — Descriptive study designs
export const MODULE_5_CARDS: CuratedCard[] = [
  {
    id: 'cur-m5-001',
    type: 'DEFINITION',
    topic: 'Descriptive study designs',
    difficulty: 'easy',
    front: 'Case report — definition & uses',
    back: 'A detailed description of a SINGLE patient.\nUsed to describe rare, unfamiliar diseases, or uncommon clinical manifestations of a common disease.',
    note: 'Focuses on one unique patient. High detail, lowest generalizability.'
  },
  {
    id: 'cur-m5-002',
    type: 'DIFFERENCE',
    topic: 'Descriptive study designs',
    difficulty: 'easy',
    front: 'Case report vs Case series',
    back: 'Case report: Describes 1 patient.\nCase series: Describes a group of patients (e.g., 15 patients) with the same rare disease or exposure.',
    note: 'Series = multiple cases.'
  },
  {
    id: 'cur-m5-003',
    type: 'DEFINITION',
    topic: 'Descriptive study designs',
    difficulty: 'medium',
    front: 'Case series — main limitation for efficacy',
    back: 'There is NO comparison group.\nTherefore, a case series alone cannot establish the efficacy of a new drug or surgical device.',
    note: 'To prove efficacy, you need a control group (Analytical/Experimental study).'
  },
  {
    id: 'cur-m5-004',
    type: 'DEFINITION',
    topic: 'Descriptive study designs',
    difficulty: 'easy',
    front: 'Cross-sectional study (Survey) — uses',
    back: 'To estimate disease burden (prevalence), describe trends, and generate hypotheses.',
    note: 'Provides a "snapshot" of the population at one point in time.'
  },
  {
    id: 'cur-m5-005',
    type: 'DEFINITION',
    topic: 'Descriptive study designs',
    difficulty: 'medium',
    front: 'Cross-sectional study — key characteristic regarding timing',
    back: 'Exposure and outcome are assessed AT THE SAME TIME.\n🎯 Exam trap: Because of this, it CANNOT establish temporality (which came first) or disease etiology.',
    note: 'Cannot prove cause and effect because you don\'t know if exposure preceded the disease.'
  },
  {
    id: 'cur-m5-006',
    type: 'DIFFERENCE',
    topic: 'Descriptive study designs',
    difficulty: 'medium',
    front: 'Descriptive vs Analytical Cross-sectional study',
    back: 'Descriptive cross-sectional: Does NOT have a comparison group; just measures prevalence.\nAnalytical cross-sectional: Has a comparison group; used to identify factors associated with an outcome.',
    note: 'Analytical means comparing groups to find associations.'
  },
  {
    id: 'cur-m5-007',
    type: 'DEFINITION',
    topic: 'Descriptive study designs',
    difficulty: 'medium',
    front: 'Descriptive epidemiology — what questions does it answer?',
    back: 'Who, When, and Where (Person, Time, Place).\n🎯 Exam trap: It does NOT answer "Why" (causation/etiology).',
    note: '"Why" requires analytical studies.'
  },
  {
    id: 'cur-m5-008',
    type: 'DEFINITION',
    topic: 'Descriptive study designs',
    difficulty: 'medium',
    front: 'Ecological study — definition & unit of observation',
    back: 'A study that relates exposure and outcome at the POPULATION/GROUP level.\n🎯 Exam trap: The unit of observation is the group, NOT the individual.',
    note: 'Uses aggregated data (e.g., comparing country-level air pollution to country-level infertility).'
  },
  {
    id: 'cur-m5-009',
    type: 'DEFINITION',
    topic: 'Descriptive study designs',
    difficulty: 'medium',
    front: 'Ecological study — main advantage',
    back: 'It relates the rate of disease and frequency of exposure at a population level, making it very useful to GENERATE hypotheses.',
    note: 'Fast and cheap way to find potential links using existing macro-level data.'
  },
  {
    id: 'cur-m5-010',
    type: 'SCENARIO',
    topic: 'Descriptive study designs',
    difficulty: 'easy',
    front: 'Scenario: Population census',
    back: 'A population census is classified as a Cross-sectional survey.',
    note: 'It takes a snapshot of the entire population\'s demographics at one time.'
  },
  {
    id: 'cur-m5-011',
    type: 'DEFINITION',
    topic: 'Descriptive study designs',
    difficulty: 'medium',
    front: 'Estimating disease burden — practical use',
    back: 'Helps in planning for resource allocation by the department of health.',
    note: 'If prevalence is high, the government allocates more hospitals/funds.'
  },
  {
    id: 'cur-m5-012',
    type: 'DEFINITION',
    topic: 'Descriptive study designs',
    difficulty: 'medium',
    front: 'Do descriptive studies use comparison groups?',
    back: 'No. Descriptive studies (e.g., case reports, descriptive cross-sectional) describe one group without employing comparison groups for their primary objectives.',
    note: 'Comparison = Analytical.'
  },
  {
    id: 'cur-m5-013',
    type: 'LIST',
    topic: 'Descriptive study designs',
    difficulty: 'easy',
    front: 'Case study — data collected',
    back: 'Clinical features, laboratory parameters, and socio-demographic background.\n🎯 Exam trap: You CANNOT calculate "Incidence" from a case study.',
    note: 'Incidence requires a population denominator; a case study has no denominator.'
  },
  {
    id: 'cur-m5-014',
    type: 'SCENARIO',
    topic: 'Descriptive study designs',
    difficulty: 'medium',
    front: 'Scenario: 18 cases of rare Creutzfeldt-Jakob disease reported from one hospital',
    back: 'Case series.\nIt provides a detailed description of a small group of patients with the same rare condition.',
    note: '1 case = report. 18 cases = series.'
  },
  {
    id: 'cur-m5-015',
    type: 'SCENARIO',
    topic: 'Descriptive study designs',
    difficulty: 'medium',
    front: 'Scenario: Data on air quality and infertility for 183 countries in 2019',
    back: 'Ecological study.\nThe data is aggregated at the country (group) level, not the individual level.',
    note: 'Whenever countries or states are the unit of comparison, it\'s an ecological study.'
  },
  {
    id: 'cur-m5-016',
    type: 'DEFINITION',
    topic: 'Descriptive study designs',
    difficulty: 'medium',
    front: 'Cross-sectional study vs Cohort study (Incidence vs Prevalence)',
    back: 'Cross-sectional studies involve ALL existing cases (prevalence).\n🎯 Exam trap: It is FALSE that cross-sectional surveys involve "only incident cases". Incident cases require a Cohort study.',
    note: 'Cross-sectional = Prevalence. Cohort = Incidence.'
  },
  {
    id: 'cur-m5-017',
    type: 'DEFINITION',
    topic: 'Descriptive study designs',
    difficulty: 'hard',
    front: 'Generalizability of case series',
    back: 'Findings from a case series are the LEAST generalizable to the broader population.',
    note: 'A small, highly specific group of sick patients doesn\'t represent the general public.'
  },
  {
    id: 'cur-m5-018',
    type: 'DEFINITION',
    topic: 'Descriptive study designs',
    difficulty: 'easy',
    front: 'Are cross-sectional studies interventional?',
    back: 'No. They are observational.\n🎯 Exam trap: Descriptive cross-sectional studies are NEVER interventional.',
    note: 'You observe, you do not intervene or treat.'
  },
  {
    id: 'cur-m5-019',
    type: 'DEFINITION',
    topic: 'Descriptive study designs',
    difficulty: 'medium',
    front: 'Descriptive studies — what they CANNOT determine',
    back: 'Risk factors of the disease.\nDescriptive studies describe person/place/time, but determining actual risk factors requires analytical studies (like case-control or cohort).',
    note: 'Descriptive = Hypothesis generation. Analytical = Hypothesis testing (finding risk factors).'
  },
  {
    id: 'cur-m5-020',
    type: 'SCENARIO',
    topic: 'Descriptive study designs',
    difficulty: 'hard',
    front: 'Scenario: Finding incidence of myocardial infarction in women on OCPs over 10 years',
    back: 'Cohort study.\nTo calculate incidence over time (10 years follow-up), you MUST use a cohort study, not a cross-sectional study.',
    note: 'Follow-up over time = Cohort.'
  }
];