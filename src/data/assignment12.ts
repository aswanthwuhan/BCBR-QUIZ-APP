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
    explanation: "Power ($1 - \\beta$) is the probability of correctly rejecting the null hypothesis when it is false, that is, of detecting a true effect. It is conventionally set at 80% or higher."
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
    explanation: "Sample size estimation involves identifying the main variable, setting the confidence level, precision and variance, and adjusting for population size, design effect and non-response. Selection bias cannot be corrected through sample size."
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
    explanation: "A Type II error ($\\beta$) is a false negative: failing to reject the null hypothesis when it is actually false, so a real effect is missed. It is often caused by low power."
  },
  {
    id: "a12q4",
    text: "Exact calculation of design effect for a study parameter can take place you after study completion",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Design effect is only assumed at the planning stage. Its exact value can be calculated after data collection, using the observed variance or intracluster correlation in the actual study data."
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
    explanation: "Population variance is usually unknown. It is estimated from a pilot study or from previously published studies in similar populations, not by guessing."
  },
  {
    id: "a12q6",
    text: "The recommended minimum level of power for an analytical study",
    options: ["5%", "95%", "80%", "0.05%"],
    correctAnswer: 2,
    explanation: "The conventional minimum power is 80% ($\\beta = 0.20$), meaning a 20% chance of missing a true effect. 95% is the usual confidence level, and 5% is the usual alpha."
  },
  {
    id: "a12q7",
    text: "In general, sample size formula takes into account the crude association between exposure and outcome as well as the confounders",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Standard sample size formulas are based on the crude association (effect size, variance, alpha and power) and do not account for confounders. Adjusting for confounders needs a separate increase in sample size."
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
    explanation: "In cluster sampling, people within a cluster tend to be similar, which increases variance. The sample size must therefore be multiplied by a design effect greater than 1, given by $1 + (m-1)\\rho$. Simple random sampling has a design effect of exactly 1."
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
    explanation: "Sample size formulas need the confidence level (the Z value), the desired precision (margin of error d) and the population variance. All three appear directly in the formula $n = Z^2\\sigma^2/d^2$."
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
    explanation: "This statement is false because a larger expected effect is easier to detect and so needs a smaller sample. Sample size varies inversely with the square of the effect size. The other statements are true."
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
    explanation: "A Type I error ($\\alpha$) is a false positive: rejecting the null hypothesis when it is actually true, so a non-existent effect is declared. Its probability is the significance level, usually 0.05."
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
    explanation: "β (Type II) error is the probability of accepting (failing to reject) the null hypothesis when it is actually false, i.e., missing a real effect. Correctly rejecting a false null is power ($1-\\beta$); rejecting a true null is α error."
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
    explanation: "Sample size is determined by statistical inputs such as precision, expected proportion, confidence level and sampling method. Budget is a feasibility constraint, not a statistical consideration in the calculation."
  },
  {
    id: "a12q14",
    text: "For each confounder/variable added in the study empirically 10% increase in the sample size should be made.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "As taught in BCBR, an empirical rule is to increase the sample size by about 10% for each additional confounder or variable adjusted for, since each extra variable reduces the effective information for the main analysis."
  },
  {
    id: "a12q15",
    text: "The design effect should be calculated after completion of the study and it, need not be counted at the design stage.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. The design effect must be incorporated at the design stage when using cluster sampling; otherwise the study will be underpowered because subjects within clusters are similar."
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
    explanation: "A cross-sectional sample size calculation needs the expected proportion, a design effect if cluster sampling is used, and population size for finite population correction, so all the options apply."
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
    explanation: "Power ($1-\\beta$) is the probability of correctly rejecting the null hypothesis when it is false. It directly influences sample size; α is the Type I error, not power."
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
    explanation: "Analytical studies with simple random sampling need α, β (power) and the expected effect size. Design effect is required only for cluster sampling, not simple random sampling."
  },
  {
    id: "a12q19",
    text: "A researcher wants to estimate the prevalence of surgical site infection following cesarean section at a tertiary care hospital. What would be the minimum sample size if the estimated proportion is 10%, absolute precision is 5%, and confidence level is 95% (Z = 1.96)?",
    options: ["100", "138", "148", "158"],
    correctAnswer: 1,
    explanation: "Using $n = Z^2pq/d^2 = 1.96^2 \\times 10 \\times 90 / 5^2 \\approx 138$. (Strict rounding up gives 139; 138 is the keyed option.)"
  },
  {
    id: "a12q20",
    text: "Precision is described as a measure of how close an estimate is to the true value of a population parameter.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Closeness of an estimate to the true population value is accuracy (validity). Precision refers to repeatability, i.e., how close repeated estimates are to each other."
  },
  {
    id: "a12q21",
    text: "Researchers want to estimate the prevalence of cephalosporin-resistant E.coli (found previously to be 6.5%) with 20% relative precision and 95% significance level. What is the minimum sample size?",
    options: ["1042", "1381", "6", "600"],
    correctAnswer: 1,
    explanation: "Relative precision of 20% of 6.5% gives $d = 1.3$. Then $n = 1.96^2 \\times 6.5 \\times 93.5 / 1.3^2 \\approx 1381$."
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
    explanation: "Estimating a single mean uses $n = Z^2\\sigma^2/d^2$, requiring significance level, assumed SD and precision. A 'need for statistical significance' is not an input for a descriptive estimate."
  },
  {
    id: "a12q23",
    text: "Adjustments to a calculated sample size need NOT be done for which of the following reasons?",
    options: ["Non-response rate", "Finite population size", "Cluster design", "Hospital-based study"],
    correctAnswer: 3,
    explanation: "Sample size is adjusted for non-response, finite population size and cluster design (design effect). Being a hospital-based study does not by itself require a statistical adjustment."
  },
  {
    id: "a12q24",
    text: "A pilot study can be conducted to get an estimate of the expected prevalence of the disease being studied to calculate the minimum required sample size.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. When literature provides no reliable estimate of expected prevalence, a pilot study can supply it; alternatively previous studies or $p = 0.5$ can be used."
  },
  {
    id: "a12q25",
    text: "Which of the following is NOT required for calculating the minimum required sample size for a cross-sectional study aiming to estimate a proportion?",
    options: ["Significance level", "Assumed prevalence", "Precision", "Population variance"],
    correctAnswer: 3,
    explanation: "Estimating a proportion uses $n = Z^2pq/d^2$, needing significance level, assumed prevalence and precision. Population variance is needed for estimating a mean, not a proportion."
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
    explanation: "Type I (α) error is the probability of rejecting the null hypothesis when it is true, i.e., a false positive finding."
  },
  {
    id: "a12q27",
    text: "Ability of a study to detect correctly the presence of an association is known as",
    options: ["Precision", "Power", "Confidence", "Significance"],
    correctAnswer: 1,
    explanation: "Power ($1-\\beta$) is the ability of a study to correctly detect an association or difference that truly exists."
  },
  {
    id: "a12q28",
    text: "Standard deviation of a sampling distribution is called systematic error",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. The standard deviation of a sampling distribution is the standard error ($\\sigma/\\sqrt{n}$), which reflects random error. Systematic error is bias."
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
    explanation: "Design effect is applied in cluster sampling because individuals within a cluster are similar (intra-cluster correlation), which reduces effective sample size compared with simple random sampling."
  },
  {
    id: "a12q30",
    text: "To estimate the mean D-dimer level with a standard deviation of 200 ng/ml, 50 ng/mL precision and 95% significance level, what is the minimum sample size?",
    options: ["62", "16", "31", "248"],
    correctAnswer: 0,
    explanation: "For a mean, $n = Z^2\\sigma^2/d^2 = 1.96^2 \\times 200^2 / 50^2 \\approx 61.5$, rounded up to 62."
  },
  {
    id: "a12q31",
    text: "Researchers want to estimate the prevalence of cephalosporin-resistant E.coli (6.5%) with 20% relative precision and 95% significance level. What is the minimum sample size?",
    options: ["1042", "1381", "6", "600"],
    correctAnswer: 1,
    explanation: "Relative precision of 20% of 6.5% gives $d = 1.3$, so $n = 1.96^2 \\times 6.5 \\times 93.5 / 1.3^2 \\approx 1381$."
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
    explanation: "Estimating a single mean uses $n = Z^2\\sigma^2/d^2$, requiring significance level, assumed SD and precision. A 'need for statistical significance' is not an input for a descriptive estimate."
  },
  {
    id: "a12q33",
    text: "Adjustments to a calculated sample size need NOT be done for which of the following reasons?",
    options: ["Non-response rate", "Finite population size", "Cluster design", "Hospital-based study"],
    correctAnswer: 3,
    explanation: "Sample size is adjusted for non-response, finite population size and cluster design (design effect). Being a hospital-based study does not by itself require a statistical adjustment."
  },
  {
    id: "a12q34",
    text: "A pilot study can be conducted to get an estimate of the expected prevalence of the disease being studied to calculate the minimum required sample size.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. When literature provides no reliable estimate of expected prevalence, a pilot study can supply it; alternatively previous studies or $p = 0.5$ can be used."
  },
  {
    id: "a12q35",
    text: "Which of the following is NOT required for calculating the minimum required sample size for estimating a proportion?",
    options: ["Significance level", "Assumed prevalence", "Precision", "Population variance"],
    correctAnswer: 3,
    explanation: "Estimating a proportion requires significance level, assumed prevalence and precision ($n = Z^2pq/d^2$). Population variance is used for estimating means, not proportions."
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
    explanation: "Type I (α) error is the probability of rejecting the null hypothesis when it is true, i.e., a false positive finding."
  },
  {
    id: "a12q37",
    text: "Ability of a study to detect correctly the presence of an association is known as",
    options: ["Precision", "Power", "Confidence", "Significance"],
    correctAnswer: 1,
    explanation: "Power ($1-\\beta$) is the ability of a study to correctly detect an association or difference that truly exists."
  },
  {
    id: "a12q38",
    text: "Standard deviation of a sampling distribution is called systematic error",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. The standard deviation of a sampling distribution is the standard error ($\\sigma/\\sqrt{n}$), which reflects random error. Systematic error is bias."
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
    explanation: "Design effect is applied in cluster sampling because individuals within a cluster are similar (intra-cluster correlation), which reduces effective sample size compared with simple random sampling."
  },
  {
    id: "a12q40",
    text: "To estimate the mean D-dimer level (SD = 200, precision = 50, Significance = 95%), what is the minimum sample size?",
    options: ["62", "16", "31", "248"],
    correctAnswer: 0,
    explanation: "Using $n = Z^2\\sigma^2/d^2 = 1.96^2 \\times 200^2 / 50^2 \\approx 61.5$, rounded up to 62."
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
    explanation: "Sample size depends on the type of outcome estimate, desired precision and study design. Blinding controls bias but does not affect the number of participants required."
  },
  {
    id: "a12q42",
    text: "The probability of rejecting the null hypothesis when it is true is known as Type II error.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Rejecting the null hypothesis when it is true is a Type I (α) error. Type II error is failing to reject a false null hypothesis."
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
    explanation: "Power is the probability of rejecting the null hypothesis when it is false, equal to $1-\\beta$."
  },
  {
    id: "a12q44",
    text: "Which of the following statements is INCORRECT about sample size estimation for a study?",
    options: [
      "Accuracy is a measure of how close an estimate is to the true value of a population parameter",
      "A smaller value of absolute precision yields a lower sample size",
      "Alpha error is usually fixed at 5% for biomedical research",
      "Beta error needs to be specified in comparative studies"
    ],
    correctAnswer: 1,
    explanation: "The incorrect statement is that smaller absolute precision gives a lower sample size. Since $n \\propto 1/d^2$, a smaller precision value requires a larger sample."
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
    explanation: "Expected proportion can come from pilot studies, previous studies, or assuming $p = 0.5$, which maximizes $pq$. Assuming the highest possible p actually makes $pq$ approach zero and underestimates sample size."
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
    explanation: "Sample size formulas assume probability sampling, a large population (ignoring finite population correction) and approximate normality of p. Sampling with replacement is not one of the stated assumptions."
  },
  {
    id: "a12q47",
    text: "Estimate prevalence of Anemia (expected 28%) with relative precision 10% and alpha error 5%. The required sample size is:",
    options: ["514", "806", "1029", "1526"],
    correctAnswer: 2,
    explanation: "Relative precision 10% of 28% gives $d = 2.8$. Using $Z \\approx 2$, $n = 4 \\times 28 \\times 72 / 2.8^2 \\approx 1029$ (about 988 if $Z = 1.96$ is used)."
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
    explanation: "A cohort study compares groups, so it needs outcome proportions in exposed and unexposed groups plus α and β. Desired precision is used for descriptive (cross-sectional) estimation studies."
  },
  {
    id: "a12q49",
    text: "To estimate mean hemoglobin (SD = 2.5) with precision 0.5 and 95% significance, what is the minimum sample size?",
    options: ["100", "200", "300", "400"],
    correctAnswer: 0,
    explanation: "Using $Z \\approx 2$, $n = 2^2 \\times 2.5^2 / 0.5^2 = 100$ (about 97 with $Z = 1.96$)."
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
    explanation: "Cluster sampling requires multiplying the sample size by the design effect because subjects within clusters are correlated. Stratified sampling, block randomization and confounder adjustment do not use design effect."
  }
];