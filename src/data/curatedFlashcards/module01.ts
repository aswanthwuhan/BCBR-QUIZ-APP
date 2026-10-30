import { CuratedCard } from './types';

// Module 1 — Introduction to health research
export const MODULE_1_CARDS: CuratedCard[] = [
  {
    id: 'cur-m1-001',
    type: 'LIST',
    topic: 'Introduction to health research',
    difficulty: 'easy',
    front: 'Health research — main focus areas',
    back: '1. Estimating disease burden in a population\n2. Preventing common diseases in the community\n3. Evaluating public health programs\n4. Predicting disease progression in a patient',
    note: 'Health research encompasses both population-level evaluation and individual-level progression predictions.'
  },
  {
    id: 'cur-m1-002',
    type: 'DIFFERENCE',
    topic: 'Study methodology',
    difficulty: 'medium',
    front: 'Representative vs Adequate sample — difference',
    back: 'Representative sample: reflects the population, ensuring "external validity" (generalizability).\nAdequate sample: large enough size to ensure "power" to draw meaningful statistical inferences.\n🎯 Exam trap: An adequate sample size does not guarantee representativeness, and vice versa. Both are required.',
    note: 'Think: Representative = RIGHT KIND of people. Adequate = RIGHT AMOUNT of people.'
  },
  {
    id: 'cur-m1-003',
    type: 'DEFINITION',
    topic: 'Study methodology',
    difficulty: 'medium',
    front: 'Inclusion & Exclusion criteria — specificity',
    back: 'They should be very specific, not vague.\n🎯 Exam trap: Making them vague to allow "greater and easy enrolment" is incorrect. Specificity ensures a well-defined study population and valid results.',
    note: 'Mutually exclusive and highly specific criteria prevent confounding from mixed populations.'
  },
  {
    id: 'cur-m1-004',
    type: 'LIST',
    topic: 'Research ethics',
    difficulty: 'hard',
    front: 'Regulatory review vs Ethics review — scope',
    back: 'Regulatory review covers:\n- Transfer & utilization of funds\n- Shipment of samples and transfer of data outside the country\n- Sharing and protection of intellectual property\nEthics review covers:\n- Informed consent, competence of researcher, care & support.\n🎯 Exam trap: IP protection and cross-border sample transfer are REGULATORY matters, not ethics committee matters.',
    note: 'If it involves money, borders, or patents, it is regulatory.'
  },
  {
    id: 'cur-m1-005',
    type: 'DEFINITION',
    topic: 'Study methodology',
    difficulty: 'medium',
    front: 'Pilot study — definition & purpose',
    back: 'A small-scale preliminary study conducted to develop and test the adequacy of research instruments and check if the sampling frame/technique is effective.\n🎯 Exam trap: Ethics committees do NOT wait for pilot study completion to approve the main study.',
    note: 'Pilot = "Pre-testing" feasibility.'
  },
  {
    id: 'cur-m1-006',
    type: 'DEFINITION',
    topic: 'Research ethics',
    difficulty: 'easy',
    front: 'Primary data collection — mandatory approval',
    back: 'Ethics committee approval is absolutely mandatory before initiating ANY study involving human participants or primary data collection.',
    note: 'Even if scientific or technical committees approve, ethics approval is the final non-negotiable step.'
  },
  {
    id: 'cur-m1-007',
    type: 'DEFINITION',
    topic: 'Study methodology',
    difficulty: 'medium',
    front: 'Effect modifiers — best source of information',
    back: 'A thorough review of existing literature.\n🎯 Exam trap: "Intelligent guessing" or "deductive thinking" are not the best sources; evidence-based literature is.',
    note: 'Don\'t guess effect modifiers, read the literature.'
  },
  {
    id: 'cur-m1-008',
    type: 'SCENARIO',
    topic: 'Study designs',
    difficulty: 'hard',
    front: 'Scenario: Evaluating the impact of a vaccine introduced in the national program',
    back: 'Field trial (or Field randomized trial).\nThis is the gold standard for evaluating the real-world impact and effectiveness of public health interventions like vaccines.',
    note: 'Vaccines are given in the "field" (to healthy populations), unlike clinical trials (given to sick patients).'
  },
  {
    id: 'cur-m1-009',
    type: 'DEFINITION',
    topic: 'Study methodology',
    difficulty: 'medium',
    front: 'Confounders — definition & management',
    back: 'Variables that affect BOTH the study variable (exposure) and the outcome.\nTheir effect can be minimized by proper study design (e.g., randomization, matching) and through stratified analysis.\n🎯 Exam trap: Confounders must be related to BOTH exposure and outcome, not just one.',
    note: 'Design stage fix = matching/randomization. Analysis stage fix = stratification.'
  },
  {
    id: 'cur-m1-010',
    type: 'DIFFERENCE',
    topic: 'Study methodology',
    difficulty: 'hard',
    front: 'Confounder vs Effect modifier — key difference',
    back: 'Confounder: A nuisance variable that distorts the true association (e.g., smoking in a coffee-cancer study).\nEffect modifier: A variable that naturally alters the strength of the relationship (e.g., alcohol habit changing the risk of post-infection hepatic sequelae).',
    note: 'Confounding is an ERROR to eliminate. Effect modification is a biological FACT to report.'
  },
  {
    id: 'cur-m1-011',
    type: 'DIFFERENCE',
    topic: 'Study methodology',
    difficulty: 'medium',
    front: 'Systematic error vs Random error',
    back: 'Systematic error (Bias): Distorts results in one direction. Minimized by better design/calibration. Cannot be fixed by sample size.\nRandom error (Chance): Occurs unpredictably. Reduced by increasing precision/sample size, but can NEVER be completely eliminated.',
    note: 'Bias = bad design. Chance = bad luck (fix with bigger sample).'
  },
  {
    id: 'cur-m1-012',
    type: 'DEFINITION',
    topic: 'Study methodology',
    difficulty: 'medium',
    front: 'Systematic error — another name',
    back: 'Bias.\nBias is any systematic error in design, conduct, or analysis that results in an erroneous estimate of an exposure’s effect.',
    note: 'Systematic error = Bias. Random error = Chance.'
  },
  {
    id: 'cur-m1-013',
    type: 'DEFINITION',
    topic: 'Introduction to health research',
    difficulty: 'easy',
    front: 'Implementation research — definition',
    back: 'Research that seeks to understand the acceptability and functionality of a health program in real-world settings (e.g., taking evidence-based interventions in tobacco cessation to make policy decisions).',
    note: 'Focuses on "how to implement" a proven concept in the real world.'
  },
  {
    id: 'cur-m1-014',
    type: 'DEFINITION',
    topic: 'Introduction to health research',
    difficulty: 'easy',
    front: 'Bench-based research — definition',
    back: 'A study done in a laboratory setting, often using animals (e.g., mice) or cell cultures.',
    note: 'Bench = Lab bench (microscopes, mice).'
  },
  {
    id: 'cur-m1-015',
    type: 'DEFINITION',
    topic: 'Introduction to health research',
    difficulty: 'medium',
    front: 'Scope of research: New topic with no existing evidence',
    back: 'Getting additional or new information.\nIf no evidence exists (e.g., novel virus), the goal is to generate new information, not to verify/confirm known info.',
    note: 'No evidence = get new info. Conflicting evidence = verify info.'
  },
  {
    id: 'cur-m1-016',
    type: 'DEFINITION',
    topic: 'Introduction to health research',
    difficulty: 'medium',
    front: 'Scope of research: Identifying temporality',
    back: 'Explaining cause and effect relationship.\nWhen occurrence of one event is followed by the occurrence of a subsequent event, the research explains cause and effect.',
    note: 'Temporality (A happens before B) is the hallmark of cause-and-effect.'
  },
  {
    id: 'cur-m1-017',
    type: 'SCENARIO',
    topic: 'Study methodology',
    difficulty: 'hard',
    front: 'Scenario: Drug tested on schizophrenia patients who smoke and take anticholinergics (which alter extrapyramidal symptoms)',
    back: 'The anticholinergic drugs act as an Effect Modifier.\nThey biologically alter the relationship between the new drug and the outcome (extrapyramidal symptoms).',
    note: 'If a pre-existing drug changes how the new drug works, it modifies the effect.'
  },
  {
    id: 'cur-m1-018',
    type: 'DEFINITION',
    topic: 'Research ethics',
    difficulty: 'easy',
    front: 'Financial gain in health research',
    back: 'Financial gain should NEVER be a critical consideration in planning health research. Research must be driven by adequate justification and clear research questions.',
    note: 'Research is for public health, not profit.'
  },
  {
    id: 'cur-m1-019',
    type: 'LIST',
    topic: 'Introduction to health research',
    difficulty: 'easy',
    front: 'Health research — contributing disciplines',
    back: 'It is highly multi-disciplinary, involving:\n- Bio-medical research\n- Biostatistics\n- Social science research',
    note: 'Health isn\'t just medicine; it includes stats and sociology.'
  },
  {
    id: 'cur-m1-020',
    type: 'DEFINITION',
    topic: 'Study methodology',
    difficulty: 'medium',
    front: 'Retrospective study — definition',
    back: 'A type of study that uses only information recorded in the past.',
    note: 'Retro = past. Prospective = future.'
  }
];