import { Question } from '../types';

export const ASSIGNMENT_18_QUESTIONS: Question[] = [
  {
    id: "a18q1",
    text: "The three stages of data analysis are in the following order",
    options: [
      "Descriptive stage, analytical stage and recoding stage",
      "Recoding stage, descriptive stage and analytical stage",
      "Analytical stage, descriptive stage and recoding stage",
      "Descriptive stage, coding stage, recoding stage"
    ],
    correctAnswer: 1,
    explanation: "Data analysis runs in this order: recoding (preparing variables), then descriptive (describing the population), then analytical (testing associations)."
  },
  {
    id: "a18q2",
    text: "We need to avoid the following while performing data analysis",
    options: [
      "Post hoc analysis",
      "Data drenching",
      "Stratified data analysis",
      "'a' and 'b'"
    ],
    correctAnswer: 3,
    explanation: "Post hoc analysis and data drenching (fishing for significant results) produce spurious findings and inflate type I error, so both should be avoided. Stratified analysis is a legitimate method for checking confounding."
  },
  {
    id: "a18q3",
    text: "In the descriptive stage of analysis, we use logistic regression models",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Logistic regression is a multivariate method used in the analytical stage. The descriptive stage uses frequencies, proportions, means and rates."
  },
  {
    id: "a18q4",
    text: "'Epi-Info' is a software used for data entry and data analysis",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Epi Info is free CDC software that supports form design, data entry with validation, and data analysis."
  },
  {
    id: "a18q5",
    text: "In analytical stage of data analysis, we perform the following in order",
    options: [
      "Stratified analysis, univariate analysis and multivariate analysis",
      "Univariate analysis, stratified analysis and multivariate analysis",
      "Multivariate analysis, univariate analysis and stratified analysis",
      "Frequency analysis and univariate analysis"
    ],
    correctAnswer: 1,
    explanation: "The analytical stage moves from univariate (crude) analysis to stratified analysis for confounding and effect modification, and then to multivariate models that adjust for several factors."
  },
  {
    id: "a18q6",
    text: "Among the seven steps of data analysis strategy, the sequence of data analysis is as follows:\nA. Conduct advanced analysis\nB. Identify main variables\nC. Become familiar with the data\nD. Identify study type\nE. Examine outcome/exposure association\nF. Characterize study population\nG. Create additional two-way tables",
    options: [
      "A, B, C, D, E, F, G",
      "G, E, F, D, A, B, C",
      "D, B, C, F, E, G, A",
      "E, F, G, C, A, B, D"
    ],
    correctAnswer: 2,
    explanation: "The analysis strategy goes: identify the study type, identify the main variables, get familiar with the data, characterize the population, examine the exposure-outcome association, create additional two-way tables, and finally conduct advanced analysis."
  },
  {
    id: "a18q7",
    text: "In case of descriptive studies, which of the following is wrong?",
    options: [
      "We describe the study outcome for 1 group",
      "We compare the study outcome for 2 groups",
      "We calculate the incidence for cohort or surveillance data",
      "We calculate prevalence for cross sectional survey"
    ],
    correctAnswer: 1,
    explanation: "Descriptive studies describe the outcome in one group, for example incidence from cohorts or prevalence from surveys. Comparing two groups is the job of analytical studies, so that statement is wrong."
  },
  {
    id: "a18q8",
    text: "If we are doing an analytical study and the study outcome is of acute nature and rare condition what is the appropriate (i) study design and (ii) measure of association?",
    options: [
      "Cohort study - Relative risk",
      "Case-control study - Odds ratio",
      "Cross-sectional study - Prevalence ratio",
      "Surveillance - Incidence"
    ],
    correctAnswer: 1,
    explanation: "For a rare outcome, a case-control study is the efficient choice because it starts from cases that already exist. Incidence cannot be measured in this design, so the measure of association is the odds ratio."
  },
  {
    id: "a18q9",
    text: "Analysis plan depends on",
    options: [
      "Objectives of the study",
      "Budget",
      "Study type (Descriptive or analytical)",
      "'a' and 'c'"
    ],
    correctAnswer: 3,
    explanation: "The analysis plan follows from the study objectives and the study type (descriptive or analytical). Budget affects logistics, not which statistical analysis is appropriate."
  },
  {
    id: "a18q10",
    text: "Use of spreadsheets, such as Excel, should be avoided for data management and analysis",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Spreadsheets lack validation checks and an audit trail, and sorting can misalign records. Dedicated software such as Epi Info, EpiData or REDCap is preferred."
  },
  {
    id: "a18q11",
    text: "A confounder is a variable that is associated with both the exposure and the outcome and is not on the causal pathway between them.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. A confounder distorts the exposure-outcome association because it is linked to both. A variable on the causal pathway is an intermediate, not a confounder."
  },
  {
    id: "a18q12",
    text: "“Epi-Info” is a software that can be used to create data collection instrument format",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Epi Info, free software from the CDC, can design data collection forms and questionnaires with validation checks, and can also be used for data entry and analysis."
  },
  {
    id: "a18q13",
    text: "Which is the most appropriate measure to summarize the central value of a highly skewed variable such as monthly income?",
    options: ["Mean", "Median", "Mode", "Range"],
    correctAnswer: 1,
    explanation: "The median is not pulled by extreme values, so it represents the typical value of a skewed distribution better than the mean. Range is a measure of spread."
  },
  {
    id: "a18q14",
    text: "At the time of data cleaning, which of the following is not done?",
    options: [
      "Checking and removing duplicates",
      "Dealing with missing observations",
      "Calculating strength of association",
      "Checking range and legal values"
    ],
    correctAnswer: 2,
    explanation: "Data cleaning covers removing duplicates, handling missing values and range or legal-value checks. Strength of association is calculated later, during the analytical stage."
  },
  {
    id: "a18q15",
    text: "To describe the study population characteristics we need to",
    options: [
      "Calculate the frequency distribution",
      "Calculate measures of association",
      "Look for correlation between variables",
      "perform multivariable regression"
    ],
    correctAnswer: 0,
    explanation: "The study population is described with descriptive statistics such as frequency distributions and percentages. Association, correlation and regression are analytical methods."
  },
  {
    id: "a18q16",
    text: "While examining the association between exposure and outcome based on a priori hypothesis, we compare frequency of exposures between cases and controls using appropriate measure of association",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. A case-control study tests a pre-stated hypothesis by comparing how often the exposure occurred in cases and in controls, using the odds ratio."
  },
  {
    id: "a18q17",
    text: "If we are doing an analytical study and the study outcome is of acute nature and a frequent condition what is the appropriate (i) study design and (ii) measure of association?",
    options: [
      "Cohort study - relative risk",
      "Case-control study – odds ratio",
      "Cross sectional study - Prevalence",
      "Surveillance - Incidence"
    ],
    correctAnswer: 0,
    explanation: "For a frequent, acute outcome, enough cases develop during a feasible follow-up, so a cohort study can measure incidence and calculate the relative risk."
  },
  {
    id: "a18q18",
    text: "Which of the following statements are CORRECT",
    options: [
      "Plan for data analysis is made at the end of the study",
      "Recoding can be done for key variables",
      "Multivariate analysis is done before doing a univariate analysis",
      "Data drenching is acceptable"
    ],
    correctAnswer: 1,
    explanation: "Recoding key variables (for example grouping age) is acceptable. The analysis plan is made in advance, univariate analysis comes before multivariate analysis, and data dredging is unacceptable."
  },
  {
    id: "a18q19",
    text: "Which of the following is the correct sequence for data analysis?",
    options: [
      "i. Multivariate analysis, ii. Recoding, iii. Measures of association, iv. Frequency distribution",
      "i. Multivariate analysis, iii. Measures of association, iv. Frequency distribution, ii. Recoding",
      "ii. Recoding, iv. Frequency distribution, iii. Measures of association, i. Multivariate analysis",
      "iii. Measures of association, iv. Frequency distribution, i. Multivariate analysis, ii. Recoding"
    ],
    correctAnswer: 2,
    explanation: "The correct order is to recode variables, describe them with frequency distributions, calculate measures of association, and finally adjust with multivariate analysis, moving from simple to complex."
  },
  {
    id: "a18q20",
    text: "If the stratum-specific odds ratios are similar to each other but clearly different from the crude odds ratio, effect modification is present.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Similar stratum-specific estimates that differ from the crude estimate indicate confounding. Effect modification is suggested when the stratum-specific estimates differ from each other."
  },
  {
    id: "a18q21",
    text: "All the following are done to characterize the study population EXCEPT",
    options: [
      "Provide frequency distribution of age",
      "Provide percentages of gender",
      "Compare baseline characteristics of study groups",
      "Conduct logistic regression analysis"
    ],
    correctAnswer: 3,
    explanation: "Frequencies, percentages and baseline comparisons describe the study population. Logistic regression is an analytical method for examining and adjusting associations, not for describing the population."
  },
  {
    id: "a18q22",
    text: "Which of the following is the appropriate measure of association in a case-control study?",
    options: ["Odds ratio", "Prevalence ratio", "Relative risk", "Incidence"],
    correctAnswer: 0,
    explanation: "Case-control studies sample participants by outcome, so incidence cannot be measured. The odds ratio, $OR = ad/bc$, compares the odds of exposure in cases and controls."
  },
  {
    id: "a18q23",
    text: "Prevalence ratio is one of the measures of association calculated in an analytical cross-sectional study.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. An analytical cross-sectional study measures prevalence in exposed and unexposed groups, so the prevalence ratio (or prevalence odds ratio) is its measure of association."
  },
  {
    id: "a18q24",
    text: "Hypothesis testing is conducted in an analytical epidemiological study.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Analytical studies include a comparison group and are designed to test hypotheses about exposure-outcome associations. Descriptive studies generate hypotheses."
  },
  {
    id: "a18q25",
    text: "Arrange the following steps of data analysis in the correct sequence: i. Identify the main variables, ii. Check and clean the data, iii. Examine the exposure-outcome association, iv. Characterize the study population.",
    options: ["i, ii, iii, iv", "i, ii, iv, iii", "ii, iv, i, iii", "iii, i, ii, iv"],
    correctAnswer: 1,
    explanation: "First identify the variables (i), then check and clean the data (ii), describe the study population (iv), and finally examine associations (iii): i, ii, iv, iii."
  },
  {
    id: "a18q26",
    text: "Which of the following is NOT done during the analytic stage of data analysis?",
    options: [
      "Calculating frequency of the outcome in one group",
      "Calculating frequency of the outcome by age and gender",
      "Calculating odds ratio between exposure and outcome",
      "Applying logistic regression"
    ],
    correctAnswer: 0,
    explanation: "The frequency of the outcome in a single group, with no comparison, is a descriptive statistic. The analytic stage involves comparisons, odds ratios and regression."
  },
  {
    id: "a18q27",
    text: "Relative risk is calculated in which of the following study designs?",
    options: ["Cross-sectional study", "Cohort study", "Case study", "Case control study"],
    correctAnswer: 1,
    explanation: "Relative risk needs incidence in exposed and unexposed groups, which only a cohort study (following people over time) provides."
  },
  {
    id: "a18q28",
    text: "Risk ratio can be calculated in a descriptive cross-sectional study.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. A descriptive cross-sectional study only estimates prevalence and has no comparison group. A risk ratio also needs incidence, which requires a cohort design."
  },
  {
    id: "a18q29",
    text: "In a case-control study to examine the association between mobile phone use and acoustic neuroma, 24 cases and 72 hospital controls were recruited. Exposure was present among 16 cases and 18 controls. Calculate the measure of association.",
    options: ["Odds ratio 1.5", "Relative risk 1.5", "Odds ratio 6", "Relative risk 6"],
    correctAnswer: 2,
    explanation: "The cells are a=16, b=18, c=8 and d=54. For a case-control study, $OR = (16 \\times 54)/(18 \\times 8) = 6$. Relative risk is not valid in this design."
  },
  {
    id: "a18q30",
    text: "In a case control conducted taking 100 autism children and 200 normal children, it was found that 90 autism children and 60 normal children had a history of instrumental delivery. Calculate the measure of association.",
    options: ["12", "21", "6", "9"],
    correctAnswer: 1,
    explanation: "The cells are a=90, b=60, c=10 and d=140. The odds ratio is $(90 \\times 140)/(60 \\times 10) = 21$."
  },
  {
    id: "a18q31",
    text: "The Mantel-Haenszel method in stratified analysis is used to",
    options: ["Calculate the sample size", "Estimate prevalence", "Obtain a summary odds ratio adjusted for the stratification variable", "Test whether data are normally distributed"],
    correctAnswer: 2,
    explanation: "The Mantel-Haenszel estimator combines stratum-specific odds ratios into one summary estimate adjusted for the confounder used to stratify."
  },
  {
    id: "a18q32",
    text: "An odds ratio of 1.8 has a 95% confidence interval of 0.9 to 3.6. This means",
    options: ["The association is statistically significant at the 5% level", "The association is not statistically significant at the 5% level, because the interval includes 1", "The exposure is protective", "The study design is wrong"],
    correctAnswer: 1,
    explanation: "An odds ratio of 1 means no association. Because the 95% CI includes 1, the result is not statistically significant at the 5% level."
  },
  {
    id: "a18q33",
    text: "A p-value of 0.03 means that there is a 3% probability that the null hypothesis is true.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. The p-value is the probability of getting results at least as extreme as those observed if the null hypothesis were true. It is not the probability that the null hypothesis is true."
  },
  {
    id: "a18q34",
    text: "The chi-square test is appropriate to test the association between two categorical variables, such as smoking (yes/no) and lung cancer (yes/no).",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. The chi-square test compares observed and expected frequencies in a contingency table of two categorical variables."
  },
  {
    id: "a18q35",
    text: "Which test is appropriate to compare the mean haemoglobin of two independent groups when the data are normally distributed?",
    options: ["Chi-square test", "Paired t-test", "Mantel-Haenszel test", "Independent (unpaired) t-test"],
    correctAnswer: 3,
    explanation: "Means of a normally distributed continuous variable in two independent groups are compared with the unpaired t-test. The paired t-test is for matched or before-after measurements."
  },
  {
    id: "a18q36",
    text: "In a case-control study, the odds ratio for the association between vaccination and disease is 0.4. This indicates",
    options: ["No association", "Vaccination is associated with higher odds of disease", "Vaccination is associated with lower odds of disease (a protective association)", "Confounding is definitely present"],
    correctAnswer: 2,
    explanation: "An odds ratio below 1 means the exposure is less common among cases, suggesting a protective association. Confounding cannot be judged from the crude OR alone."
  },
  {
    id: "a18q37",
    text: "In a cohort study, the incidence of disease is 30 per 1000 among the exposed and 10 per 1000 among the unexposed. What is the attributable risk (risk difference)?",
    options: ["3", "20 per 1000", "40 per 1000", "0.33"],
    correctAnswer: 1,
    explanation: "Attributable risk = incidence in exposed minus incidence in unexposed = 30 - 10 = 20 per 1000. The value 3 is the relative risk."
  },
  {
    id: "a18q38",
    text: "A type I error is the error of rejecting a null hypothesis that is actually true.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. A type I error is a false positive, and its probability is the significance level (alpha). A type II error is failing to reject a false null hypothesis."
  },
  {
    id: "a18q39",
    text: "In a case-control study of 50 cases and 100 controls, 30 cases and 25 controls were exposed. Calculate the measure of association.",
    options: ["Odds ratio 1.2", "Relative risk 4.5", "Odds ratio 2.4", "Odds ratio 4.5"],
    correctAnswer: 3,
    explanation: "The cells are a=30, b=25, c=20 and d=75. OR = (30 x 75)/(25 x 20) = 2250/500 = 4.5. Relative risk cannot be calculated in a case-control study."
  },
  {
    id: "a18q40",
    text: "In an analytical cross-sectional study, 40 of 200 smokers and 20 of 400 non-smokers had chronic cough. Calculate the prevalence ratio.",
    options: ["2", "4", "4.75", "0.25"],
    correctAnswer: 1,
    explanation: "Prevalence in smokers is 40/200 = 0.20 and in non-smokers 20/400 = 0.05, so the prevalence ratio is 0.20/0.05 = 4. The value 4.75 is the prevalence odds ratio."
  },
  {
    id: "a18q41",
    text: "Which graph is most appropriate to display the distribution of a continuous variable such as age?",
    options: ["Histogram", "Pie chart", "Simple bar chart", "Line graph of a time trend"],
    correctAnswer: 0,
    explanation: "A histogram shows the frequency distribution of a continuous variable using adjoining bars over class intervals. Pie and bar charts are for categorical data."
  },
  {
    id: "a18q42",
    text: "Association between cervical cancer and use of Intra uterine contraceptive device is analysed separately among persons with multiple sexual partners and persons with single sexual partner. This analysis is an example of _______________.",
    options: ["Multivariable adjusted analysis", "Stratified analysis", "Regression analysis", "Dose-response analysis"],
    correctAnswer: 1,
    explanation: "Analyzing the association separately within subgroups of a third variable (number of sexual partners) is stratified analysis. It is used to assess confounding or effect modification."
  },
  {
    id: "a18q43",
    text: "The first important step to be done before data analysis is to______________.",
    options: [
      "Identify main variables",
      "Become familiar with the data",
      "Identify the study design",
      "Examine the outcome/exposure analysis"
    ],
    correctAnswer: 2,
    explanation: "The study design determines the measures of association and the analysis methods, so identifying it is the first step before any data analysis."
  },
  {
    id: "a18q44",
    text: "Logistic regression is used when the outcome variable is",
    options: ["Continuous, such as blood pressure", "A count of hospital beds", "Binary, such as disease present or absent", "The study design"],
    correctAnswer: 2,
    explanation: "Logistic regression models a binary outcome and gives adjusted odds ratios. Continuous outcomes are usually modelled with linear regression."
  },
  {
    id: "a18q45",
    text: "Finding that the odds ratio for lung cancer rises steadily with the number of cigarettes smoked per day supports a causal association through",
    options: ["Temporality", "Specificity", "Analogy", "Biological gradient (dose-response)"],
    correctAnswer: 3,
    explanation: "Increasing risk with increasing dose is the biological gradient criterion of Bradford Hill, which strengthens the case for causation."
  },
  {
    id: "a18q46",
    text: "Arrange the data analysis strategy steps in the correct order: i. Characterize the study population, ii. Conduct stratified analysis, iii. Identify the main variables, iv. Create two-way tables of exposure and outcome, v. Identify the study design.",
    options: ["i, v, iii, iv, ii", "v, iii, i, iv, ii", "v, i, iii, ii, iv", "iii, v, i, ii, iv"],
    correctAnswer: 1,
    explanation: "Identify the design (v), then the main variables (iii), characterize the population (i), build two-way tables for crude associations (iv), and then do stratified analysis (ii): v, iii, i, iv, ii."
  },
  {
    id: "a18q47",
    text: "The following are true about data analysis EXCEPT",
    options: [
      "Data analysis plan should be prepared in advance",
      "Post hoc analysis which was not part of the original plan should be avoided",
      "Recoding of data is done following descriptive and analytical data analysis",
      "Multivariable analysis is done to adjust for potential confounders"
    ],
    correctAnswer: 2,
    explanation: "This statement is false because recoding is a preparatory step done before descriptive and analytical analysis, not after. The other statements are correct."
  },
  {
    id: "a18q48",
    text: "Which of the following measures describes the spread of data around the mean?",
    options: ["Median", "Mode", "Standard deviation", "Odds ratio"],
    correctAnswer: 2,
    explanation: "The standard deviation measures how widely values are dispersed around the mean. Median and mode are measures of central tendency."
  },
  {
    id: "a18q49",
    text: "Univariate (crude) analysis examines the association between the outcome and one exposure at a time, without adjusting for other variables.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Crude analysis looks at one exposure at a time. Adjustment for other variables comes later, in stratified and multivariable analysis."
  },
  {
    id: "a18q50",
    text: "In a cohort study to examine the association between use of Oral contraceptive pills (OCP) and development of breast cancer, 35 out of 8,000 women who used OCP and 33 out of the 22,000 women who did not use OCP had developed breast cancer over 10 years of follow-up. Calculate the measure of association.",
    options: ["1.3", "1.5", "1.8", "2.9"],
    correctAnswer: 3,
    explanation: "In a cohort study, $RR = (35/8000)/(33/22000) = 0.004375/0.0015 \\approx 2.9$."
  }
];