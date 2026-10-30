import { CuratedCard } from './types';

// Module 11: Bias and Confounding
export const MODULE_11_CARDS: CuratedCard[] = [
  {
    id: 'cur-m11-001',
    type: 'DEFINITION',
    topic: 'Bias',
    difficulty: 'easy',
    front: 'Bias - definition',
    back: 'A systematic error in a study that leads to an incorrect estimate of the association between exposure and outcome.\n🎯 Exam trap: Random error is NOT bias. Bias is systematic.',
    note: 'Systematic means it pushes the results in one specific direction, unlike random error which scatters results equally in all directions.'
  },
  {
    id: 'cur-m11-002',
    type: 'DIFFERENCE',
    topic: 'Bias',
    difficulty: 'medium',
    front: 'Bias vs Confounding - difference',
    back: 'Bias is a systematic error in study design or data collection. Confounding is a true but misleading association caused by a third variable.\n🎯 Exam trap: Bias cannot be completely fixed in analysis, confounding can be adjusted for.',
    note: 'Bias = Your ruler is broken. Confounding = Your ruler is fine, but you measured the wrong thing.'
  },
  {
    id: 'cur-m11-003',
    type: 'DEFINITION',
    topic: 'Bias',
    difficulty: 'medium',
    front: 'Selection bias - definition',
    back: 'Occurs when the study population is not representative of the target population due to how subjects are selected or retained.\n🎯 Exam trap: More common in case-control studies than cohort studies.',
    note: 'If the way you pick people, or the way people drop out, is related to both exposure and outcome, you have selection bias.'
  },
  {
    id: 'cur-m11-004',
    type: 'DEFINITION',
    topic: 'Bias',
    difficulty: 'medium',
    front: 'Information bias - definition',
    back: 'Occurs when there are systematic errors in the measurement or classification of exposure, outcome, or both.\n🎯 Exam trap: Using uncalibrated instruments causes information bias, not selection bias.',
    note: 'Think "Bad Information." Either they remembered wrong, you asked wrong, or the machine measured wrong.'
  },
  {
    id: 'cur-m11-005',
    type: 'DIFFERENCE',
    topic: 'Bias',
    difficulty: 'hard',
    front: 'Differential vs Non-differential misclassification',
    back: 'Differential: The error rate differs between study groups. Can bias results in either direction.\nNon-differential: The error rate is the same across groups.\n🎯 Exam trap: Non-differential misclassification almost always biases the results TOWARDS the null.',
    note: 'If everyone is equally misclassified, the two groups look more similar (towards the null). If only one group is misclassified, results can go anywhere.'
  },
  {
    id: 'cur-m11-006',
    type: 'DEFINITION',
    topic: 'Bias',
    difficulty: 'medium',
    front: 'Recall bias',
    back: 'A type of information bias where cases (sick) remember past exposures differently than controls (healthy).\n🎯 Exam trap: It is a type of INFORMATION bias, not selection bias.',
    note: 'A mother of a baby with an anomaly will remember every medication she took. A mother with a healthy baby might forget.'
  },
  {
    id: 'cur-m11-007',
    type: 'DEFINITION',
    topic: 'Bias',
    difficulty: 'medium',
    front: 'Interviewer bias',
    back: 'A type of information bias where the interviewer asks leading questions or probes more deeply when they know a participant\'s disease status.\n🎯 Exam trap: Can be reduced by blinding the interviewer.',
    note: 'If the interviewer knows the hypothesis, they might unconsciously dig harder for evidence to support it.'
  },
  {
    id: 'cur-m11-008',
    type: 'DEFINITION',
    topic: 'Bias',
    difficulty: 'medium',
    front: 'Healthy worker effect',
    back: 'A type of selection bias where the employed population is generally healthier than the general population (which includes sick/disabled people).\n🎯 Exam trap: It is a SELECTION bias, commonly seen in occupational cohort studies.',
    note: 'If you compare factory workers to the general population, the workers will always look healthier because you have to be healthy to work.'
  },
  {
    id: 'cur-m11-009',
    type: 'DEFINITION',
    topic: 'Bias',
    difficulty: 'medium',
    front: 'Berkson\'s bias',
    back: 'A type of selection bias that occurs in hospital-based case-control studies when hospital admission rates differ for the exposure, the disease, or both.\n🎯 Exam trap: Also called admission rate bias.',
    note: 'Hospital patients are not representative of the general population; they often have multiple overlapping conditions.'
  },
  {
    id: 'cur-m11-010',
    type: 'DEFINITION',
    topic: 'Bias',
    difficulty: 'medium',
    front: 'Non-response bias',
    back: 'A selection bias that occurs when people who refuse to participate are systematically different from those who agree to participate.\n🎯 Exam trap: High drop-out rates or low survey response rates cause this.',
    note: 'If you mail a survey about healthy eating, only the health nuts will bother replying. Your results will look artificially healthy.'
  },
  {
    id: 'cur-m11-011',
    type: 'DEFINITION',
    topic: 'Bias',
    difficulty: 'medium',
    front: 'Loss to follow-up',
    back: 'A type of selection bias in cohort studies where participants who drop out differ systematically from those who remain.\n🎯 Exam trap: Cohort studies are especially vulnerable to this over long periods.',
    note: 'If people who get sick drop out of the study because they are too tired to continue, you will underestimate the disease risk.'
  },
  {
    id: 'cur-m11-012',
    type: 'LIST',
    topic: 'Bias',
    difficulty: 'easy',
    front: 'Ways to reduce information bias',
    back: '1. Standardize data collection\n2. Use objective measures (lab tests vs self-report)\n3. Blinding of interviewers/participants\n4. Use memory aids to reduce recall bias',
    note: 'Information bias is about measurement. Better measurement = less bias.'
  },
  {
    id: 'cur-m11-013',
    type: 'SCENARIO',
    topic: 'Bias',
    difficulty: 'medium',
    front: 'Scenario: Using self-reports instead of medical records',
    back: 'Relying on self-reports is likely to introduce INFORMATION BIAS, specifically recall bias or social desirability bias.\n🎯 Exam trap: Objective measures (like lab results) are always preferred to reduce this bias.',
    note: 'People forget, or they lie to look good. Medical records don\'t.'
  },
  {
    id: 'cur-m11-014',
    type: 'DIFFERENCE',
    topic: 'Bias',
    difficulty: 'medium',
    front: 'Random Error vs Systematic Error',
    back: 'Random error decreases as sample size increases. Systematic error (bias) is NOT affected by sample size.\n🎯 Exam trap: Increasing sample size will NEVER eliminate bias.',
    note: 'If your scale always adds 5kg, weighing 10,000 people won\'t fix the 5kg error. That\'s systematic.'
  },
  {
    id: 'cur-m11-015',
    type: 'DEFINITION',
    topic: 'Bias',
    difficulty: 'medium',
    front: 'Internal Validity vs Bias',
    back: 'Internal validity refers to how well the study avoids systematic errors. High bias = Low internal validity.\n🎯 Exam trap: If a study lacks internal validity, its results are fundamentally flawed.',
    note: 'Internal validity asks: "Is the study true for its own participants?"'
  },
  {
    id: 'cur-m11-016',
    type: 'DEFINITION',
    topic: 'Bias',
    difficulty: 'medium',
    front: 'External Validity vs Bias',
    back: 'External validity (generalizability) is heavily affected by selection bias. If your sample doesn\'t represent the target population, you can\'t generalize.\n🎯 Exam trap: A study can have high internal validity but low external validity.',
    note: 'External validity asks: "Can I apply this to my patients?"'
  },
  {
    id: 'cur-m11-017',
    type: 'DEFINITION',
    topic: 'Bias',
    difficulty: 'easy',
    front: 'Can bias occur at any stage of a study?',
    back: 'Yes. Bias can occur during study design, data collection, analysis, and publication.\n🎯 Exam trap: The most critical biases (selection and information) occur during design and collection.',
    note: 'Prevention is better than cure. You can\'t "fix" bad selection bias during the analysis phase.'
  },
  {
    id: 'cur-m11-018',
    type: 'SCENARIO',
    topic: 'Bias',
    difficulty: 'hard',
    front: 'Scenario: An uncalibrated weighing scale is used for all participants',
    back: 'This introduces systematic error (information bias).\n🎯 Exam trap: Even if the error is exactly 2kg for everyone, it is systematic, not random.',
    note: 'Since everyone gets the exact same error, it is systematic. If the scale fluctuated randomly up and down, it would be random error.'
  },
  {
    id: 'cur-m11-019',
    type: 'LIST',
    topic: 'Bias',
    difficulty: 'medium',
    front: 'Types of Information Bias',
    back: '1. Recall bias\n2. Interviewer bias\n3. Misclassification bias\n4. Social desirability bias',
    note: 'All of these involve errors in how data is obtained or recorded.'
  },
  {
    id: 'cur-m11-020',
    type: 'LIST',
    topic: 'Bias',
    difficulty: 'medium',
    front: 'Types of Selection Bias',
    back: '1. Non-response bias\n2. Loss to follow-up\n3. Berkson\'s bias\n4. Healthy worker effect',
    note: 'All of these involve WHO gets into or stays in the study.'
  }
];