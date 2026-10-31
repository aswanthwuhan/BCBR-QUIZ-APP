import { Question } from '../types';

export const ASSIGNMENT_11_QUESTIONS: Question[] = [
  {
    id: "a11q1",
    text: "Bias is a __________ error in a study.",
    options: ["Random", "Systematic", "Sampling", "Non-sampling"],
    correctAnswer: 1,
    explanation: "Bias is a systematic error: a consistent deviation from the truth in one direction caused by flaws in design, conduct or analysis. Unlike random error, it is not reduced by increasing the sample size."
  },
  {
    id: "a11q2",
    text: "Selection bias occurs when",
    options: [
      "The study population is not representative of the target population",
      "The information collected is incorrect",
      "The sample size is too small",
      "The data analysis is wrong"
    ],
    correctAnswer: 0,
    explanation: "Selection bias arises when the way participants are selected or retained makes the study population unrepresentative of the target population, which distorts the observed association."
  },
  {
    id: "a11q3",
    text: "Information bias occurs when",
    options: [
      "There are errors in measurement or classification of exposure or outcome",
      "The study population is selected incorrectly",
      "The sample size is too small",
      "The data analysis is wrong"
    ],
    correctAnswer: 0,
    explanation: "Information bias results from errors in measuring or classifying exposure or outcome, which leads to misclassification. Recall, interviewer and observer bias are examples."
  },
  {
    id: "a11q4",
    text: "Recall bias is a type of",
    options: ["Selection bias", "Information bias", "Confounding", "Random error"],
    correctAnswer: 1,
    explanation: "Recall bias occurs when cases and controls remember past exposures with different accuracy. This is an error in the information collected, so it is a type of information bias."
  },
  {
    id: "a11q5",
    text: "Interviewer bias is a type of",
    options: ["Selection bias", "Information bias", "Confounding", "Random error"],
    correctAnswer: 1,
    explanation: "Interviewer bias occurs when an interviewer questions or records answers differently depending on the participant's status. This distorts the data collected, making it a type of information bias."
  },
  {
    id: "a11q6",
    text: "The 'healthy worker effect' is a type of",
    options: ["Selection bias", "Information bias", "Confounding", "Random error"],
    correctAnswer: 0,
    explanation: "The healthy worker effect is selection bias: employed people are healthier than the general population, so comparisons with the general population underestimate occupational risk."
  },
  {
    id: "a11q7",
    text: "Berkson's bias is a type of",
    options: ["Selection bias", "Information bias", "Confounding", "Random error"],
    correctAnswer: 0,
    explanation: "Berkson's bias arises in hospital-based case-control studies because admission rates differ by exposure and disease. This makes hospital patients unrepresentative, so it is a selection bias."
  },
  {
    id: "a11q8",
    text: "Non-response bias occurs when",
    options: [
      "People who refuse to participate are different from those who do",
      "The interviewer asks leading questions",
      "The participants forget their past exposures",
      "The measurement tool is not calibrated"
    ],
    correctAnswer: 0,
    explanation: "Non-response bias occurs when people who decline to participate differ systematically from those who take part. The sample then misrepresents the target population, so it is a form of selection bias."
  },
  {
    id: "a11q9",
    text: "Misclassification bias is a type of",
    options: ["Selection bias", "Information bias", "Confounding", "Random error"],
    correctAnswer: 1,
    explanation: "Misclassification bias means participants are wrongly categorized by exposure or outcome status because of measurement or reporting errors, which makes it an information bias."
  },
  {
    id: "a11q10",
    text: "Differential misclassification means",
    options: [
      "The error in classification is different for cases and controls",
      "The error in classification is the same for cases and controls",
      "The error is due to chance",
      "The error is due to confounding"
    ],
    correctAnswer: 0,
    explanation: "Differential misclassification means classification errors happen at different rates in cases and controls (or in exposed and unexposed). It can bias results either toward or away from the null."
  },
  {
    id: "a11q11",
    text: "Non-differential misclassification usually",
    options: [
      "Biases the results towards the null",
      "Biases the results away from the null",
      "Has no effect on the results",
      "Makes the results more significant"
    ],
    correctAnswer: 0,
    explanation: "When misclassification is equal in all groups, the groups look more alike than they really are. This dilutes the association and usually pushes the effect estimate toward the null (OR/RR toward 1)."
  },
  {
    id: "a11q12",
    text: "Blinding can help reduce",
    options: ["Selection bias", "Information bias", "Confounding", "Sampling error"],
    correctAnswer: 1,
    explanation: "Blinding stops participants, interviewers and assessors from knowing group status, which prevents differences in how outcomes are measured or reported. It therefore reduces information bias."
  },
  {
    id: "a11q13",
    text: "Bias can be completely eliminated by increasing the sample size.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. A larger sample size reduces only random error and improves precision. Bias is a systematic error that has to be prevented through good study design and conduct."
  },
  {
    id: "a11q14",
    text: "Bias can lead to incorrect conclusions about the association between exposure and outcome.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Bias systematically distorts estimates. It can create spurious associations, hide real ones, exaggerate or understate their strength, or even reverse their direction, which leads to wrong conclusions."
  },
  {
    id: "a11q15",
    text: "Selection bias is more common in case-control studies than in cohort studies.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Case-control studies select participants after the outcome has occurred, so selection can be related to exposure (for example, Berkson's bias). Cohort studies select by exposure before the outcome, which reduces this risk."
  },
  {
    id: "a11q16",
    text: "Loss to follow-up can lead to selection bias in cohort studies.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. If participants lost to follow-up differ from those who remain in both exposure and outcome, the people left in the analysis are a biased selection. This is the main selection bias in cohort studies."
  },
  {
    id: "a11q17",
    text: "A well-designed study should aim to minimize all types of bias.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Bias cannot be corrected by increasing the sample size and is often impossible to fix during analysis. Good study design should therefore minimize selection and information bias and control confounding."
  },
  {
    id: "a11q18",
    text: "Standardizing the data collection process can help reduce information bias.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Using the same protocols, validated tools, calibrated instruments and trained staff for everyone means exposure and outcome are measured uniformly across groups. This reduces information bias."
  },
  {
    id: "a11q19",
    text: "Using objective measures (like lab tests) instead of subjective measures (like self-reports) can help reduce information bias.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Self-reports are prone to recall, reporting and social desirability bias. Objective measures such as lab tests are less influenced by participants' memory or perceptions, so they reduce information bias."
  },
  {
    id: "a11q20",
    text: "Bias is the same as confounding.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Bias is a systematic error introduced through study design or conduct. Confounding is the mixing of effects by a third variable that is associated with both exposure and outcome, and it can be controlled in the design or the analysis."
  },
  {
    id: "a11q21",
    text: "Which of the following is a type of information bias?",
    options: ["Volunteer bias", "Recall bias", "Loss to follow-up", "Berkson's bias"],
    correctAnswer: 1,
    explanation: "Recall bias is an error in the information reported (differences in memory of exposures). Volunteer bias, loss to follow-up and Berkson's bias are all selection biases."
  },
  {
    id: "a11q22",
    text: "Which of the following is a type of selection bias?",
    options: ["Interviewer bias", "Recall bias", "Non-response bias", "Misclassification bias"],
    correctAnswer: 2,
    explanation: "Non-response bias affects who ends up in the sample, so it is a selection bias. Interviewer, recall and misclassification bias are errors in the data collected, which makes them information biases."
  },
  {
    id: "a11q23",
    text: "Bias can occur at any stage of a research study.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Bias can enter at any stage of research: planning, sampling, data collection, analysis, interpretation and publication (for example, publication bias)."
  },
  {
    id: "a11q24",
    text: "Internal validity of a study is affected by bias.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Internal validity is how accurately the results reflect the truth in the study population. Bias (along with confounding and chance) directly threatens it."
  },
  {
    id: "a11q25",
    text: "External validity (generalizability) is affected by selection bias.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. If the sample does not represent the target population, findings may not generalize to it, which reduces external validity. Selection bias can also affect internal validity."
  },
  {
    id: "a11q26",
    text: "Bias is a __________ error in a study.",
    options: ["Random", "Systematic", "Sampling", "Non-sampling"],
    correctAnswer: 1,
    explanation: "Bias is a systematic error: a consistent deviation from the truth in one direction caused by flaws in design, conduct or analysis. Unlike random error, it is not reduced by increasing the sample size."
  },
  {
    id: "a11q27",
    text: "Selection bias occurs when",
    options: [
      "The study population is not representative of the target population",
      "The information collected is incorrect",
      "The sample size is too small",
      "The data analysis is wrong"
    ],
    correctAnswer: 0,
    explanation: "Selection bias arises when the way participants are selected or retained makes the study population unrepresentative of the target population, which distorts the observed association."
  },
  {
    id: "a11q28",
    text: "Information bias occurs when",
    options: [
      "There are errors in measurement or classification of exposure or outcome",
      "The study population is selected incorrectly",
      "The sample size is too small",
      "The data analysis is wrong"
    ],
    correctAnswer: 0,
    explanation: "Information bias results from errors in measuring or classifying exposure or outcome, which leads to misclassification. Recall, interviewer and observer bias are examples."
  },
  {
    id: "a11q29",
    text: "Recall bias is a type of",
    options: ["Selection bias", "Information bias", "Confounding", "Random error"],
    correctAnswer: 1,
    explanation: "Recall bias occurs when cases and controls remember past exposures with different accuracy. This is an error in the information collected, so it is a type of information bias."
  },
  {
    id: "a11q30",
    text: "Interviewer bias is a type of",
    options: ["Selection bias", "Information bias", "Confounding", "Random error"],
    correctAnswer: 1,
    explanation: "Interviewer bias occurs when an interviewer questions or records answers differently depending on the participant's status. This distorts the data collected, making it a type of information bias."
  },
  {
    id: "a11q31",
    text: "The 'healthy worker effect' is a type of",
    options: ["Selection bias", "Information bias", "Confounding", "Random error"],
    correctAnswer: 0,
    explanation: "The healthy worker effect is selection bias: employed people are healthier than the general population, so comparisons with the general population underestimate occupational risk."
  },
  {
    id: "a11q32",
    text: "Berkson's bias is a type of",
    options: ["Selection bias", "Information bias", "Confounding", "Random error"],
    correctAnswer: 0,
    explanation: "Berkson's bias arises in hospital-based case-control studies because admission rates differ by exposure and disease. This makes hospital patients unrepresentative, so it is a selection bias."
  },
  {
    id: "a11q33",
    text: "Non-response bias occurs when",
    options: [
      "People who refuse to participate are different from those who do",
      "The interviewer asks leading questions",
      "The participants forget their past exposures",
      "The measurement tool is not calibrated"
    ],
    correctAnswer: 0,
    explanation: "Non-response bias occurs when people who decline to participate differ systematically from those who take part. The sample then misrepresents the target population, so it is a form of selection bias."
  },
  {
    id: "a11q34",
    text: "Misclassification bias is a type of",
    options: ["Selection bias", "Information bias", "Confounding", "Random error"],
    correctAnswer: 1,
    explanation: "Misclassification bias means participants are wrongly categorized by exposure or outcome status because of measurement or reporting errors, which makes it an information bias."
  },
  {
    id: "a11q35",
    text: "Differential misclassification means",
    options: [
      "The error in classification is different for cases and controls",
      "The error in classification is the same for cases and controls",
      "The error is due to chance",
      "The error is due to confounding"
    ],
    correctAnswer: 0,
    explanation: "Differential misclassification means classification errors happen at different rates in cases and controls (or in exposed and unexposed). It can bias results either toward or away from the null."
  },
  {
    id: "a11q36",
    text: "Non-differential misclassification usually",
    options: [
      "Biases the results towards the null",
      "Biases the results away from the null",
      "Has no effect on the results",
      "Makes the results more significant"
    ],
    correctAnswer: 0,
    explanation: "When misclassification is equal in all groups, the groups look more alike than they really are. This dilutes the association and usually pushes the effect estimate toward the null (OR/RR toward 1)."
  },
  {
    id: "a11q37",
    text: "Blinding can help reduce",
    options: ["Selection bias", "Information bias", "Confounding", "Sampling error"],
    correctAnswer: 1,
    explanation: "Blinding stops participants, interviewers and assessors from knowing group status, which prevents differences in how outcomes are measured or reported. It therefore reduces information bias."
  },
  {
    id: "a11q38",
    text: "Bias can be completely eliminated by increasing the sample size.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. A larger sample size reduces only random error and improves precision. Bias is a systematic error that has to be prevented through good study design and conduct."
  },
  {
    id: "a11q39",
    text: "Bias can lead to incorrect conclusions about the association between exposure and outcome.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Bias systematically distorts estimates. It can create spurious associations, hide real ones, exaggerate or understate their strength, or even reverse their direction, which leads to wrong conclusions."
  },
  {
    id: "a11q40",
    text: "Selection bias is more common in case-control studies than in cohort studies.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Case-control studies select participants after the outcome has occurred, so selection can be related to exposure (for example, Berkson's bias). Cohort studies select by exposure before the outcome, which reduces this risk."
  },
  {
    id: "a11q41",
    text: "Loss to follow-up can lead to selection bias in cohort studies.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. If participants lost to follow-up differ from those who remain in both exposure and outcome, the people left in the analysis are a biased selection. This is the main selection bias in cohort studies."
  },
  {
    id: "a11q42",
    text: "A well-designed study should aim to minimize all types of bias.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Bias cannot be corrected by increasing the sample size and is often impossible to fix during analysis. Good study design should therefore minimize selection and information bias and control confounding."
  },
  {
    id: "a11q43",
    text: "Standardizing the data collection process can help reduce information bias.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Using the same protocols, validated tools, calibrated instruments and trained staff for everyone means exposure and outcome are measured uniformly across groups. This reduces information bias."
  },
  {
    id: "a11q44",
    text: "Using objective measures (like lab tests) instead of subjective measures (like self-reports) can help reduce information bias.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Self-reports are prone to recall, reporting and social desirability bias. Objective measures such as lab tests are less influenced by participants' memory or perceptions, so they reduce information bias."
  },
  {
    id: "a11q45",
    text: "Bias is the same as confounding.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Bias is a systematic error introduced through study design or conduct. Confounding is the mixing of effects by a third variable that is associated with both exposure and outcome, and it can be controlled in the design or the analysis."
  },
  {
    id: "a11q46",
    text: "Which of the following is a type of information bias?",
    options: ["Volunteer bias", "Recall bias", "Loss to follow-up", "Berkson's bias"],
    correctAnswer: 1,
    explanation: "Recall bias is an error in the information reported (differences in memory of exposures). Volunteer bias, loss to follow-up and Berkson's bias are all selection biases."
  },
  {
    id: "a11q47",
    text: "Which of the following is a type of selection bias?",
    options: ["Interviewer bias", "Recall bias", "Non-response bias", "Misclassification bias"],
    correctAnswer: 2,
    explanation: "Non-response bias affects who ends up in the sample, so it is a selection bias. Interviewer, recall and misclassification bias are errors in the data collected, which makes them information biases."
  },
  {
    id: "a11q48",
    text: "Bias can occur at any stage of a research study.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Bias can enter at any stage of research: planning, sampling, data collection, analysis, interpretation and publication (for example, publication bias)."
  },
  {
    id: "a11q49",
    text: "Internal validity of a study is affected by bias.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Internal validity is how accurately the results reflect the truth in the study population. Bias (along with confounding and chance) directly threatens it."
  },
  {
    id: "a11q50",
    text: "External validity (generalizability) is affected by selection bias.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. If the sample does not represent the target population, findings may not generalize to it, which reduces external validity. Selection bias can also affect internal validity."
  }
];
