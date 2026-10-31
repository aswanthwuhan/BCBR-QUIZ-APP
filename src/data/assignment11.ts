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
    explanation: "False. Selection and information bias arise from flaws in how participants are chosen or data are measured, whereas confounding is distortion by a third variable associated with both exposure and outcome. Some texts class confounding as a type of bias, but the terms are not synonymous, and confounding can be controlled in design or analysis."
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
    text: "In simple random sampling, each member of the population has",
    options: ["A probability of selection that depends on how accessible they are", "An equal and known probability of being selected", "A higher probability of selection if they volunteer", "A probability fixed by the investigator's judgement"],
    correctAnswer: 1,
    explanation: "Simple random sampling gives every unit in the sampling frame the same, known chance of selection, for example by lottery or random numbers. This is what allows sampling error to be estimated."
  },
  {
    id: "a11q27",
    text: "Which of the following is a non-probability sampling method?",
    options: ["Simple random sampling", "Stratified random sampling", "Cluster sampling", "Quota sampling"],
    correctAnswer: 3,
    explanation: "In quota sampling the investigator fills fixed numbers per category with whoever is available, so selection probabilities are unknown. The other three are probability methods."
  },
  {
    id: "a11q28",
    text: "A systematic sample of 50 is to be drawn from a list of 1000 people. What is the sampling interval?",
    options: ["10", "20", "50", "5"],
    correctAnswer: 1,
    explanation: "Sampling interval k = N/n = 1000/50 = 20. A random start between 1 and 20 is chosen and every 20th person thereafter is selected."
  },
  {
    id: "a11q29",
    text: "Dividing the population into homogeneous subgroups (e.g., by age group) and drawing a random sample from each subgroup is called",
    options: ["Cluster sampling", "Stratified random sampling", "Systematic sampling", "Snowball sampling"],
    correctAnswer: 1,
    explanation: "Stratified random sampling splits the population into internally homogeneous strata and samples randomly within each. It ensures representation of every stratum and improves precision."
  },
  {
    id: "a11q30",
    text: "A survey randomly selects 30 villages in a district and interviews all households in each selected village. This is",
    options: ["Cluster sampling", "Stratified sampling", "Quota sampling", "Convenience sampling"],
    correctAnswer: 0,
    explanation: "Here the sampling unit is a naturally occurring group (the village), chosen at random, and everyone in the chosen groups is studied. That is cluster sampling."
  },
  {
    id: "a11q31",
    text: "Snowball sampling is most useful for",
    options: ["National prevalence surveys", "Ensuring every person has an equal chance of selection", "Reaching hidden or hard-to-reach populations such as people who inject drugs", "Selecting households from a complete census list"],
    correctAnswer: 2,
    explanation: "In snowball sampling existing participants refer others from the same network. It is a non-probability method suited to hidden populations for which no sampling frame exists."
  },
  {
    id: "a11q32",
    text: "The list of all units in the population from which the sample is actually drawn is called the",
    options: ["Sampling unit", "Sampling frame", "Target population", "Sampling interval"],
    correctAnswer: 1,
    explanation: "The sampling frame is the operational list (e.g., a voter list or household register) used to select the sample. An incomplete or outdated frame can make the sample unrepresentative."
  },
  {
    id: "a11q33",
    text: "Compared with a simple random sample of the same size, a cluster sample usually",
    options: ["Gives less precise estimates because people within a cluster tend to be similar", "Requires a complete list of all individuals in the population", "Is always more expensive to conduct", "Is a non-probability method"],
    correctAnswer: 0,
    explanation: "Intra-cluster correlation means each extra person in a cluster adds less new information, so the design effect is usually above 1 and precision is lower. Cluster sampling is chosen for its lower cost and because only a list of clusters is needed."
  },
  {
    id: "a11q34",
    text: "Which sampling method can give a biased sample if the list has a periodic (cyclical) pattern that coincides with the sampling interval?",
    options: ["Simple random sampling", "Systematic sampling", "Stratified sampling", "Multistage sampling"],
    correctAnswer: 1,
    explanation: "Systematic sampling picks every kth unit; if the list repeats a pattern every k units (e.g., every 10th house is a corner house), the sample can consistently over- or under-represent one type."
  },
  {
    id: "a11q35",
    text: "The WHO EPI '30 x 7' immunization coverage survey design is an example of",
    options: ["Convenience sampling", "Two-stage cluster sampling", "Quota sampling", "Purposive sampling"],
    correctAnswer: 1,
    explanation: "The EPI design first selects 30 clusters (with probability proportional to size) and then 7 children in each cluster, which is two-stage cluster sampling."
  },
  {
    id: "a11q36",
    text: "In cluster sampling, the purpose of selecting clusters with probability proportional to size (PPS) is to",
    options: ["Select only the largest clusters", "Avoid the need for randomization", "Give individuals in large and small clusters roughly equal overall chances of selection", "Deliberately over-sample small clusters"],
    correctAnswer: 2,
    explanation: "With PPS, larger clusters are more likely to be chosen, and a fixed number of individuals is then taken per cluster. This balances out so that each individual has about the same overall selection probability."
  },
  {
    id: "a11q37",
    text: "Sampling error in a probability sample is best reduced by",
    options: ["Blinding the investigators", "Using a structured questionnaire", "Training the interviewers", "Increasing the sample size"],
    correctAnswer: 3,
    explanation: "Sampling error is random variation from studying a sample instead of the whole population, and it shrinks as sample size increases. Blinding, questionnaires and training address non-sampling errors."
  },
  {
    id: "a11q38",
    text: "In stratified sampling, strata should be homogeneous within themselves and different from one another.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Stratification gains precision when units within a stratum are alike on the characteristic of interest and strata differ from each other."
  },
  {
    id: "a11q39",
    text: "A convenience sample allows valid estimation of sampling error and generalization to the target population.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. In convenience sampling the selection probabilities are unknown, so sampling error cannot be validly estimated and the sample may not represent the target population."
  },
  {
    id: "a11q40",
    text: "Purposive sampling is commonly used in qualitative research.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Qualitative studies deliberately choose information-rich participants (key informants, varied experiences) rather than aiming for statistical representativeness."
  },
  {
    id: "a11q41",
    text: "Ideally, each cluster in cluster sampling should be internally heterogeneous, like a miniature of the whole population.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Clusters that each mirror the population's variability give more information per cluster and a smaller design effect, which is the opposite of the ideal for strata."
  },
  {
    id: "a11q42",
    text: "A census collects information from only a sample of the population.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. A census attempts to cover every unit in the population, so it has no sampling error. A sample survey studies only part of the population."
  },
  {
    id: "a11q43",
    text: "When disproportionate stratified sampling is used, the data must be weighted to estimate the overall population value.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. If some strata are over-sampled, each stratum's results must be weighted by its share of the population; otherwise the over-sampled strata distort the overall estimate."
  },
  {
    id: "a11q44",
    text: "In quota sampling, the individuals within each quota are selected randomly.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Quota sampling fixes how many people are needed per category, but interviewers choose whoever is available to fill each quota. This lack of random selection makes it a non-probability method."
  },
  {
    id: "a11q45",
    text: "Non-sampling errors, such as non-response and measurement error, can occur even in a complete census.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. A census removes sampling error but not errors from non-response, faulty instruments, interviewer mistakes or data entry."
  },
  {
    id: "a11q46",
    text: "Multistage sampling involves",
    options: ["Selecting only people who volunteer", "Selecting every kth unit from a list", "Selecting units in successive stages, e.g., districts, then villages, then households", "Asking participants to refer other participants"],
    correctAnswer: 2,
    explanation: "Multistage sampling selects progressively smaller units at each stage, so a complete list is needed only for the units chosen at the previous stage. It is common in large surveys such as NFHS."
  },
  {
    id: "a11q47",
    text: "In a survey where households are randomly selected and all members of each selected household are interviewed, the sampling unit is the",
    options: ["Individual", "Household", "Village", "District"],
    correctAnswer: 1,
    explanation: "The sampling unit is the unit actually selected in the sampling process. Here households are selected, and individuals are the units of observation within them."
  },
  {
    id: "a11q48",
    text: "Systematic random sampling requires a random start between 1 and the sampling interval k.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. The first unit is chosen at random from 1 to k, and every kth unit after it is then selected; the random start is what makes it a probability method."
  },
  {
    id: "a11q49",
    text: "The lottery method and random number tables can both be used to draw a simple random sample.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Both give every unit in the sampling frame an equal chance of selection; today computer-generated random numbers are used the same way."
  },
  {
    id: "a11q50",
    text: "Using a probability sampling method eliminates all bias from a study.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Probability sampling prevents bias in who is selected, but non-response, an incomplete sampling frame, and measurement or information bias can still occur."
  }
];
