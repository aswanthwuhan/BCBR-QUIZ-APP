import { CuratedCard } from './types';

// Module 20 — Clinical trials
export const MODULE_20_CARDS: CuratedCard[] = [
  {
    id: 'cur-m20-001',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'easy',
    front: 'Randomized Controlled Trial (RCT) — main advantage',
    back: 'It is the only effective design for overcoming selection bias of participants.\n🎯 Exam trap: Blinding eliminates ascertainment/measurement bias, but Randomization is what eliminates selection bias.',
    note: 'Randomization ensures both groups are exactly the same at the starting line.'
  },
  {
    id: 'cur-m20-002',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Adverse Event (AE) vs Causality',
    back: 'An AE is ANY unexpected clinical problem that occurs during the trial. It does NOT have to be caused by the drug or therapy under trial.',
    note: 'If a patient gets hit by a bus while taking the trial drug, it is an Adverse Event. Causality is judged later.'
  },
  {
    id: 'cur-m20-003',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Data Safety Monitoring Body (DSMB) — core function',
    back: 'Periodically reviews accumulated study data for participant safety and progress, and makes recommendations on whether to continue, modify, or terminate the trial.\n🎯 Exam trap: The DSMB is an INDEPENDENT entity. It is NOT appointed by the investigators.',
    note: 'The DSMB is the referee who can pause or stop the game if players are getting hurt.'
  },
  {
    id: 'cur-m20-004',
    type: 'DIFFERENCE',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Scientific Review vs Ethical Review vs Regulatory Review',
    back: 'Scientific Committee: Checks if research methods are appropriate.\nEthics Committee (IEC): Checks participant safety, welfare, and reimbursement/compensation.\nRegulatory (DCGI / HMSC): Checks regulatory norms.',
    note: 'Science = How. Ethics = Who is protected. Regulatory = Legal.'
  },
  {
    id: 'cur-m20-005',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Health Ministry Screening Committee (HMSC)',
    back: 'The committee that looks at regulatory affairs specifically if the project is getting funded INTERNATIONALLY.',
    note: 'Foreign money = HMSC review required.'
  },
  {
    id: 'cur-m20-006',
    type: 'LIST',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Valid reimbursements in a clinical trial',
    back: '1. Travel costs\n2. Food expenses\n3. Compensation for time spent\n4. Loss of daily wages',
    note: 'It is fully ethical to cover the out-of-pocket costs of participating.'
  },
  {
    id: 'cur-m20-007',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'easy',
    front: 'Use of Placebo in trials',
    back: 'It is UNETHICAL to use a placebo for the control arm if a current standard of care already exists.',
    note: 'You cannot deny a patient a known working treatment just to test your new drug.'
  },
  {
    id: 'cur-m20-008',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Handling Serious Adverse Events (SAE)',
    back: 'You must provide free treatment, inform regulatory authorities, and withdraw the implicated intervention.\n🎯 Exam trap: You must take action immediately, even if only ONE person is affected (not "only if 1% are affected").',
    note: 'SAEs are emergencies. One death or severe injury stops the train.'
  },
  {
    id: 'cur-m20-009',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'easy',
    front: 'Verbal consent in Clinical Trials',
    back: 'Verbal consent is NEVER sufficient. Participants must give written, informed, voluntary consent, and one copy must be given to the participant.',
    note: 'If it isn\'t documented and signed, it didn\'t happen.'
  },
  {
    id: 'cur-m20-010',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Document storage/archival post-trial',
    back: 'Trial documents must be archived for 5 to 15 years as per the sponsor\'s requirement.\n🎯 Exam trap: Paper records MUST be archived even if data is computerized.',
    note: 'Keep the paper trail alive for at least 5-15 years.'
  },
  {
    id: 'cur-m20-011',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'easy',
    front: 'Premature trial stoppage rules',
    back: 'A trial can be stopped prematurely if a significant unanticipated risk is demonstrated (excessive toxicity/harm).',
    note: 'Pre-defined stoppage rules are mandatory in drug trials.'
  },
  {
    id: 'cur-m20-012',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Reporting Adverse Events — who receives the reports?',
    back: 'ALL of them: Regulatory authorities, the Sponsor, and the Institutional Ethics Committee (IEC).\n🎯 Exam trap: You do NOT report them to the Scientific Advisory Committee.',
    note: 'Report up the chain: the law (regulatory), the money (sponsor), the protectors (IEC).'
  },
  {
    id: 'cur-m20-013',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Analysis of RCT data',
    back: 'Interim analysis can be performed (if pre-stated in protocol), baseline characteristics are compared across arms, and people lost to follow-up CAN be included (Intention-To-Treat).\n🎯 Exam trap: Analyses are NOT "only descriptive"; they are highly analytical.',
    note: 'Intention-to-Treat means you analyze them in the group they were assigned to, even if they dropped out.'
  },
  {
    id: 'cur-m20-014',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'easy',
    front: 'Double-blind vs Single-blind',
    back: 'Double-blind: Neither the participant NOR the investigator knows which drug is being given.\nSingle-blind: Only the participant doesn\'t know.',
    note: 'Blinding prevents subjective bias when measuring outcomes.'
  },
  {
    id: 'cur-m20-015',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Biological samples storage clause',
    back: 'A specific clause regarding the collection, storage, and future use of biological samples MUST be mentioned in the participant information sheet.',
    note: 'You can\'t just take blood and secretly save it for a different study 10 years later.'
  },
  {
    id: 'cur-m20-016',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Monitoring a clinical trial — components',
    back: 'Includes checking adherence to Good Clinical Practice (GCP), informed consent documentation, and adverse event reporting.\n🎯 Exam trap: Keeping a "close watch on enrolment targets" is a management task, NOT a safety/harm prevention monitoring task.',
    note: 'Monitors check if you are playing by the GCP rules.'
  },
  {
    id: 'cur-m20-017',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Screening protocol — what happens?',
    back: 'Investigators determine eligibility (inclusion/exclusion criteria), provide study information, and may conduct medical exams/interviews.',
    note: 'Screening is the bouncer at the club checking if you meet the criteria to enter the trial.'
  },
  {
    id: 'cur-m20-018',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Researchers with no institutional affiliation',
    back: 'They CAN use Independent Ethics Committees that function outside of institutions to get their research reviewed and approved.',
    note: 'You don\'t need a university job to do ethical research, just an independent ethics review.'
  },
  {
    id: 'cur-m20-019',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'easy',
    front: 'Withdrawal of Ethics Committee clearance',
    back: 'Clearance CAN be withdrawn after initial approval if the researchers violate the protocol or if major safety issues arise.\n🎯 Exam trap: "Clearance cannot be withdrawn" is FALSE.',
    note: 'Approval is a lease, not a permanent purchase. It can be revoked.'
  },
  {
    id: 'cur-m20-020',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'easy',
    front: 'Drug Controller General of India (DCGI)',
    back: 'The central Regulatory Authority in India responsible for approving clinical trials of new drugs.',
    note: 'DCGI = The final boss of regulatory approval in India.'
  }
];