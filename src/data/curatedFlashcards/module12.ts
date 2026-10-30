import { CuratedCard } from './types';

// Module 12: Sample Size and Statistical Power
export const MODULE_12_CARDS: CuratedCard[] = [
  {
    id: 'cur-m12-001',
    type: 'DEFINITION',
    topic: 'Sample Size & Power',
    difficulty: 'medium',
    front: 'Statistical power - definition',
    back: 'The probability of correctly rejecting a false null hypothesis.\n🎯 Exam trap: It is equal to 1 - Beta (where Beta is the probability of a Type-II error).',
    note: 'Power is your study\'s ability to detect a true difference if one actually exists.'
  },
  {
    id: 'cur-m12-002',
    type: 'DEFINITION',
    topic: 'Sample Size & Power',
    difficulty: 'medium',
    front: 'Type-II error (Beta)',
    back: 'Failing to reject a null hypothesis when it is actually false. (Saying there is no difference when there IS a difference).\n🎯 Exam trap: Often caused by inadequate sample size.',
    note: 'Type II error = False Negative. You missed the discovery.'
  },
  {
    id: 'cur-m12-003',
    type: 'DEFINITION',
    topic: 'Sample Size & Power',
    difficulty: 'medium',
    front: 'Type-I error (Alpha)',
    back: 'Rejecting a null hypothesis when it is actually true. (Saying there is a difference when there is NO difference).\n🎯 Exam trap: Typically set at 0.05 (5%).',
    note: 'Type I error = False Positive. You cried wolf.'
  },
  {
    id: 'cur-m12-004',
    type: 'LIST',
    topic: 'Sample Size & Power',
    difficulty: 'medium',
    front: 'Steps in sample size estimation',
    back: '1. Identify the major study variable\n2. Determine the expected effect size\n3. Set the desired level of significance (alpha) and power\n4. Decide on the desired precision\n5. Adjust for population size (if finite)\n🎯 Exam trap: Adjusting for selection bias is NOT a step in sample size estimation.',
    note: 'You calculate sample size mathematically; you handle bias through study design.'
  },
  {
    id: 'cur-m12-005',
    type: 'DIFFERENCE',
    topic: 'Sample Size & Power',
    difficulty: 'easy',
    front: 'Alpha vs Beta',
    back: 'Alpha = Probability of Type-I error (False Positive).\nBeta = Probability of Type-II error (False Negative).\n🎯 Exam trap: Power is 1 - Beta, confidence level is 1 - Alpha.',
    note: 'Alpha is the risk of crying wolf. Beta is the risk of sleeping through a robbery.'
  },
  {
    id: 'cur-m12-006',
    type: 'DEFINITION',
    topic: 'Sample Size & Power',
    difficulty: 'medium',
    front: 'Effect size',
    back: 'The magnitude of the difference or association you expect to find between groups.\n🎯 Exam trap: A smaller expected effect size requires a LARGER sample size to detect.',
    note: 'If you are looking for a needle in a haystack (small effect), you need to search more hay (large sample size).'
  },
  {
    id: 'cur-m12-007',
    type: 'DEFINITION',
    topic: 'Sample Size & Power',
    difficulty: 'medium',
    front: 'Standard deviation in sample size calculation',
    back: 'Higher variability (standard deviation) in the population requires a LARGER sample size to achieve the same precision.\n🎯 Exam trap: Usually estimated from pilot studies or previous literature.',
    note: 'If everyone is exactly the same, you only need to measure one person. The more different people are, the more you must measure.'
  },
  {
    id: 'cur-m12-008',
    type: 'DEFINITION',
    topic: 'Sample Size & Power',
    difficulty: 'medium',
    front: 'Precision in sample size calculation',
    back: 'The allowable margin of error around the estimate. Tighter precision requires a LARGER sample size.\n🎯 Exam trap: Do not confuse precision with power.',
    note: 'Precision = how narrow your confidence interval is.'
  },
  {
    id: 'cur-m12-009',
    type: 'SCENARIO',
    topic: 'Sample Size & Power',
    difficulty: 'medium',
    front: 'Scenario: Setting Alpha to 0.01 instead of 0.05',
    back: 'Decreasing Alpha (making it stricter) reduces the chance of a Type-I error but INCREASES the chance of a Type-II error (lowers power) unless sample size is increased.\n🎯 Exam trap: Alpha and Beta trade off against each other.',
    note: 'If you demand absolute proof before convicting (low alpha), more guilty people will go free (high beta).'
  },
  {
    id: 'cur-m12-010',
    type: 'SCENARIO',
    topic: 'Sample Size & Power',
    difficulty: 'medium',
    front: 'Scenario: Desired power is increased from 80% to 90%',
    back: 'Increasing the statistical power requires a LARGER sample size.\n🎯 Exam trap: 80% is the standard minimum acceptable power in most studies.',
    note: 'To be more certain you won\'t miss a true effect, you must collect more data.'
  },
  {
    id: 'cur-m12-011',
    type: 'DEFINITION',
    topic: 'Sample Size & Power',
    difficulty: 'medium',
    front: 'Sample size for a finite population',
    back: 'If the total population is very small, the required sample size can be reduced using the "finite population correction" factor.\n🎯 Exam trap: Only relevant when the sample is a large fraction (e.g. >5%) of the total population.',
    note: 'If your whole school has 100 students, you don\'t need a sample of 300.'
  },
  {
    id: 'cur-m12-012',
    type: 'DEFINITION',
    topic: 'Sample Size & Power',
    difficulty: 'easy',
    front: 'Design effect (Deff)',
    back: 'A multiplier used in sample size calculation for complex sampling designs (like cluster sampling) to account for increased variance compared to simple random sampling.\n🎯 Exam trap: Cluster sampling always requires a LARGER sample size than simple random sampling.',
    note: 'People in a cluster are similar. You need more of them to get the same amount of unique information.'
  },
  {
    id: 'cur-m12-013',
    type: 'DEFINITION',
    topic: 'Sample Size & Power',
    difficulty: 'medium',
    front: 'Adjusting for non-response / loss to follow-up',
    back: 'The calculated sample size must be increased by the expected attrition rate to ensure the final analyzed sample is large enough.\n🎯 Exam trap: Final Sample = Calculated Sample / (1 - Attrition Rate).',
    note: 'Always recruit more than you need, because some will inevitably drop out.'
  },
  {
    id: 'cur-m12-014',
    type: 'DEFINITION',
    topic: 'Sample Size & Power',
    difficulty: 'medium',
    front: 'P-value vs Alpha',
    back: 'Alpha is the threshold set BEFORE the study (e.g. 0.05). The p-value is the probability calculated FROM the study data.\n🎯 Exam trap: If p < alpha, you reject the null hypothesis.',
    note: 'Alpha is the speed limit. P-value is how fast you were actually driving.'
  },
  {
    id: 'cur-m12-015',
    type: 'SCENARIO',
    topic: 'Sample Size & Power',
    difficulty: 'medium',
    front: 'Scenario: A study finds no significant difference (p > 0.05).',
    back: 'This might be a true negative, OR it might be a Type-II error due to inadequate sample size (low power).\n🎯 Exam trap: "Absence of evidence is not evidence of absence."',
    note: 'If you didn\'t find it, maybe it wasn\'t there, or maybe you just didn\'t look hard enough (sample too small).'
  },
  {
    id: 'cur-m12-016',
    type: 'DEFINITION',
    topic: 'Sample Size & Power',
    difficulty: 'hard',
    front: 'One-tailed vs Two-tailed tests in sample size',
    back: 'A two-tailed test requires a LARGER sample size than a one-tailed test for the same alpha level, because alpha is split between both tails.\n🎯 Exam trap: Always assume two-tailed unless there is a biological impossibility of an effect in one direction.',
    note: 'Two-tailed is safer and standard; it checks for differences in either direction.'
  },
  {
    id: 'cur-m12-017',
    type: 'LIST',
    topic: 'Sample Size & Power',
    difficulty: 'medium',
    front: 'Factors that INCREASE required sample size',
    back: '1. Smaller expected effect size\n2. Higher population variance\n3. Higher desired power (e.g. 90% vs 80%)\n4. Stricter alpha (e.g. 0.01 vs 0.05)',
    note: 'Anything that demands more precision or certainty costs more data.'
  },
  {
    id: 'cur-m12-018',
    type: 'LIST',
    topic: 'Sample Size & Power',
    difficulty: 'medium',
    front: 'Factors that DECREASE required sample size',
    back: '1. Larger expected effect size\n2. Lower population variance\n3. Using paired or repeated-measures designs',
    note: 'Big, obvious differences in highly uniform populations are easy to prove with small samples.'
  },
  {
    id: 'cur-m12-019',
    type: 'DEFINITION',
    topic: 'Sample Size & Power',
    difficulty: 'easy',
    front: 'Null hypothesis',
    back: 'The assumption that there is NO difference or NO association between the variables being studied.\n🎯 Exam trap: Statistical tests are designed to try and REJECT the null hypothesis.',
    note: 'Null = Zero difference. It is the default state of "nothing interesting is happening here."'
  },
  {
    id: 'cur-m12-020',
    type: 'DEFINITION',
    topic: 'Sample Size & Power',
    difficulty: 'medium',
    front: 'Clinical vs Statistical Significance',
    back: 'A result can be statistically significant (p < 0.05) in a massive sample, but the difference might be too small to matter clinically.\n🎯 Exam trap: P-value tells you if a difference exists, NOT if it is important.',
    note: 'A drug might lower blood pressure by exactly 0.1 mmHg reliably (statistically significant), but that won\'t save any lives (not clinically significant).'
  }
];