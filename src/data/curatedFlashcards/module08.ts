import { CuratedCard } from './types';

// Module 8 — Validity of epidemiological studies (BCBR lecture 8).
export const MODULE_8_CARDS: CuratedCard[] = [
  {
    id: 'cur-m8-001',
    type: 'DIFFERENCE',
    topic: 'Validity of epidemiological studies',
    difficulty: 'medium',
    front: 'Internal vs External validity',
    back: 'Internal validity: The study provides an unbiased, true estimate for its OWN study population.\nExternal validity: The study\'s findings can be generalized to the broader, general population.',
    note: 'Internal = "Did we do the study right?" External = "Does this apply to others?"'
  },
  {
    id: 'cur-m8-002',
    type: 'LIST',
    topic: 'Validity of epidemiological studies',
    difficulty: 'easy',
    front: 'Threats to Internal Validity',
    back: '1. Bias (Systematic error)\n2. Confounding\n3. Random error',
    note: 'These three things can ruin the truth of your study\'s results.'
  },
  {
    id: 'cur-m8-003',
    type: 'DIFFERENCE',
    topic: 'Validity of epidemiological studies',
    difficulty: 'medium',
    front: 'Random error vs Systematic error (Bias)',
    back: 'Random error: Chance differences with no pattern. Reduces precision.\nSystematic error: Predictable, patterned differences that skew results in one direction. Reduces accuracy (validity).',
    note: 'Random error is like a shaky hand shooting at a target. Systematic error is like a misaligned rifle sight always shooting to the left.'
  },
  {
    id: 'cur-m8-004',
    type: 'LIST',
    topic: 'Validity of epidemiological studies',
    difficulty: 'easy',
    front: 'Bias — two main categories',
    back: '1. Selection bias (errors in how participants are chosen)\n2. Information bias / Observational bias (errors in how data is measured or collected)',
    note: 'Bias happens either when picking people, or when getting answers from them.'
  },
  {
    id: 'cur-m8-005',
    type: 'DEFINITION',
    topic: 'Validity of epidemiological studies',
    difficulty: 'hard',
    front: 'Confounding variable — three essential criteria',
    back: '1. Must be a risk factor for the disease.\n2. Must be associated with the exposure.\n3. Must NOT be on the causal pathway between exposure and disease.\n🎯 Exam trap: If it\'s a direct result of the exposure causing the disease, it is NOT a confounder.',
    note: 'Example: Coffee drinking (exposure) and Lung cancer (disease). Smoking is a confounder because coffee drinkers smoke more, and smoking causes cancer.'
  },
  {
    id: 'cur-m8-006',
    type: 'DEFINITION',
    topic: 'Validity of epidemiological studies',
    difficulty: 'medium',
    front: 'Healthy worker effect',
    back: 'A type of SELECTION BIAS where employed workers are generally healthier than the general population (which includes sick and disabled people).',
    note: 'If you compare chemical workers to the general population, the chemical workers might falsely look "healthier" just because they are fit enough to work.'
  },
  {
    id: 'cur-m8-007',
    type: 'DEFINITION',
    topic: 'Validity of epidemiological studies',
    difficulty: 'easy',
    front: 'Recall bias — study design most affected',
    back: 'Case-control studies.\nCases (sick people) are more likely to remember past exposures or dwell on them compared to healthy controls (Information bias).',
    note: 'A mother of a baby with a birth defect will remember everything she ate during pregnancy. A mother of a healthy baby won\'t.'
  },
  {
    id: 'cur-m8-008',
    type: 'DEFINITION',
    topic: 'Validity of epidemiological studies',
    difficulty: 'easy',
    front: 'Loss to follow-up (Attrition bias) — study design most affected',
    back: 'Cohort studies.',
    note: 'Because cohort studies take years, people move away, drop out, or stop replying.'
  },
  {
    id: 'cur-m8-009',
    type: 'DEFINITION',
    topic: 'Validity of epidemiological studies',
    difficulty: 'medium',
    front: 'Nested case-control study',
    back: 'A case-control study conducted WITHIN an existing, larger cohort study.\nCases of a disease that occur in the cohort are identified, and a sample of those who do not have the disease are selected as controls.',
    note: 'It combines the benefits of both designs. You use the already-collected baseline data of the cohort.'
  },
  {
    id: 'cur-m8-010',
    type: 'DIFFERENCE',
    topic: 'Validity of epidemiological studies',
    difficulty: 'medium',
    front: 'Multiple Outcomes vs Multiple Exposures (Study Designs)',
    back: 'Cohort studies can study multiple OUTCOMES for a single exposure.\nCase-control studies can study multiple EXPOSURES for a single outcome.',
    note: 'Cohort: You follow smokers (exposure), and see if they get cancer, COPD, or heart disease (multiple outcomes). Case-control: You take cancer patients (outcome) and ask about smoking, diet, asbestos (multiple exposures).'
  },
  {
    id: 'cur-m8-011',
    type: 'DEFINITION',
    topic: 'Validity of epidemiological studies',
    difficulty: 'easy',
    front: 'Outbreak investigations — best study design',
    back: 'Case-control study.\nWhy? It is fast and can quickly identify the source of an outbreak by comparing sick people (cases) to healthy people (controls) and checking what they ate/did.',
    note: 'Food poisoning at a wedding? Case-control is the fastest way to blame the potato salad.'
  },
  {
    id: 'cur-m8-012',
    type: 'DEFINITION',
    topic: 'Validity of epidemiological studies',
    difficulty: 'medium',
    front: 'Controlling for confounding in Case-Control studies',
    back: 'Matching.\nYou intentionally select controls who match the cases on potential confounding variables (like age and sex).',
    note: 'If age is a confounder, and your case is 50, you purposely pick a 50-year-old control.'
  },
  {
    id: 'cur-m8-013',
    type: 'DEFINITION',
    topic: 'Validity of epidemiological studies',
    difficulty: 'medium',
    front: 'Calculating Relative Risk in a Case-Control study?',
    back: 'False. You generally cannot calculate Relative Risk (RR) in a Case-Control study because you cannot calculate incidence.\nYou calculate Odds Ratio (OR) instead.',
    note: 'Only in rare diseases does the OR approximate the RR.'
  },
  {
    id: 'cur-m8-014',
    type: 'DEFINITION',
    topic: 'Validity of epidemiological studies',
    difficulty: 'easy',
    front: 'Which study design establishes temporality?',
    back: 'Cohort study.\nIt clearly proves that the exposure came BEFORE the outcome.',
    note: 'Temporality = Time order.'
  },
  {
    id: 'cur-m8-015',
    type: 'DEFINITION',
    topic: 'Validity of epidemiological studies',
    difficulty: 'easy',
    front: 'Which study design can calculate incidence directly?',
    back: 'Cohort study.',
    note: 'Incidence = new cases. Cohort follows healthy people to see who gets sick (new cases).'
  },
  {
    id: 'cur-m8-016',
    type: 'DEFINITION',
    topic: 'Validity of epidemiological studies',
    difficulty: 'medium',
    front: 'Case-Control: Selection of Controls',
    back: 'Controls should be people from the EXACT SAME source population as the cases, but without the disease.\n🎯 Exam trap: Controls are not just "healthy volunteers" from anywhere.',
    note: 'If your cases are from a specific hospital, your controls should ideally be patients from that same hospital without the disease.'
  },
  {
    id: 'cur-m8-017',
    type: 'DEFINITION',
    topic: 'Validity of epidemiological studies',
    difficulty: 'medium',
    front: 'Retrospective Cohort vs Case-Control (Are they the same?)',
    back: 'No. They are fundamentally different.\nA retrospective cohort starts by grouping people based on past EXPOSURE. A case-control starts by grouping people based on current DISEASE.',
    note: 'Direction is everything. Exposure to outcome = Cohort. Outcome to exposure = Case-Control.'
  },
  {
    id: 'cur-m8-018',
    type: 'SCENARIO',
    topic: 'Validity of epidemiological studies',
    difficulty: 'medium',
    front: 'Scenario: Odds Ratio of 1.0',
    back: 'There is NO association between the exposure and the disease.',
    note: '1.0 means the odds are exactly equal in both groups.'
  },
  {
    id: 'cur-m8-019',
    type: 'SCENARIO',
    topic: 'Validity of epidemiological studies',
    difficulty: 'medium',
    front: 'Scenario: Relative Risk of 2.0',
    back: 'The exposed group has TWICE the risk of developing the disease compared to the unexposed group.',
    note: 'RR = Risk in exposed / Risk in unexposed. 2.0 means numerator is double the denominator.'
  }
];