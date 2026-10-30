import { CuratedCard } from './types';

// Module 2 — Formulating research question, hypothesis and objectives
export const MODULE_2_CARDS: CuratedCard[] = [
  {
    id: 'cur-m2-001',
    type: 'LIST',
    topic: 'Research question',
    difficulty: 'easy',
    front: 'FINER criteria — components',
    back: 'Feasible · Interesting · Novel · Ethical · Relevant',
    note: 'Mnemonic: FINER. 🎯 Exam trap: "Reliable" or "Noble" are NOT part of FINER.'
  },
  {
    id: 'cur-m2-002',
    type: 'DEFINITION',
    topic: 'Research question',
    difficulty: 'medium',
    front: 'PICO framework — components',
    back: 'Population (or Patient)\nIntervention (or Issue of interest)\nComparison (Comparator)\nOutcome',
    note: '🎯 Exam trap: C stands for "Comparison of interest", not "Condition" or "Consequence".'
  },
  {
    id: 'cur-m2-003',
    type: 'LIST',
    topic: 'Life cycle of research',
    difficulty: 'medium',
    front: 'Life cycle of research — chronological steps',
    back: '1. Identify data needs & spell out research question\n2. Formulate objectives\n3. Choose study design\n4. Collect & analyze data\n5. Draw conclusions & formulate recommendations',
    note: '🎯 Exam trap: Identifying data needs ALWAYS comes first. Recommendations are ALWAYS the last step.'
  },
  {
    id: 'cur-m2-004',
    type: 'DIFFERENCE',
    topic: 'Objectives',
    difficulty: 'medium',
    front: 'Descriptive vs Analytical objectives — action verbs',
    back: 'Descriptive studies use: Estimate, Describe (e.g., "Estimate the prevalence").\nAnalytical studies use: Determine, Compare, Examine (e.g., "Determine the effect").\n🎯 Exam trap: NEVER use "Estimate" for analytical, or "Determine" for descriptive.',
    note: 'You *estimate* a number (descriptive). You *determine* a relationship (analytical).'
  },
  {
    id: 'cur-m2-005',
    type: 'LIST',
    topic: 'Hypothesis',
    difficulty: 'medium',
    front: 'Good research hypothesis — core characteristics',
    back: '1. Must be stated "a priori" (before the study)\n2. Simple and focused on the primary objective\n3. Devoid of ambiguity about variables\n4. Specifies ONE exposure and ONE outcome',
    note: '🎯 Exam trap: A hypothesis CANNOT be revised based on study findings, nor is it written after completion.'
  },
  {
    id: 'cur-m2-006',
    type: 'DEFINITION',
    topic: 'Hypothesis',
    difficulty: 'easy',
    front: 'Null hypothesis — definition',
    back: 'States that there is NO difference between the experimental and control groups (or no association between variables).',
    note: 'Null means zero/none. You perform statistical tests to try and REJECT the null hypothesis.'
  },
  {
    id: 'cur-m2-007',
    type: 'DEFINITION',
    topic: 'Hypothesis',
    difficulty: 'medium',
    front: 'Statement made mainly for statistical purpose',
    back: 'The research hypothesis.\nIt sets up the statistical test for the association.',
    note: 'Research question = general inquiry. Objectives = action steps. Hypothesis = statistical test setup.'
  },
  {
    id: 'cur-m2-008',
    type: 'DEFINITION',
    topic: 'Research question',
    difficulty: 'medium',
    front: 'Clear research question — what decisions does it facilitate?',
    back: 'It helps to:\n1. Choose the optimal study design\n2. Identify the study population\n3. Specify the outcomes to be measured and when to measure them.',
    note: 'A good question dictates the entire methodology of the study.'
  },
  {
    id: 'cur-m2-009',
    type: 'DEFINITION',
    topic: 'Research question',
    difficulty: 'medium',
    front: 'Epidemiological wording requirement',
    back: 'A good research question does NOT need to be in strict epidemiological terms.\n🎯 Exam trap: Thinking it must use epidemiological jargon is a common misconception.',
    note: 'Write research questions in specific, clear, everyday scientific language.'
  },
  {
    id: 'cur-m2-010',
    type: 'SCENARIO',
    topic: 'Objectives',
    difficulty: 'hard',
    front: 'Scenario: "To understand the anaemia in pregnancy" — how to improve this objective?',
    back: '1. Use appropriate action verb (e.g., "To estimate the prevalence of...")\n2. Specify the outcome measure (anaemia)\n3. Specify the study setting and time period.',
    note: '"Understand" is a vague verb. Objectives must be specific, measurable actions.'
  },
  {
    id: 'cur-m2-011',
    type: 'DEFINITION',
    topic: 'Objectives',
    difficulty: 'medium',
    front: 'Study objectives — multiple verbs rule',
    back: 'Each objective must be written using a SINGLE action verb.\n🎯 Exam trap: An objective should never use multiple verbs (e.g., "To estimate and determine...").',
    note: 'One objective = One verb. If you have two actions, make two objectives.'
  },
  {
    id: 'cur-m2-012',
    type: 'DEFINITION',
    topic: 'Research question',
    difficulty: 'medium',
    front: 'Research question generation — refinement process',
    back: '1. Review state-of-art information\n2. Raise a question\n3. Decide worth investigating by peer-review\n4. Define measurable exposures & outcomes',
    note: 'General uncertainty → Literature review → specific researchable issue.'
  },
  {
    id: 'cur-m2-013',
    type: 'LIST',
    topic: 'Research question',
    difficulty: 'easy',
    front: 'Research question — ideal sources',
    back: 'Published literature, attending conferences (new findings), careful observation in clinics, and teaching.\n🎯 Exam trap: "Mining existing datasets" or "Personal experiences" are NOT considered ideal scientific sources.',
    note: 'Data dredging (mining datasets for questions) leads to false positives.'
  },
  {
    id: 'cur-m2-014',
    type: 'SCENARIO',
    topic: 'Study designs',
    difficulty: 'medium',
    front: 'Scenario: Estimating prevalence of autism and co-morbidities among children in a clinic',
    back: 'This requires a Descriptive study.\nThe goal is to measure a quantity (prevalence), not to test a comparison group.',
    note: 'Prevalence = Descriptive. Association/Effect = Analytical.'
  },
  {
    id: 'cur-m2-015',
    type: 'SCENARIO',
    topic: 'Study designs',
    difficulty: 'medium',
    front: 'Scenario: Studying childhood trauma and psychosis',
    back: 'This requires an Analytical study.\nThe goal is to determine the relationship between an exposure (trauma) and an outcome (psychosis).',
    note: 'Looking for a link between two variables always requires an analytical design.'
  },
  {
    id: 'cur-m2-016',
    type: 'DEFINITION',
    topic: 'Hypothesis',
    difficulty: 'medium',
    front: 'Do descriptive research questions require a hypothesis?',
    back: 'Yes, purely descriptive research questions CAN have a hypothesis (e.g., "The prevalence is expected to be >10%").\n🎯 Exam trap: Believing descriptive studies do not require hypotheses is false.',
    note: 'Even if you aren\'t comparing two groups, you can hypothesize a specific baseline value.'
  },
  {
    id: 'cur-m2-017',
    type: 'SCENARIO',
    topic: 'Research question',
    difficulty: 'medium',
    front: 'Scenario: "Estimate seroprevalence of COVID-19 in Ahmedabad during April-June 2020"',
    back: 'This is a Descriptive research question.\n🎯 Exam trap: It is NOT analytical because it only aims to measure a quantity (seroprevalence) in a population without a comparison group.',
    note: 'Keywords for descriptive: Estimate, Prevalence, Describe.'
  },
  {
    id: 'cur-m2-018',
    type: 'DEFINITION',
    topic: 'Research question',
    difficulty: 'medium',
    front: 'Can one study answer both descriptive and analytical questions?',
    back: 'Yes.\nA single research study can be designed to answer both (e.g., estimating prevalence as a primary objective, and determining risk factors as a secondary objective).',
    note: 'Most large studies do both: they describe the population first, then analyze associations.'
  },
  {
    id: 'cur-m2-019',
    type: 'DEFINITION',
    topic: 'Research question',
    difficulty: 'medium',
    front: 'Focus of a good research question',
    back: 'A good research question should focus on ONE specific issue.\n🎯 Exam trap: "Preferably focus on multiple issues" or "Broadening the initial question" are wrong steps.',
    note: 'Narrow and focused > Broad and vague.'
  },
  {
    id: 'cur-m2-020',
    type: 'SCENARIO',
    topic: 'Hypothesis',
    difficulty: 'medium',
    front: 'Which objective requires a hypothesis? (Prevalence vs Association)',
    back: '"To determine the association of maternal smoking... with morbidity" requires a hypothesis.\nAnalytical objectives (associations) fundamentally rely on hypothesis testing (null vs alternate).',
    note: 'Association = analytical = hypothesis test.'
  }
];