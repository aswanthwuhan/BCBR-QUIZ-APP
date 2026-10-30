import { CuratedCard } from './types';

// Module 6 — Analytical study designs (BCBR lecture 6).
export const MODULE_6_CARDS: CuratedCard[] = [
  {
    id: 'cur-m6-001',
    type: 'DEFINITION',
    topic: 'Analytical study designs',
    difficulty: 'easy',
    front: 'Analytical study vs Descriptive study — key difference',
    back: 'An analytical study ALWAYS has a comparison (control) group to test a hypothesis about an association. A descriptive study does not have a comparison group.\n🎯 Exam trap: If a question mentions a "comparison group", the study is analytical.',
    note: 'Descriptive = Describes (Who, what, when, where). Analytical = Analyzes (Why, how, comparing two groups).'
  },
  {
    id: 'cur-m6-002',
    type: 'DIFFERENCE',
    topic: 'Analytical study designs',
    difficulty: 'medium',
    front: 'Observational vs Experimental designs — investigator role',
    back: 'In observational analytical studies (cohort, case-control, cross-sectional), the investigator does NOT assign exposure; they only observe it. In experimental studies (RCTs), the investigator assigns the exposure/intervention.',
    note: 'Observational = Nature assigns the exposure. Experimental = Investigator assigns the exposure.'
  },
  {
    id: 'cur-m6-003',
    type: 'DEFINITION',
    topic: 'Analytical study designs',
    difficulty: 'easy',
    front: 'Cohort study — definition & direction',
    back: 'A study where a group of people with defined characteristics is followed up over time (from exposure to outcome) to measure the incidence of disease.\n🎯 Exam trap: A cohort study always proceeds from EXPOSURE → OUTCOME.',
    note: 'Think "C" for Cohort and "C" for Cause-to-effect.'
  },
  {
    id: 'cur-m6-004',
    type: 'DIFFERENCE',
    topic: 'Analytical study designs',
    difficulty: 'hard',
    front: 'Retrospective Cohort vs Case-Control',
    back: 'Retrospective cohort: Starts with EXPOSURE from past records and traces forward to the outcome.\nCase-Control: Starts with OUTCOME (disease) and looks backward at past exposure.\n🎯 Exam trap: Just because a study uses past medical records does NOT automatically make it a case-control study. If they group by exposure first, it\'s a retrospective cohort.',
    note: 'Always ask: "How were the groups initially formed?" Grouped by exposure = Cohort. Grouped by disease = Case-Control.'
  },
  {
    id: 'cur-m6-005',
    type: 'DEFINITION',
    topic: 'Analytical study designs',
    difficulty: 'medium',
    front: 'Temporal association — best observational design',
    back: 'Cohort study.\nWhy? Because exposure is measured before the outcome occurs, so the time order (temporality) is clearly established.',
    note: 'Temporality means proving the cause happened BEFORE the effect. Cohort studies track people over time, making this clear.'
  },
  {
    id: 'cur-m6-006',
    type: 'LIST',
    topic: 'Analytical study designs',
    difficulty: 'medium',
    front: 'Cohort study — limitations',
    back: '1. Expensive and time-consuming.\n2. Not suitable for diseases with a long latency period.\n3. Not suitable for rare diseases.\n4. Loss to follow-up can introduce bias (attrition bias).',
    note: 'Imagine following 10,000 people for 20 years to see if 5 get a rare cancer. It\'s too expensive and many will drop out.'
  },
  {
    id: 'cur-m6-007',
    type: 'LIST',
    topic: 'Analytical study designs',
    difficulty: 'medium',
    front: 'Case-control study — limitations',
    back: '1. Incidence cannot be calculated.\n2. Prone to recall bias (people with disease remember exposures differently).\n3. Selection of appropriate controls is difficult.',
    note: 'Because you start with people who already have the disease, you don\'t know the population at risk, so you cannot calculate incidence.'
  },
  {
    id: 'cur-m6-008',
    type: 'DIFFERENCE',
    topic: 'Analytical study designs',
    difficulty: 'medium',
    front: 'Rare disease vs Rare exposure — study choice',
    back: 'Rare disease = Case-Control study (you can deliberately gather all cases).\nRare exposure = Cohort study (you can deliberately gather everyone who had the rare exposure, like a chemical spill).',
    note: 'Match the design to the rarity. For a rare disease, finding cases is hard, so start with the cases (Case-Control).'
  },
  {
    id: 'cur-m6-009',
    type: 'DEFINITION',
    topic: 'Analytical study designs',
    difficulty: 'hard',
    front: 'Survivor bias in Case-Control studies',
    back: 'Including PREVALENT cases (old cases) instead of just INCIDENT cases (new cases) can introduce survivor bias, because prevalent cases only represent those who survived the disease long enough to be included in the study.\n🎯 Exam trap: Prevalent cases save time/money, but cause bias.',
    note: 'If a disease is quickly fatal, prevalent cases will only show mild forms of the disease, warping your exposure data.'
  },
  {
    id: 'cur-m6-010',
    type: 'DIFFERENCE',
    topic: 'Analytical study designs',
    difficulty: 'medium',
    front: 'Relative Risk (RR) vs Odds Ratio (OR)',
    back: 'Relative Risk (Risk Ratio): Used in Cohort studies. Ratio of incidence in exposed vs unexposed.\nOdds Ratio: Used in Case-Control studies. Ratio of odds of exposure in cases vs controls.',
    note: 'RR = Cohort (you have incidence rates). OR = Case-Control (you don\'t have rates, only odds).'
  },
  {
    id: 'cur-m6-011',
    type: 'DEFINITION',
    topic: 'Analytical study designs',
    difficulty: 'easy',
    front: 'Relative Risk (RR) — what does it indicate?',
    back: 'RR > 1: Exposure increases risk (positive association).\nRR = 1: No association (incidence in exposed equals unexposed).\nRR < 1: Exposure decreases risk (protective factor).',
    note: 'Think of 1.0 as the baseline. 2.0 means twice the risk. 0.5 means half the risk.'
  },
  {
    id: 'cur-m6-012',
    type: 'DEFINITION',
    topic: 'Analytical study designs',
    difficulty: 'easy',
    front: 'Odds Ratio (OR) — what does it indicate?',
    back: 'OR > 1: Odds of exposure among cases is higher than among controls.\nOR = 1: Odds are equal (no association).\nOR < 1: Odds of exposure among cases is lower than among controls.',
    note: 'OR is just a stand-in for RR when you are forced to use a Case-Control study.'
  },
  {
    id: 'cur-m6-013',
    type: 'SCENARIO',
    topic: 'Analytical study designs',
    difficulty: 'medium',
    front: 'Scenario: Investigating history of exclusive breastfeeding in children with Crohn\'s vs matched siblings',
    back: 'Case-Control study.\nWhy? The study started by recruiting diseased children (cases) and matched siblings without disease (controls), then looked BACKWARD at history of breastfeeding (exposure).',
    note: 'Disease first → Exposure past = Case-Control.'
  },
  {
    id: 'cur-m6-014',
    type: 'SCENARIO',
    topic: 'Analytical study designs',
    difficulty: 'hard',
    front: 'Scenario: Using 2000-2010 medical records to find coal miners vs non-miners, then checking their 2019 lung cancer status',
    back: 'Retrospective Cohort study.\nWhy? The investigator grouped them based on past EXPOSURE (coal mining vs not), and then traced them forward to the OUTCOME (lung cancer).',
    note: 'Even though the data is old (retrospective), the LOGICAL flow is exposure → outcome.'
  },
  {
    id: 'cur-m6-015',
    type: 'SCENARIO',
    topic: 'Analytical study designs',
    difficulty: 'medium',
    front: 'Scenario: Screening a community, asking diet habits, and following them for years for colon cancer',
    back: 'Prospective Cohort study.\nWhy? Population is free of disease at baseline, grouped by current exposure (diet), and followed forward in time for the outcome.',
    note: 'Prospective = happening in real-time forward.'
  },
  {
    id: 'cur-m6-016',
    type: 'SCENARIO',
    topic: 'Analytical study designs',
    difficulty: 'medium',
    front: 'Scenario: Selecting 384 hypertensive patients, assessing socio-economic status and current drug compliance simultaneously',
    back: 'Analytical Cross-sectional study.\nWhy? Both the exposure (socio-economic) and outcome (compliance) are measured at the same time ("snapshot"), but groups are compared.',
    note: 'Cross-sectional = Snapshot in time (no follow-up).'
  },
  {
    id: 'cur-m6-017',
    type: 'SCENARIO',
    topic: 'Analytical study designs',
    difficulty: 'hard',
    front: 'Scenario: Calculating Odds Ratio from a 2x2 table',
    back: 'Formula: ad / bc (cross-product ratio).\nExample from exam: OR = (Cases exposed × Controls unexposed) / (Cases unexposed × Controls exposed).',
    note: 'Always draw the 2x2 table. Cases/Controls on top, Exposed/Unexposed on the side. OR = (a*d) / (b*c).'
  },
  {
    id: 'cur-m6-018',
    type: 'DEFINITION',
    topic: 'Analytical study designs',
    difficulty: 'easy',
    front: 'Selection of controls in Case-Control',
    back: 'Controls should be selected from the same source population that gave rise to the cases.\n🎯 Exam trap: Controls are NOT selected based on exposure status; they are selected because they DO NOT have the disease.',
    note: 'If you selected controls based on exposure, you\'d ruin the ability to calculate the odds of exposure!'
  },
  {
    id: 'cur-m6-019',
    type: 'DEFINITION',
    topic: 'Analytical study designs',
    difficulty: 'easy',
    front: 'Birth cohort — definition',
    back: 'A group of people born in the same particular year or time period.\n(e.g., all babies born in 2020).',
    note: 'A cohort is any group sharing a common characteristic/event. Birth is the most common defining event.'
  },
  {
    id: 'cur-m6-020',
    type: 'DEFINITION',
    topic: 'Analytical study designs',
    difficulty: 'medium',
    front: 'Relative risk is a Rate, Ratio, or Proportion?',
    back: 'It is a RATIO.\nWhy? Because it divides two separate incidence rates (Incidence in exposed / Incidence in unexposed).',
    note: 'The name gives it away: Risk RATIO.'
  }
];