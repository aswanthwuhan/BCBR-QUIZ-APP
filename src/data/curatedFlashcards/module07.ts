import { CuratedCard } from './types';

// Module 7 — Experimental study designs: Clinical trials (BCBR lecture 7).
export const MODULE_7_CARDS: CuratedCard[] = [
  {
    id: 'cur-m7-001',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'easy',
    front: 'Randomized controlled trial (RCT) — cornerstone',
    back: 'Randomization.\nIt is the defining feature that separates an RCT from observational studies.',
    note: 'Without randomization, it\'s just a quasi-experiment, not a true RCT.'
  },
  {
    id: 'cur-m7-002',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Purpose of Randomization',
    back: 'To achieve balance in baseline characteristics (both known and unknown confounders) between the intervention and control groups.',
    note: 'Randomization ensures we are comparing apples to apples.'
  },
  {
    id: 'cur-m7-003',
    type: 'DIFFERENCE',
    topic: 'Clinical trials',
    difficulty: 'hard',
    front: 'Randomization vs Allocation Concealment',
    back: 'Randomization: The process of assigning patients to groups by chance.\nAllocation Concealment: Hiding the randomization sequence from the investigator BEFORE the patient is assigned, preventing selection bias.\n🎯 Exam trap: Blinding happens AFTER assignment, concealment happens BEFORE.',
    note: 'Concealment prevents the doctor from "cheating" the randomization sequence.'
  },
  {
    id: 'cur-m7-004',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'easy',
    front: 'Blinding (Masking) — definition',
    back: 'Keeping the participants, investigators, or analysts unaware of which treatment arm a participant has been assigned to.\n🎯 Exam trap: Blinding is NOT compulsory for all clinical trials (Open-label trials exist).',
    note: 'Blinding prevents performance bias (during the trial) and ascertainment bias (when measuring outcomes).'
  },
  {
    id: 'cur-m7-005',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Double-blinding — purpose',
    back: 'To avoid both observer (investigator) bias and participant (subject) bias.\nIt prevents researchers from influencing the data based on their knowledge of allocated groups.',
    note: 'Single blind = Patient doesn\'t know. Double = Patient + Doctor don\'t know. Triple = Patient + Doctor + Analyst don\'t know.'
  },
  {
    id: 'cur-m7-006',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Co-intervention — how to eliminate it',
    back: 'Blinding.\nIf the patient and doctor don\'t know who got the active drug, they are less likely to seek or give additional (co-interventions) treatments unevenly.',
    note: 'Co-intervention means treating one group differently besides the study drug.'
  },
  {
    id: 'cur-m7-007',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'easy',
    front: 'Placebo — definition',
    back: 'A pharmacologically inactive agent that investigators administer to participants in the control group of a trial.',
    note: 'Placebos ensure that the "psychological" effect of receiving a pill is equal in both groups.'
  },
  {
    id: 'cur-m7-008',
    type: 'LIST',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Phase 1 Clinical Trial',
    back: 'Conducted in a small group of HEALTHY VOLUNTEERS.\nPurpose: To assess safety, dosage, and pharmacokinetics.\n🎯 Exam trap: Vaccine trials also start Phase 1 in healthy volunteers.',
    note: 'Phase 1 = 1st time in humans. Focus is SAFETY.'
  },
  {
    id: 'cur-m7-009',
    type: 'LIST',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Phase 2 Clinical Trial',
    back: 'Conducted in a small group of PATIENTS (diseased).\nPurpose: To assess efficacy, short-term and long-term adverse effects, and determine the dose for Phase 3.',
    note: 'Phase 2 = 2 see if it works (efficacy).'
  },
  {
    id: 'cur-m7-010',
    type: 'LIST',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Phase 3 Clinical Trial',
    back: 'Conducted in a large population of PATIENTS (susceptible population).\nPurpose: To confirm therapeutic benefit/effectiveness and compare with the standard of care.',
    note: 'Phase 3 = 3 thousands of people (large scale efficacy).'
  },
  {
    id: 'cur-m7-011',
    type: 'LIST',
    topic: 'Clinical trials',
    difficulty: 'easy',
    front: 'Phase 4 Clinical Trial',
    back: 'Post-marketing surveillance.\nPurpose: To monitor long-term safety and rare side effects after the drug is approved and sold.',
    note: 'Phase 4 = 4 the market (after FDA/CDSCO approval).'
  },
  {
    id: 'cur-m7-012',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'hard',
    front: 'Biased outcome ascertainment',
    back: 'Results from participants reporting symptoms/outcomes differently, or investigators eliciting symptoms differently because they know the treatment arm (lack of blinding).',
    note: 'Ascertainment = "finding out the outcome". Bias here means finding it out unfairly.'
  },
  {
    id: 'cur-m7-013',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'External validity of a trial',
    back: 'The extent to which the results of the trial are generalizable to the broader, general population.\n🎯 Exam trap: Overly restrictive exclusion criteria decrease external validity and cause problems with recruitment.',
    note: 'If you only study 20-year-old male athletes, your drug might not work for 70-year-old grandmothers.'
  },
  {
    id: 'cur-m7-014',
    type: 'SCENARIO',
    topic: 'Clinical trials',
    difficulty: 'easy',
    front: 'Scenario: Trial of a new vaccine for the prevention of COVID-19 in children',
    back: 'Prophylactic RCT.\nWhy? It is aimed at PREVENTION (prophylaxis) of a disease, not treating an existing one.',
    note: 'Prophylactic = Preventive (vaccines). Therapeutic = Treatment (drugs).'
  },
  {
    id: 'cur-m7-015',
    type: 'SCENARIO',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Scenario: Trial comparing suturing vs stapling, where doctors, patients, and analysts ALL know the assignment',
    back: 'Open-label RCT.\nWhy? There is no blinding at all.',
    note: 'Sometimes blinding is impossible (e.g. surgery vs medication).'
  },
  {
    id: 'cur-m7-016',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Handling of Drop-outs (Loss to follow-up) in RCTs',
    back: 'Drop-outs should NOT be excluded from the analysis (this relies on Intention-to-Treat analysis).\nLoss to follow-up DOES affect the study outcome.',
    note: 'If you drop all the people who quit because of side effects, the drug looks falsely safe!'
  },
  {
    id: 'cur-m7-017',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Are Clinical Trials free from selection bias?',
    back: 'NO.\nBecause trials require strict inclusion/exclusion criteria and informed consent, the people who enroll are often different from the general population (volunteer bias).',
    note: 'They control for confounding (via randomization) but often suffer from selection bias.'
  },
  {
    id: 'cur-m7-018',
    type: 'LIST',
    topic: 'Clinical trials',
    difficulty: 'medium',
    front: 'Participant safety measures in a trial',
    back: '1. Adverse events reporting.\n2. Serious adverse events reporting.\n3. Periodic follow-up.\n4. Review by a Data Safety Monitoring Board (DSMB).',
    note: 'Safety is paramount. The DSMB can stop a trial early if it is too harmful (or overwhelmingly beneficial).'
  },
  {
    id: 'cur-m7-019',
    type: 'DEFINITION',
    topic: 'Clinical trials',
    difficulty: 'easy',
    front: 'RCTs — Prospective or Retrospective?',
    back: 'RCTs are ALWAYS Prospective in nature.\nInvestigators assign the treatment and then follow the participants forward in time to see the outcomes.',
    note: 'You cannot randomly assign a treatment in the past.'
  },
  {
    id: 'cur-m7-020',
    type: 'LIST',
    topic: 'Clinical trials',
    difficulty: 'easy',
    front: 'Mandatory prerequisites for Clinical Trials',
    back: '1. Approval from Institutional Ethics Committee/regulatory authority.\n2. Registration with Clinical Trials Registry of India (CTRI).\n3. Informed consent from participants.',
    note: 'Ethical oversight is non-negotiable for human experiments.'
  }
];