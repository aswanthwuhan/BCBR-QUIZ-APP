import { Question } from '../types';

export const ASSIGNMENT_8_QUESTIONS: Question[] = [
  {
    id: "a8q1",
    text: "Which study design starts with people who already have the disease?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Randomized Controlled Trial"],
    correctAnswer: 1,
    explanation: "A case-control study selects participants by outcome: people who already have the disease (cases) are compared with people without it (controls) for past exposures."
  },
  {
    id: "a8q2",
    text: "Which study design starts with people who are exposed to a risk factor but do not yet have the disease?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Randomized Controlled Trial"],
    correctAnswer: 0,
    explanation: "A cohort study starts with disease-free people grouped by exposure status and follows them over time to see who develops the disease."
  },
  {
    id: "a8q3",
    text: "The measure of association used in a case-control study is",
    options: ["Relative Risk (RR)", "Odds Ratio (OR)", "Attributable Risk", "Incidence Rate"],
    correctAnswer: 1,
    explanation: "Case-control studies fix the numbers of cases and controls, so incidence and risk cannot be calculated; the odds ratio ($ad/bc$) is used instead."
  },
  {
    id: "a8q4",
    text: "The measure of association used in a cohort study is",
    options: ["Relative Risk (RR)", "Odds Ratio (OR)", "Prevalence", "Sensitivity"],
    correctAnswer: 0,
    explanation: "Cohort studies measure incidence in exposed and unexposed groups, so the relative risk (incidence in exposed divided by incidence in unexposed) can be calculated directly."
  },
  {
    id: "a8q5",
    text: "Which study design is best for studying rare diseases?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 1,
    explanation: "Case-control studies start with the few existing cases, making them efficient for rare diseases, whereas a cohort would need huge numbers and long follow-up."
  },
  {
    id: "a8q6",
    text: "Which study design is best for studying rare exposures?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 0,
    explanation: "Cohort studies select people based on exposure, so a rare exposure group (e.g., specific occupational workers) can be deliberately assembled and followed."
  },
  {
    id: "a8q7",
    text: "A prospective cohort study follows participants",
    options: ["Backward in time", "Forward in time", "At a single point in time", "Only if they are sick"],
    correctAnswer: 1,
    explanation: "A prospective cohort measures exposure now and follows participants forward into the future to record new outcomes."
  },
  {
    id: "a8q8",
    text: "A retrospective cohort study looks at data",
    options: ["Collected in the past", "To be collected in the future", "From a single day", "From a different country"],
    correctAnswer: 0,
    explanation: "A retrospective (historical) cohort uses records collected in the past to define exposure and trace outcomes up to the present, still moving from exposure to outcome."
  },
  {
    id: "a8q9",
    text: "Recall bias is a major problem in",
    options: ["Cohort studies", "Case-control studies", "Randomized Controlled Trials", "Ecological studies"],
    correctAnswer: 1,
    explanation: "In case-control studies exposure is recalled after disease occurs, and cases tend to remember past exposures differently (often more thoroughly) than controls, causing recall bias."
  },
  {
    id: "a8q10",
    text: "Loss to follow-up is a major problem in",
    options: ["Cohort studies", "Case-control studies", "Cross-sectional studies", "Ecological studies"],
    correctAnswer: 0,
    explanation: "Cohort studies follow participants over long periods, so some drop out, move, or die; this loss to follow-up can bias results. Other designs have no follow-up."
  },
  {
    id: "a8q11",
    text: "Which study design can calculate incidence directly?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 0,
    explanation: "Only a cohort study starts with disease-free people and counts new cases over time, allowing incidence to be calculated directly."
  },
  {
    id: "a8q12",
    text: "Which study design is generally more expensive and time-consuming?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 0,
    explanation: "Cohort studies need large samples and long follow-up, often years, making them more expensive and time-consuming than case-control or cross-sectional studies."
  },
  {
    id: "a8q13",
    text: "In a case-control study, 'controls' should be",
    options: ["People with a different disease", "People from the same population as cases but without the disease", "Healthy volunteers only", "Family members of cases"],
    correctAnswer: 1,
    explanation: "Controls should come from the same source population that produced the cases but be free of the disease, so they reflect the population's exposure distribution."
  },
  {
    id: "a8q14",
    text: "Nested case-control studies are conducted within",
    options: ["A hospital", "A cohort study", "A cross-sectional survey", "A community trial"],
    correctAnswer: 1,
    explanation: "A nested case-control study uses cases arising within an existing cohort and compares them with sampled non-cases from the same cohort, using stored baseline data."
  },
  {
    id: "a8q15",
    text: "Selection bias is a common concern in",
    options: ["Cohort studies", "Case-control studies", "Both 'a' and 'b'", "None of the above"],
    correctAnswer: 2,
    explanation: "Selection bias can affect both designs: control selection and non-response in case-control studies, and loss to follow-up or healthy worker effect in cohort studies."
  },
  {
    id: "a8q16",
    text: "Which study design is better for establishing temporality (exposure came before outcome)?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 0,
    explanation: "In a cohort study exposure is measured before disease develops, so it clearly shows that exposure preceded the outcome (temporality)."
  },
  {
    id: "a8q17",
    text: "An Odds Ratio of 1.0 means",
    options: ["The exposure is a risk factor", "The exposure is protective", "There is no association between exposure and disease", "The study is invalid"],
    correctAnswer: 2,
    explanation: "An odds ratio of 1 means the odds of exposure are equal in cases and controls, indicating no association. OR > 1 suggests risk; OR < 1 suggests protection."
  },
  {
    id: "a8q18",
    text: "A Relative Risk of 2.0 means",
    options: ["The exposed group has twice the risk of the unexposed group", "The exposed group has half the risk", "There is no difference", "The disease is rare"],
    correctAnswer: 0,
    explanation: "Relative risk is incidence in exposed divided by incidence in unexposed; RR = 2 means the exposed group has twice the risk of developing disease."
  },
  {
    id: "a8q19",
    text: "Which study design is often used to rapidly identify the source of an outbreak when the population at risk is not well defined?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 1,
    explanation: "When the population at risk cannot be fully enumerated, ill people (cases) are compared with well people (controls) for exposures, a fast case-control approach. For a closed, well-defined group (e.g., a single meal), a retrospective cohort is preferred."
  },
  {
    id: "a8q20",
    text: "The 'healthy worker effect' is a type of",
    options: ["Selection bias", "Information bias", "Confounding", "Random error"],
    correctAnswer: 0,
    explanation: "The healthy worker effect is selection bias: employed people are healthier than the general population, so comparisons with the general population underestimate occupational risk."
  },
  {
    id: "a8q21",
    text: "Cohort studies can be used to study multiple outcomes for a single exposure.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. A cohort starts with one exposure and follows people over time, so many different outcomes can be recorded (e.g., smoking and lung cancer, heart disease, COPD)."
  },
  {
    id: "a8q22",
    text: "Case-control studies can be used to study multiple exposures for a single outcome.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. A case-control study starts with one outcome and can ask cases and controls about many different past exposures."
  },
  {
    id: "a8q23",
    text: "Relative Risk can be calculated in a case-control study if the disease is very common.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Case-control studies cannot calculate relative risk because incidence is unknown; the odds ratio approximates relative risk only when the disease is rare."
  },
  {
    id: "a8q24",
    text: "Matching is a technique used to control for confounding in case-control studies.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Matching selects controls similar to cases on potential confounders such as age and sex, controlling confounding at the design stage."
  },
  {
    id: "a8q25",
    text: "A retrospective cohort study is the same as a case-control study.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. A retrospective cohort starts from past exposure and looks forward to outcomes, whereas a case-control study starts from outcome and looks back for exposure."
  },
  {
    id: "a8q26",
    text: "Which of the following is NOT a criterion for a variable to act as a confounder?",
    options: ["It is associated with the exposure", "It is an independent risk factor for the outcome", "It lies on the causal pathway between exposure and outcome", "It is unequally distributed between the comparison groups"],
    correctAnswer: 2,
    explanation: "A confounder is associated with the exposure and independently with the outcome, but it must not be an intermediate step on the causal pathway; a variable on the pathway is a mediator."
  },
  {
    id: "a8q27",
    text: "The extent to which the findings of a study can be generalized to other populations is called",
    options: ["Internal validity", "External validity", "Reliability", "Precision"],
    correctAnswer: 1,
    explanation: "External validity (generalizability) concerns whether results apply beyond the study sample; internal validity concerns whether the result is correct for the people studied."
  },
  {
    id: "a8q28",
    text: "Randomization in a large clinical trial helps to control",
    options: ["Only the confounders that were measured", "Both known and unknown confounders", "Recall bias", "Errors in measuring the outcome"],
    correctAnswer: 1,
    explanation: "With adequate sample size, random allocation distributes both known and unknown confounders evenly between groups, which no other method can do for unmeasured factors."
  },
  {
    id: "a8q29",
    text: "An interviewer who probes cases more intensively than controls about past exposures introduces",
    options: ["Selection bias", "Information (measurement) bias", "Confounding", "Random error"],
    correctAnswer: 1,
    explanation: "Interviewer bias is a form of information bias: exposure data are collected differently in the comparison groups, distorting the measured association."
  },
  {
    id: "a8q30",
    text: "Increasing the sample size of a study mainly reduces",
    options: ["Systematic error", "Confounding", "Random error", "Selection bias"],
    correctAnswer: 2,
    explanation: "A larger sample improves precision by reducing random (sampling) error, but it does not remove systematic errors such as bias or confounding."
  },
  {
    id: "a8q31",
    text: "Which of the following controls confounding at the analysis stage?",
    options: ["Restriction", "Matching", "Randomization", "Stratified analysis with a Mantel-Haenszel pooled estimate"],
    correctAnswer: 3,
    explanation: "Stratification (with Mantel-Haenszel pooling) and multivariable regression handle confounding during analysis; restriction, matching and randomization are design-stage methods."
  },
  {
    id: "a8q32",
    text: "In a hospital-based case-control study, bias arising because people with two conditions are more likely to be admitted than people with one is known as",
    options: ["Berkson's bias", "Recall bias", "Lead-time bias", "Hawthorne effect"],
    correctAnswer: 0,
    explanation: "Berkson's bias is a selection bias in hospital-based studies: different admission rates for combinations of conditions create a spurious association among hospitalized patients."
  },
  {
    id: "a8q33",
    text: "Non-differential misclassification of a binary exposure usually biases the measure of association",
    options: ["Away from the null", "Towards the null", "Not at all", "Always reversing its direction"],
    correctAnswer: 1,
    explanation: "When misclassification occurs equally in the groups being compared, the groups look more alike, so the estimate is typically diluted towards no association (OR or RR = 1)."
  },
  {
    id: "a8q34",
    text: "Enrolling only non-smokers in a study to eliminate confounding by smoking is an example of",
    options: ["Matching", "Stratification", "Randomization", "Restriction"],
    correctAnswer: 3,
    explanation: "Restriction limits participants to one level of the confounder, so it cannot vary and cannot confound; the trade-off is reduced generalizability."
  },
  {
    id: "a8q35",
    text: "Screening appears to improve survival only because the disease is diagnosed earlier, while the time of death is unchanged. This is",
    options: ["Length-time bias", "Volunteer bias", "Lead-time bias", "Observer bias"],
    correctAnswer: 2,
    explanation: "Lead-time bias: earlier detection adds time between diagnosis and death without delaying death, so survival from diagnosis looks longer."
  },
  {
    id: "a8q36",
    text: "Participants change their behaviour simply because they know they are being studied. This is called the",
    options: ["Placebo effect", "Hawthorne effect", "Healthy worker effect", "Berkson's bias"],
    correctAnswer: 1,
    explanation: "The Hawthorne effect is a change in behaviour caused by awareness of being observed, which can distort the outcomes measured."
  },
  {
    id: "a8q37",
    text: "Blinding the outcome assessors to the participants' exposure or treatment status mainly reduces",
    options: ["Selection bias", "Confounding by indication", "Random error", "Observer (ascertainment) bias"],
    correctAnswer: 3,
    explanation: "Assessors who know group allocation may judge outcomes differently; blinding them prevents this observer or ascertainment bias, a type of information bias."
  },
  {
    id: "a8q38",
    text: "In a study, the crude OR for an exposure is 2.5, but after adjusting for age the OR becomes 1.0. This suggests that",
    options: ["Recall bias is present", "Age is an effect modifier", "Age confounded the crude association", "The study has high external validity"],
    correctAnswer: 2,
    explanation: "A large change between crude and adjusted estimates indicates confounding; here the apparent association was explained by differences in age between groups."
  },
  {
    id: "a8q39",
    text: "The odds ratio for an exposure is 4.0 among men and 1.0 among women. This is an example of",
    options: ["Confounding", "Selection bias", "Misclassification", "Effect modification (interaction)"],
    correctAnswer: 3,
    explanation: "When the strength of association genuinely differs across levels of a third variable, that variable is an effect modifier; stratum-specific results should be reported rather than pooled."
  },
  {
    id: "a8q40",
    text: "The reliability of a measurement refers to its",
    options: ["Closeness to the true value", "Consistency when the measurement is repeated", "Generalizability to other populations", "Freedom from confounding"],
    correctAnswer: 1,
    explanation: "Reliability (repeatability) is consistency of results on repeated measurement; validity (accuracy) is closeness to the true value. A measure can be reliable without being valid."
  },
  {
    id: "a8q41",
    text: "A narrow 95% confidence interval around an estimate mainly indicates",
    options: ["Absence of bias", "Absence of confounding", "High precision", "High external validity"],
    correctAnswer: 2,
    explanation: "Confidence interval width reflects random error; a narrow interval means a precise estimate, but a precise estimate can still be biased or confounded."
  },
  {
    id: "a8q42",
    text: "Studies with statistically significant 'positive' results are more likely to be published than those with null results. This is called",
    options: ["Recall bias", "Publication bias", "Detection bias", "Healthy worker effect"],
    correctAnswer: 1,
    explanation: "Publication bias distorts the available literature and systematic reviews, because null or negative studies are under-represented."
  },
  {
    id: "a8q43",
    text: "In an observational study, sicker patients are more likely to be prescribed a drug, so the drug appears to cause poor outcomes. This is",
    options: ["Recall bias", "Lead-time bias", "Hawthorne effect", "Confounding by indication"],
    correctAnswer: 3,
    explanation: "Confounding by indication occurs when the reason for receiving a treatment (disease severity) is itself related to the outcome."
  },
  {
    id: "a8q44",
    text: "People who volunteer for a health check-up programme are usually healthier than those who do not. Comparing volunteers with non-volunteers introduces",
    options: ["Interviewer bias", "Misclassification bias", "Volunteer (self-selection) bias", "Effect modification"],
    correctAnswer: 2,
    explanation: "Self-selection bias is a selection bias: people who choose to participate differ systematically (e.g., in health awareness) from those who do not."
  },
  {
    id: "a8q45",
    text: "When the error in classifying exposure differs between cases and controls, it is called",
    options: ["Non-differential misclassification", "Differential misclassification", "Random sampling error", "Effect modification"],
    correctAnswer: 1,
    explanation: "Differential misclassification (e.g., due to recall bias) depends on outcome status and can bias the estimate either towards or away from the null."
  },
  {
    id: "a8q46",
    text: "Bias in a study can be removed by increasing the sample size.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Bias is a systematic error and persists regardless of sample size; a larger sample only reduces random error."
  },
  {
    id: "a8q47",
    text: "Confounding can be controlled at the analysis stage using multivariable regression.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Multivariable models such as logistic regression adjust for several measured confounders at once, provided they were recorded accurately."
  },
  {
    id: "a8q48",
    text: "A study can have high internal validity but limited external validity.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. A well-controlled trial in a narrowly selected population may give an unbiased result for that group that does not generalize to other populations."
  },
  {
    id: "a8q49",
    text: "Effect modification is a type of bias that the investigator should try to eliminate.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Effect modification is a real biological or social phenomenon to be described and reported, unlike confounding or bias, which should be removed."
  },
  {
    id: "a8q50",
    text: "Using standardized, validated data collection tools helps reduce information bias.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Standardized questionnaires, calibrated instruments and trained data collectors measure exposures and outcomes uniformly, reducing measurement (information) bias."
  }
];
