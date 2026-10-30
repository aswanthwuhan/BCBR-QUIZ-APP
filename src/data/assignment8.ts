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
    text: "Which study design is often used for outbreak investigations?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 1,
    explanation: "In outbreaks, cases already exist and speed matters, so comparing ill and well people for exposures (a case-control approach) quickly identifies the likely source."
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
    text: "Which study design starts with people who already have the disease?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Randomized Controlled Trial"],
    correctAnswer: 1,
    explanation: "A case-control study selects participants by outcome: people who already have the disease (cases) are compared with people without it (controls) for past exposures."
  },
  {
    id: "a8q27",
    text: "Which study design starts with people who are exposed to a risk factor but do not yet have the disease?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Randomized Controlled Trial"],
    correctAnswer: 0,
    explanation: "A cohort study starts with disease-free people grouped by exposure status and follows them over time to see who develops the disease."
  },
  {
    id: "a8q28",
    text: "The measure of association used in a case-control study is",
    options: ["Relative Risk (RR)", "Odds Ratio (OR)", "Attributable Risk", "Incidence Rate"],
    correctAnswer: 1,
    explanation: "Case-control studies fix the numbers of cases and controls, so incidence and risk cannot be calculated; the odds ratio ($ad/bc$) is used instead."
  },
  {
    id: "a8q29",
    text: "The measure of association used in a cohort study is",
    options: ["Relative Risk (RR)", "Odds Ratio (OR)", "Prevalence", "Sensitivity"],
    correctAnswer: 0,
    explanation: "Cohort studies measure incidence in exposed and unexposed groups, so the relative risk (incidence in exposed divided by incidence in unexposed) can be calculated directly."
  },
  {
    id: "a8q30",
    text: "Which study design is best for studying rare diseases?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 1,
    explanation: "Case-control studies start with the few existing cases, making them efficient for rare diseases, whereas a cohort would need huge numbers and long follow-up."
  },
  {
    id: "a8q31",
    text: "Which study design is best for studying rare exposures?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 0,
    explanation: "Cohort studies select people based on exposure, so a rare exposure group (e.g., specific occupational workers) can be deliberately assembled and followed."
  },
  {
    id: "a8q32",
    text: "A prospective cohort study follows participants",
    options: ["Backward in time", "Forward in time", "At a single point in time", "Only if they are sick"],
    correctAnswer: 1,
    explanation: "A prospective cohort measures exposure now and follows participants forward into the future to record new outcomes."
  },
  {
    id: "a8q33",
    text: "A retrospective cohort study looks at data",
    options: ["Collected in the past", "To be collected in the future", "From a single day", "From a different country"],
    correctAnswer: 0,
    explanation: "A retrospective (historical) cohort uses records collected in the past to define exposure and trace outcomes up to the present, still moving from exposure to outcome."
  },
  {
    id: "a8q34",
    text: "Recall bias is a major problem in",
    options: ["Cohort studies", "Case-control studies", "Randomized Controlled Trials", "Ecological studies"],
    correctAnswer: 1,
    explanation: "In case-control studies exposure is recalled after disease occurs, and cases tend to remember past exposures differently (often more thoroughly) than controls, causing recall bias."
  },
  {
    id: "a8q35",
    text: "Loss to follow-up is a major problem in",
    options: ["Cohort studies", "Case-control studies", "Cross-sectional studies", "Ecological studies"],
    correctAnswer: 0,
    explanation: "Cohort studies follow participants over long periods, so some drop out, move, or die; this loss to follow-up can bias results. Other designs have no follow-up."
  },
  {
    id: "a8q36",
    text: "Which study design can calculate incidence directly?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 0,
    explanation: "Only a cohort study starts with disease-free people and counts new cases over time, allowing incidence to be calculated directly."
  },
  {
    id: "a8q37",
    text: "Which study design is generally more expensive and time-consuming?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 0,
    explanation: "Cohort studies need large samples and long follow-up, often years, making them more expensive and time-consuming than case-control or cross-sectional studies."
  },
  {
    id: "a8q38",
    text: "In a case-control study, 'controls' should be",
    options: ["People with a different disease", "People from the same population as cases but without the disease", "Healthy volunteers only", "Family members of cases"],
    correctAnswer: 1,
    explanation: "Controls should come from the same source population that produced the cases but be free of the disease, so they reflect the population's exposure distribution."
  },
  {
    id: "a8q39",
    text: "Nested case-control studies are conducted within",
    options: ["A hospital", "A cohort study", "A cross-sectional survey", "A community trial"],
    correctAnswer: 1,
    explanation: "A nested case-control study uses cases arising within an existing cohort and compares them with sampled non-cases from the same cohort, using stored baseline data."
  },
  {
    id: "a8q40",
    text: "Selection bias is a common concern in",
    options: ["Cohort studies", "Case-control studies", "Both 'a' and 'b'", "None of the above"],
    correctAnswer: 2,
    explanation: "Selection bias can affect both designs: control selection and non-response in case-control studies, and loss to follow-up or healthy worker effect in cohort studies."
  },
  {
    id: "a8q41",
    text: "Which study design is better for establishing temporality (exposure came before outcome)?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 0,
    explanation: "In a cohort study exposure is measured before disease develops, so it clearly shows that exposure preceded the outcome (temporality)."
  },
  {
    id: "a8q42",
    text: "An Odds Ratio of 1.0 means",
    options: ["The exposure is a risk factor", "The exposure is protective", "There is no association between exposure and disease", "The study is invalid"],
    correctAnswer: 2,
    explanation: "An odds ratio of 1 means the odds of exposure are equal in cases and controls, indicating no association. OR > 1 suggests risk; OR < 1 suggests protection."
  },
  {
    id: "a8q43",
    text: "A Relative Risk of 2.0 means",
    options: ["The exposed group has twice the risk of the unexposed group", "The exposed group has half the risk", "There is no difference", "The disease is rare"],
    correctAnswer: 0,
    explanation: "Relative risk is incidence in exposed divided by incidence in unexposed; RR = 2 means the exposed group has twice the risk of developing disease."
  },
  {
    id: "a8q44",
    text: "Which study design is often used for outbreak investigations?",
    options: ["Cohort study", "Case-control study", "Cross-sectional study", "Ecological study"],
    correctAnswer: 1,
    explanation: "In outbreaks, cases already exist and speed matters, so comparing ill and well people for exposures (a case-control approach) quickly identifies the likely source."
  },
  {
    id: "a8q45",
    text: "The 'healthy worker effect' is a type of",
    options: ["Selection bias", "Information bias", "Confounding", "Random error"],
    correctAnswer: 0,
    explanation: "The healthy worker effect is selection bias: employed people are healthier than the general population, so comparisons with the general population underestimate occupational risk."
  },
  {
    id: "a8q46",
    text: "Cohort studies can be used to study multiple outcomes for a single exposure.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. A cohort starts with one exposure and follows people over time, so many different outcomes can be recorded (e.g., smoking and lung cancer, heart disease, COPD)."
  },
  {
    id: "a8q47",
    text: "Case-control studies can be used to study multiple exposures for a single outcome.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. A case-control study starts with one outcome and can ask cases and controls about many different past exposures."
  },
  {
    id: "a8q48",
    text: "Relative Risk can be calculated in a case-control study if the disease is very common.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Case-control studies cannot calculate relative risk because incidence is unknown; the odds ratio approximates relative risk only when the disease is rare."
  },
  {
    id: "a8q49",
    text: "Matching is a technique used to control for confounding in case-control studies.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Matching selects controls similar to cases on potential confounders such as age and sex, controlling confounding at the design stage."
  },
  {
    id: "a8q50",
    text: "A retrospective cohort study is the same as a case-control study.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. A retrospective cohort starts from past exposure and looks forward to outcomes, whereas a case-control study starts from outcome and looks back for exposure."
  }
];
