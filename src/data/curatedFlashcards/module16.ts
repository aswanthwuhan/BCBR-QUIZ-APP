import { CuratedCard } from './types';

// Module 16 — Data collection
export const MODULE_16_CARDS: CuratedCard[] = [
  {
    id: 'cur-m16-001',
    type: 'DEFINITION',
    topic: 'Data collection',
    difficulty: 'easy',
    front: 'Reliability — definition in data collection',
    back: 'The ability of an instrument to produce consistent, similar results on repeated measurements.\n🎯 Exam trap: Do not confuse with "accuracy" (correctness on average). Reliability is about consistency, precision, repeatability, and reproducibility.',
    note: 'Think of a reliable watch — it might be 5 minutes fast (inaccurate), but it consistently ticks exactly 60 seconds per minute.'
  },
  {
    id: 'cur-m16-002',
    type: 'DIFFERENCE',
    topic: 'Data collection',
    difficulty: 'medium',
    front: 'Reliability vs. Accuracy',
    back: 'Reliability = Consistency of information (reproducibility/precision).\nAccuracy = Correctness (measuring what it intends to measure, close to a gold standard).\n🎯 Exam trap: "Ability of a measurement to give the same result with repeated measurements is accuracy" — False, that is reliability.',
    note: 'Reliability = getting the same spot on a dartboard repeatedly. Accuracy = hitting the bullseye.'
  },
  {
    id: 'cur-m16-003',
    type: 'DEFINITION',
    topic: 'Data collection',
    difficulty: 'easy',
    front: 'Absolute prohibition in data collection',
    back: 'Manipulation of data.\n🎯 Exam trap: Modifying study objectives during data collection is also prohibited.',
    note: 'Never manipulate data, and never change your goalposts (objectives) once you start collecting.'
  },
  {
    id: 'cur-m16-004',
    type: 'LIST',
    topic: 'Data collection',
    difficulty: 'medium',
    front: 'Key quality properties of collected data (Form-level checks)',
    back: '1. Complete\n2. Readable\n3. Consistent\n🎯 Exam trap: "Statistical significance" or "External validity" are NOT used to judge data collection quality—they are analyzed later.',
    note: 'Before the participant leaves, check that the form is CRC: Complete, Readable, Consistent.'
  },
  {
    id: 'cur-m16-005',
    type: 'LIST',
    topic: 'Data collection',
    difficulty: 'medium',
    front: 'Essential components of data collector training',
    back: '1. Presenting study objectives\n2. Conducting on-site training\n3. Conducting mock/simulation sessions\n4. Using the final, validated version of the questionnaire\n🎯 Exam trap: Never use an "early draft" for training.',
    note: 'Training must be realistic: on-site, simulated, and using the final exact tool.'
  },
  {
    id: 'cur-m16-006',
    type: 'DEFINITION',
    topic: 'Data collection',
    difficulty: 'medium',
    front: 'Proper method for data validation',
    back: 'Repetition of data collection in a randomly selected subset of the SAME population.\n🎯 Exam trap: "Data collection in a new population" or "interviewing all participants" is wrong. It must be a random subset of the same population.',
    note: 'Validation = Double-checking your work. Pick a random 5% of your subjects and do it again to ensure consistency.'
  },
  {
    id: 'cur-m16-007',
    type: 'LIST',
    topic: 'Data collection',
    difficulty: 'medium',
    front: 'Troubleshooting difficulties during data collection',
    back: '1. Regular review meetings\n2. Discussing issues during review\n3. Clarifying problems experienced by staff\n4. Revising the "question by question guide" as issues arise.',
    note: 'Communication is key. The guide is a living document that can be revised based on feedback.'
  },
  {
    id: 'cur-m16-008',
    type: 'DEFINITION',
    topic: 'Data collection',
    difficulty: 'medium',
    front: 'Effect of time pressure in data collection',
    back: 'It dilutes data quality by leading to errors or omissions.',
    note: 'Rushing leads to incomplete (missing data) or inconsistent (errors) forms.'
  },
  {
    id: 'cur-m16-009',
    type: 'DEFINITION',
    topic: 'Data collection',
    difficulty: 'medium',
    front: 'On-site accuracy check — responsible person',
    back: 'The field supervisor.\n🎯 Exam trap: Not the field investigator or principal investigator. The supervisor checks it before leaving the location.',
    note: 'Investigator collects, Supervisor checks on-site, PI oversees the whole project.'
  },
  {
    id: 'cur-m16-010',
    type: 'LIST',
    topic: 'Data collection',
    difficulty: 'hard',
    front: 'Correct sequence of data collection steps',
    back: '1. Prepare the guide\n2. Train the collectors\n3. Check completeness\n4. Validate\n🎯 Exam trap: Remember to prepare the guide BEFORE training, and check completeness BEFORE validating.',
    note: 'Sequence: PTCV - Prepare, Train, Check, Validate.'
  },
  {
    id: 'cur-m16-011',
    type: 'DEFINITION',
    topic: 'Data collection',
    difficulty: 'easy',
    front: 'Question-by-Question Guide — purpose and audience',
    back: 'It is a roadmap document for DATA COLLECTORS to maintain uniformity in data collection.\n🎯 Exam trap: It is NOT meant to help participants respond.',
    note: 'It ensures Collector A and Collector B ask the question exactly the same way.'
  },
  {
    id: 'cur-m16-012',
    type: 'SCENARIO',
    topic: 'Data collection',
    difficulty: 'medium',
    front: 'Scenario: A participant refuses to answer a particular question in the middle of an interview.',
    back: 'Continue the interview with the remaining questions.\n🎯 Exam trap: Do not "end the interview", "ask family members", or "persuade them".',
    note: 'Respect participant autonomy (ethics) while salvaging the rest of the valuable data.'
  },
  {
    id: 'cur-m16-013',
    type: 'DEFINITION',
    topic: 'Data collection',
    difficulty: 'medium',
    front: 'Ideal time to check data completeness',
    back: 'Before the respondent leaves.\n🎯 Exam trap: Checking "during data cleaning" or "at the end of data collection" is too late to fix missing information.',
    note: 'Once the patient walks out the door, that data is lost forever.'
  },
  {
    id: 'cur-m16-014',
    type: 'SCENARIO',
    topic: 'Data collection',
    difficulty: 'hard',
    front: 'Scenario: A new diagnostic test gives a mean of 90 mg/dL. The gold standard gives 88 mg/dL. Is it valid or reliable?',
    back: 'It is VALID.\nWhy? Because its results are close to the accepted gold standard (measuring what it intends to measure).',
    note: 'Gold standard comparison tests accuracy (validity).'
  },
  {
    id: 'cur-m16-015',
    type: 'DEFINITION',
    topic: 'Data collection',
    difficulty: 'medium',
    front: 'Most important criterion for a field investigator in a field-based study',
    back: 'Familiarity with the local language.\n🎯 Exam trap: Being "highly qualified" or "knowing clinical terms" takes a backseat to speaking the local language.',
    note: 'You cannot collect accurate data if you cannot communicate with the participant.'
  },
  {
    id: 'cur-m16-016',
    type: 'DEFINITION',
    topic: 'Data collection',
    difficulty: 'easy',
    front: 'Purpose of a pilot study',
    back: 'Helps field investigators understand the process and identifies flaws in the data collection tool. Must be done under supervision.',
    note: 'A dress rehearsal for your study.'
  },
  {
    id: 'cur-m16-017',
    type: 'DEFINITION',
    topic: 'Data collection',
    difficulty: 'easy',
    front: 'Study objectives modification',
    back: 'Objectives MUST NOT be modified once data collection has begun.\n🎯 Exam trap: "Guidebooks" can be revised, but "study objectives" cannot.',
    note: 'Changing objectives mid-study is like changing the destination while flying the plane.'
  },
  {
    id: 'cur-m16-018',
    type: 'DEFINITION',
    topic: 'Data collection',
    difficulty: 'easy',
    front: 'Supportive supervision',
    back: 'It is essential to ensure accuracy and quality of the data collection process.',
    note: 'Supervision isn\'t to punish; it\'s to support and catch errors early.'
  },
  {
    id: 'cur-m16-019',
    type: 'DIFFERENCE',
    topic: 'Data collection',
    difficulty: 'medium',
    front: 'Internal data quality vs. External validity',
    back: 'Internal data quality = completeness, readability, consistency, accuracy, precision.\nExternal validity = generalizability to other populations.\n🎯 Exam trap: External validity is NOT a criterion to judge the quality of data collected in the forms.',
    note: 'Internal = is the form filled out right? External = does this apply to the whole country?'
  },
  {
    id: 'cur-m16-020',
    type: 'DEFINITION',
    topic: 'Data collection',
    difficulty: 'medium',
    front: 'Ideal requirements for an epidemiological data collection tool',
    back: 'It must be BOTH valid and reliable.',
    note: 'You want a tool that consistently (reliable) hits the bullseye (valid).'
  }
];