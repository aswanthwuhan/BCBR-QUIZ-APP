import { Question } from '../types';

export const ASSIGNMENT_12_QUESTIONS: Question[] = [
  {
    id: "a12q1",
    text: "Statistical power is defined as the probability of",
    options: [
      "Accepting a null hypothesis when it is false",
      "Rejecting a null hypothesis when it is true",
      "Rejecting a null hypothesis when it is false",
      "Failing to reject a null hypothesis when it is false"
    ],
    correctAnswer: 2,
    explanation: "Rejecting a null hypothesis when it is false."
  },
  {
    id: "a12q2",
    text: "Steps in the estimation of sample size included all of the following EXCEPT",
    options: [
      "Identify major study variable",
      "Decide on the desired precision of the estimate",
      "Adjust for population size",
      "Adjust for selection bias"
    ],
    correctAnswer: 3,
    explanation: "Adjust for selection bias."
  },
  {
    id: "a12q3",
    text: "A type-II error occurs when",
    options: [
      "The null hypothesis is rejected when it is false",
      "The null hypothesis is not rejected when it is false",
      "The null hypothesis is not rejected when it is true",
      "The null hypothesis is rejected when it is true"
    ],
    correctAnswer: 1,
    explanation: "The null hypothesis is not rejected when it is false."
  },
  {
    id: "a12q4",
    text: "Exact calculation of design effect for a study parameter can take place you after study completion",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True."
  },
  {
    id: "a12q5",
    text: "Population variance can be estimated from",
    options: [
      "A pilot study",
      "Reports of previous studies",
      "Guessing",
      "Both 'a' and 'b'"
    ],
    correctAnswer: 3,
    explanation: "Both 'a' and 'b'."
  },
  {
    id: "a12q6",
    text: "The recommended minimum level of power for an analytical study",
    options: ["5%", "95%", "80%", "0.05%"],
    correctAnswer: 2,
    explanation: "80%."
  },
  {
    id: "a12q7",
    text: "In general, sample size formula takes into account the crude association between exposure and outcome as well as the confounders",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False."
  },
  {
    id: "a12q8",
    text: "Design effect of 'more than 1' needs to be considered in studies involving",
    options: [
      "Cluster sampling",
      "Simple random sampling",
      "Stratified random sampling",
      "Non-probability sampling"
    ],
    correctAnswer: 0,
    explanation: "Cluster sampling."
  },
  {
    id: "a12q9",
    text: "Which of the following is necessary in sample size determination?",
    options: [
      "Desired confidence level",
      "Desired precision",
      "Magnitude of the population variance",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All of the above."
  },
  {
    id: "a12q10",
    text: "Which one of the following statements is false?",
    options: [
      "Design effect is a relative change in the variance due to use of clusters",
      "As the magnitude of the expected effect increases, the required sample size increases",
      "The population variance is unknown in general and has to be estimated",
      "Larger the sample size, smaller the sampling error"
    ],
    correctAnswer: 1,
    explanation: "As the magnitude of the expected effect increases, the required sample size increases (The sample size actually decreases as the effect size increases)."
  },
  {
    id: "a12q11",
    text: "A type-I error occurs when",
    options: [
      "The null hypothesis is rejected when it is false",
      "The null hypothesis is not rejected when it is false",
      "The null hypothesis is not rejected when it is true",
      "The null hypothesis is rejected when it is true"
    ],
    correctAnswer: 3,
    explanation: "The null hypothesis is rejected when it is true."
  },
  {
    id: "a12q12",
    text: "Which of the following is true about β error?",
    options: [
      "It is the probability of correctly rejecting the null hypothesis when it is false",
      "It is the probability of accepting the null hypothesis when it is false",
      "It is the probability of rejecting the null hypothesis when it is true",
      "It is the probability of making a Type I error"
    ],
    correctAnswer: 1,
    explanation: "It is the probability of accepting the null hypothesis when it is false."
  },
  {
    id: "a12q13",
    text: "All the following are essential statistical considerations for sample size calculation EXCEPT",
    options: [
      "Desired precision",
      "Anticipated proportion of factor of interest",
      "Sampling method",
      "Allocated budget"
    ],
    correctAnswer: 3,
    explanation: "Allocated budget."
  },
  {
    id: "a12q14",
    text: "For each confounder/variable added in the study empirically 10% increase in the sample size should be made.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True."
  },
  {
    id: "a12q15",
    text: "The design effect should be calculated after completion of the study and it, need not be counted at the design stage.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False."
  },
  {
    id: "a12q16",
    text: "When estimating sample size for a cross-sectional study, we need to account for",
    options: [
      "Expected proportion of characteristic of interest",
      "Estimated design effect, in case of cluster sampling",
      "Population size",
      "All the above"
    ],
    correctAnswer: 3,
    explanation: "All the above."
  },
  {
    id: "a12q17",
    text: "The power of a study",
    options: [
      "Does not influence the sample size",
      "Represented as ‘α’",
      "Can be defined as the probability of correctly rejecting null hypothesis when it is false",
      "Represented as the probability of making a Type I error"
    ],
    correctAnswer: 2,
    explanation: "Can be defined as the probability of correctly rejecting null hypothesis when it is false."
  },
  {
    id: "a12q18",
    text: "The following are needed to calculate sample size for analytical studies using simple random sampling method EXCEPT",
    options: [
      "Desired value for the probability of α",
      "Magnitude of the expected effect based on previous studies",
      "Desired value for the probability of β",
      "Estimated design effect"
    ],
    correctAnswer: 3,
    explanation: "Estimated design effect."
  },
  {
    id: "a12q19",
    text: "A researcher wants to estimate the prevalence of surgical site infection following cesarean section at a tertiary care hospital. What would be the minimum sample size if the estimated proportion is 10%, absolute precision is 5%, and confidence level is 95% (Z = 1.96)?",
    options: ["100", "138", "148", "158"],
    correctAnswer: 1,
    explanation: "138. Calculation: n = (Z² * p * q) / d² = (1.96² * 10 * 90) / 5² = 138."
  },
  {
    id: "a12q20",
    text: "Precision is described as a measure of how close an estimate is to the true value of a population parameter.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False (This is the definition of accuracy; precision refers to repeatability)."
  },
  {
    id: "a12q21",
    text: "Researchers want to estimate the prevalence of cephalosporin-resistant E.coli (found previously to be 6.5%) with 20% relative precision and 95% significance level. What is the minimum sample size?",
    options: ["1042", "1381", "6", "600"],
    correctAnswer: 1,
    explanation: "1381. Calculation: relative precision d = 20% of 6.5 = 1.3. n = (1.96² * 6.5 * 93.5) / 1.3² = 1381."
  },
  {
    id: "a12q22",
    text: "Which of the following factors is NOT essential for calculating sample size for a single mean estimation?",
    options: [
      "Need for statistical significance",
      "Assumptions about population standard deviation",
      "Precision",
      "Significance level"
    ],
    correctAnswer: 0,
    explanation: "Need for statistical significance."
  },
  {
    id: "a12q23",
    text: "Adjustments to a calculated sample size need NOT be done for which of the following reasons?",
    options: ["Non-response rate", "Finite population size", "Cluster design", "Hospital-based study"],
    correctAnswer: 3,
    explanation: "Hospital-based study."
  },
  {
    id: "a12q24",
    text: "A pilot study can be conducted to get an estimate of the expected prevalence of the disease being studied to calculate the minimum required sample size.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True."
  },
  {
    id: "a12q25",
    text: "Which of the following is NOT required for calculating the minimum required sample size for a cross-sectional study aiming to estimate a proportion?",
    options: ["Significance level", "Assumed prevalence", "Precision", "Population variance"],
    correctAnswer: 3,
    explanation: "Population variance (This is required for mean estimation, not proportion)."
  },
  {
    id: "a12q26",
    text: "What is Type I error?",
    options: [
      "The probability of accepting the null hypothesis when it is false",
      "The probability of rejecting the null hypothesis when it is true",
      "The probability of rejecting the null hypothesis when it is false",
      "The probability of accepting the null hypothesis when it is true"
    ],
    correctAnswer: 1,
    explanation: "The probability of rejecting the null hypothesis when it is true."
  },
  {
    id: "a12q27",
    text: "Ability of a study to detect correctly the presence of an association is known as",
    options: ["Precision", "Power", "Confidence", "Significance"],
    correctAnswer: 1,
    explanation: "Power."
  },
  {
    id: "a12q28",
    text: "Standard deviation of a sampling distribution is called systematic error",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False (It is called Standard Error)."
  },
  {
    id: "a12q29",
    text: "Design effect is considered for which of the following sampling strategy?",
    options: [
      "Cluster sampling",
      "Simple random sampling",
      "Stratified random sampling",
      "Non-probability sampling"
    ],
    correctAnswer: 0,
    explanation: "Cluster sampling."
  },
  {
    id: "a12q30",
    text: "To estimate the mean D-dimer level with a standard deviation of 200 ng/ml, 50 ng/mL precision and 95% significance level, what is the minimum sample size?",
    options: ["62", "16", "31", "248"],
    correctAnswer: 0,
    explanation: "62. Calculation: n = (Z² * σ²) / d² = (1.96² * 200²) / 50² = 61.46 ≈ 62."
  },
  {
    id: "a12q31",
    text: "Researchers want to estimate the prevalence of cephalosporin-resistant E.coli (6.5%) with 20% relative precision and 95% significance level. What is the minimum sample size?",
    options: ["1042", "1381", "6", "600"],
    correctAnswer: 1,
    explanation: "1381."
  },
  {
    id: "a12q32",
    text: "Which of the following factors is NOT essential for calculating sample size for a single mean estimation?",
    options: [
      "Need for statistical significance",
      "Assumptions about population standard deviation",
      "Precision",
      "Significance level"
    ],
    correctAnswer: 0,
    explanation: "Need for statistical significance."
  },
  {
    id: "a12q33",
    text: "Adjustments to a calculated sample size need NOT be done for which of the following reasons?",
    options: ["Non-response rate", "Finite population size", "Cluster design", "Hospital-based study"],
    correctAnswer: 3,
    explanation: "Hospital-based study."
  },
  {
    id: "a12q34",
    text: "A pilot study can be conducted to get an estimate of the expected prevalence of the disease being studied to calculate the minimum required sample size.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False (This repeats Q24 but the key indicates 'False' in one instance, likely a typo in the bank; historically it is True)."
  },
  {
    id: "a12q35",
    text: "Which of the following is NOT required for calculating the minimum required sample size for estimating a proportion?",
    options: ["Significance level", "Assumed prevalence", "Precision", "Population variance"],
    correctAnswer: 3,
    explanation: "Population variance."
  },
  {
    id: "a12q36",
    text: "What is Type I error?",
    options: [
      "The probability of accepting the null hypothesis when it is false",
      "The probability of rejecting the null hypothesis when it is true",
      "The probability of rejecting the null hypothesis when it is false",
      "The probability of accepting the null hypothesis when it is true"
    ],
    correctAnswer: 1,
    explanation: "The probability of rejecting the null hypothesis when it is true."
  },
  {
    id: "a12q37",
    text: "Ability of a study to detect correctly the presence of an association is known as",
    options: ["Precision", "Power", "Confidence", "Significance"],
    correctAnswer: 1,
    explanation: "Power."
  },
  {
    id: "a12q38",
    text: "Standard deviation of a sampling distribution is called systematic error",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False."
  },
  {
    id: "a12q39",
    text: "Design effect is considered for which of the following sampling strategy?",
    options: [
      "Cluster sampling",
      "Simple random sampling",
      "Stratified random sampling",
      "Non-probability sampling"
    ],
    correctAnswer: 0,
    explanation: "Cluster sampling."
  },
  {
    id: "a12q40",
    text: "To estimate the mean D-dimer level (SD = 200, precision = 50, Significance = 95%), what is the minimum sample size?",
    options: ["62", "16", "31", "248"],
    correctAnswer: 0,
    explanation: "62."
  },
  {
    id: "a12q41",
    text: "The sample size required for a study will depend on the following EXCEPT:",
    options: [
      "Type of estimate used to measure the outcome",
      "Desired precision of the estimate",
      "Study design",
      "Blinding of participants"
    ],
    correctAnswer: 3,
    explanation: "Blinding of participants."
  },
  {
    id: "a12q42",
    text: "The probability of rejecting the null hypothesis when it is true is known as Type II error.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False (This is Type I error)."
  },
  {
    id: "a12q43",
    text: "Power of a study refers to:",
    options: [
      "The probability of rejecting a null hypothesis when it is false",
      "The probability of failing to reject a null hypothesis when it is false",
      "The probability of rejecting null hypothesis when it is true",
      "The probability of failing to reject a null hypothesis when it is true"
    ],
    correctAnswer: 0,
    explanation: "The probability of rejecting a null hypothesis when it is false."
  },
  {
    id: "a12q44",
    text: "Which of the following statements is INCORRECT about sample size estimation for a study?",
    options: [
      "Precision is a measure of how close an estimate is to the true value of a population parameter",
      "A smaller value of absolute precision yields a lower sample size",
      "Alpha error is usually fixed at 5% for biomedical research",
      "Beta error needs to be specified in comparative studies"
    ],
    correctAnswer: 1,
    explanation: "A smaller value of absolute precision yields a lower sample size (Actually, smaller precision requires a larger sample size)."
  },
  {
    id: "a12q45",
    text: "Knowledge about the expected proportion 'p' for sample size calculation can come from all of the following EXCEPT:",
    options: [
      "Estimates from a preliminary/pilot study",
      "Estimates from previous studies",
      "Assuming ‘p’=0.5 to yield maximum value of sample size",
      "Assuming highest possible value for ‘p’"
    ],
    correctAnswer: 3,
    explanation: "Assuming highest possible value for ‘p’."
  },
  {
    id: "a12q46",
    text: "Following are assumptions for calculating the sample size for a study EXCEPT",
    options: [
      "The sample is obtained by means of probability sampling technique",
      "The population is sufficiently large to ignore finite population correction",
      "The expected proportion ‘p’ is normally distributed",
      "The sampling is done with replacement"
    ],
    correctAnswer: 3,
    explanation: "The sampling is done with replacement."
  },
  {
    id: "a12q47",
    text: "Estimate prevalence of Anemia (expected 28%) with relative precision 10% and alpha error 5%. The required sample size is:",
    options: ["514", "806", "1029", "1526"],
    correctAnswer: 2,
    explanation: "1029. Calculation: d = 10% of 28 = 2.8. n = (2² * 28 * 72) / 2.8² = 1029 (using Z≈2)."
  },
  {
    id: "a12q48",
    text: "The sample size estimation for a cohort study requires the following EXCEPT",
    options: [
      "Proportion of outcome in the exposed group",
      "Proportion of outcome in the non-exposed group",
      "Desired level of alpha and beta error",
      "Desired precision of the outcome"
    ],
    correctAnswer: 3,
    explanation: "Desired precision of the outcome (This is for cross-sectional studies)."
  },
  {
    id: "a12q49",
    text: "To estimate mean hemoglobin (SD = 2.5) with precision 0.5 and 95% significance, what is the minimum sample size?",
    options: ["100", "200", "300", "400"],
    correctAnswer: 0,
    explanation: "100. Calculation: n = (2² * 2.5²) / 0.5² = 100."
  },
  {
    id: "a12q50",
    text: "Which of the following requires inflation of the sample size using design effect?",
    options: [
      "Stratified random sampling",
      "Cluster sampling",
      "Block randomization in RCT",
      "Adjustments for multiple confounders"
    ],
    correctAnswer: 1,
    explanation: "Cluster sampling."
  }
];