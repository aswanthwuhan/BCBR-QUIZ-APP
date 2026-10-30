import { CuratedCard } from './types';

// Module 13: Study Population and Sampling
export const MODULE_13_CARDS: CuratedCard[] = [
  {
    id: 'cur-m13-001',
    type: 'LIST',
    topic: 'Study Population',
    difficulty: 'medium',
    front: 'Selection of study participants depends on',
    back: 'Representativeness, Acceptable cost, and Adequate size.\n🎯 Exam trap: "All of the above" is the correct answer in MCQs.',
    note: 'You need the RIGHT people, ENOUGH of them, without going BROKE.'
  },
  {
    id: 'cur-m13-002',
    type: 'LIST',
    topic: 'Study Population',
    difficulty: 'medium',
    front: 'Target population is determined by',
    back: 'Demographic characteristics and Clinical characteristics.\n🎯 Exam trap: Time is usually a characteristic of the accessible population, not the theoretical target population.',
    note: 'Target population = "All adult diabetics." Accessible population = "Adult diabetics in my clinic this year."'
  },
  {
    id: 'cur-m13-003',
    type: 'DEFINITION',
    topic: 'Study Population',
    difficulty: 'easy',
    front: 'Study sample vs Accessible population',
    back: 'The study sample is a subset of the accessible population.\n🎯 Exam trap: Target Population > Accessible Population > Study Sample > Actual Participants.',
    note: 'You can\'t sample from people you don\'t have access to.'
  },
  {
    id: 'cur-m13-004',
    type: 'DEFINITION',
    topic: 'Study Population',
    difficulty: 'medium',
    front: 'Representativeness',
    back: 'The extent to which the characteristics of the sample accurately reflect the characteristics of the target population.\n🎯 Exam trap: Large sample size does NOT guarantee representativeness if the selection method is flawed.',
    note: 'A giant scoop of just the foam doesn\'t represent the whole cappuccino.'
  },
  {
    id: 'cur-m13-005',
    type: 'DEFINITION',
    topic: 'Study Population',
    difficulty: 'easy',
    front: 'Inclusion criteria - definition',
    back: 'The specific characteristics that define who is eligible to enter the study (e.g. age, gender, diagnosis).\n🎯 Exam trap: Must be defined BEFORE the study begins.',
    note: 'The VIP guest list requirements.'
  },
  {
    id: 'cur-m13-006',
    type: 'DEFINITION',
    topic: 'Study Population',
    difficulty: 'medium',
    front: 'Exclusion criteria - definition',
    back: 'Characteristics that disqualify individuals who otherwise meet the inclusion criteria, usually for safety or feasibility reasons.\n🎯 Exam trap: They are NOT just the opposite of inclusion criteria.',
    note: 'Inclusion: Adult pregnant women. Exclusion: Women with severe pre-eclampsia (too dangerous to study).'
  },
  {
    id: 'cur-m13-007',
    type: 'SCENARIO',
    topic: 'Study Population',
    difficulty: 'hard',
    front: 'Scenario: Excluding non-English speakers from a US survey',
    back: 'This is an exclusion criterion based on feasibility, but it limits external validity (generalizability) to the broader population.\n🎯 Exam trap: Feasibility exclusions often harm representativeness.',
    note: 'Easy to do, hard to generalize.'
  },
  {
    id: 'cur-m13-008',
    type: 'DIFFERENCE',
    topic: 'Study Population',
    difficulty: 'medium',
    front: 'Probability vs Non-probability sampling',
    back: 'Probability: Every member has a known, non-zero chance of selection (allows for statistical inference).\nNon-probability: Selection depends on convenience or judgment (high risk of bias).\n🎯 Exam trap: Random sampling is probability; Convenience is non-probability.',
    note: 'Probability = Math. Non-probability = "Whoever is available."'
  },
  {
    id: 'cur-m13-009',
    type: 'DEFINITION',
    topic: 'Study Population',
    difficulty: 'easy',
    front: 'Simple random sampling',
    back: 'A probability method where every individual has an equal chance of being selected. Requires a complete sampling frame (list).\n🎯 Exam trap: Often impractical because you rarely have a list of EVERYONE.',
    note: 'Drawing names out of a giant hat.'
  },
  {
    id: 'cur-m13-010',
    type: 'DEFINITION',
    topic: 'Study Population',
    difficulty: 'medium',
    front: 'Systematic sampling',
    back: 'Selecting every k-th subject from a list, starting at a random point.\n🎯 Exam trap: Valid ONLY if the list is not ordered in a way that creates a hidden pattern.',
    note: 'Counting off "1, 2, 3, YOU... 1, 2, 3, YOU."'
  },
  {
    id: 'cur-m13-011',
    type: 'DEFINITION',
    topic: 'Study Population',
    difficulty: 'medium',
    front: 'Stratified sampling',
    back: 'Dividing the population into mutually exclusive subgroups (strata) and then taking a random sample from EACH stratum.\n🎯 Exam trap: Ensures minority groups are adequately represented.',
    note: 'Sorting M&Ms by color first, then taking exactly 5 of each color.'
  },
  {
    id: 'cur-m13-012',
    type: 'DEFINITION',
    topic: 'Study Population',
    difficulty: 'medium',
    front: 'Cluster sampling',
    back: 'Dividing the population into naturally occurring groups (clusters), randomly selecting a few clusters, and studying EVERYONE in those clusters.\n🎯 Exam trap: Easier logistically, but requires a larger sample size due to design effect.',
    note: 'Instead of visiting 100 randomly selected houses across the country, you visit 5 entire neighborhoods.'
  },
  {
    id: 'cur-m13-013',
    type: 'DIFFERENCE',
    topic: 'Study Population',
    difficulty: 'hard',
    front: 'Stratified vs Cluster sampling',
    back: 'Stratified: Sample some units from EVERY group (reduces variance).\nCluster: Sample ALL units from SOME groups (increases variance, reduces cost).\n🎯 Exam trap: Stratified improves precision; Cluster reduces cost.',
    note: 'Stratified = Some from all. Cluster = All from some.'
  },
  {
    id: 'cur-m13-014',
    type: 'DEFINITION',
    topic: 'Study Population',
    difficulty: 'easy',
    front: 'Convenience sampling',
    back: 'Selecting participants simply because they are easily available.\n🎯 Exam trap: The weakest form of sampling, prone to severe selection bias.',
    note: 'Surveying your own medical students for a study on "average adult health."'
  },
  {
    id: 'cur-m13-015',
    type: 'DEFINITION',
    topic: 'Study Population',
    difficulty: 'medium',
    front: 'Snowball sampling',
    back: 'Existing participants recruit future participants from among their acquaintances.\n🎯 Exam trap: Highly useful for "hidden" or stigmatized populations (e.g. IV drug users).',
    note: 'One leads to another, like a snowball rolling down a hill.'
  },
  {
    id: 'cur-m13-016',
    type: 'DEFINITION',
    topic: 'Study Population',
    difficulty: 'medium',
    front: 'Purposive sampling',
    back: 'Selecting individuals based on the researcher\'s judgment of who will be most informative.\n🎯 Exam trap: Common in qualitative research, not quantitative.',
    note: 'Hand-picking experts to interview.'
  },
  {
    id: 'cur-m13-017',
    type: 'DEFINITION',
    topic: 'Study Population',
    difficulty: 'medium',
    front: 'Quota sampling',
    back: 'A non-probability version of stratified sampling where you fill quotas for specific subgroups without using random selection.\n🎯 Exam trap: Lacks random selection, so it is still prone to bias.',
    note: 'Stopping people on the street until you have 50 men and 50 women.'
  },
  {
    id: 'cur-m13-018',
    type: 'DEFINITION',
    topic: 'Study Population',
    difficulty: 'medium',
    front: 'Sampling frame',
    back: 'The actual list or source material from which the sample is drawn.\n🎯 Exam trap: If the sampling frame misses part of the target population, you get coverage error.',
    note: 'Using a phonebook as a sampling frame misses everyone without a phone.'
  },
  {
    id: 'cur-m13-019',
    type: 'DEFINITION',
    topic: 'Study Population',
    difficulty: 'easy',
    front: 'Consecutive sampling',
    back: 'Recruiting every single eligible person who comes through the door during a specified time period.\n🎯 Exam trap: The strongest of the non-probability methods.',
    note: 'Taking everyone who walks into the ER for exactly one month.'
  },
  {
    id: 'cur-m13-020',
    type: 'DEFINITION',
    topic: 'Study Population',
    difficulty: 'medium',
    front: 'Multistage sampling',
    back: 'A complex form of cluster sampling where you take clusters, then take sub-clusters within them, and finally sample individuals.\n🎯 Exam trap: Standard for large national surveys.',
    note: 'States -> Districts -> Villages -> Households.'
  }
];