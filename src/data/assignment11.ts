import { Question } from '../types';

export const ASSIGNMENT_11_QUESTIONS: Question[] = [
  {
    id: "a11q1",
    text: "A sampling method is called a probability sampling method when",
    options: [
      "Every unit has a known, non-zero chance of being selected",
      "Units are selected by the investigator's judgement",
      "Only volunteers are included",
      "The sample size exceeds 10% of the population"
    ],
    correctAnswer: 0,
    explanation: "Probability sampling requires that each unit's selection probability is known and greater than zero; the probabilities need not be equal. This is what allows sampling error to be estimated."
  },
  {
    id: "a11q2",
    text: "A sample of 250 persons is drawn from a population of 5000. What is the sampling fraction?",
    options: [
      "2%",
      "20%",
      "5%",
      "25%"
    ],
    correctAnswer: 2,
    explanation: "Sampling fraction = n/N = 250/5000 = 0.05, i.e. 5%. Its inverse (20) is the sampling interval if systematic sampling were used."
  },
  {
    id: "a11q3",
    text: "A town has 6000 adults: 2000 urban-slum and 4000 non-slum residents. With proportional stratified allocation for a total sample of 300, how many slum residents should be sampled?",
    options: [
      "150",
      "200",
      "50",
      "100"
    ],
    correctAnswer: 3,
    explanation: "Proportional allocation samples each stratum in proportion to its size: 300 x 2000/6000 = 100 slum residents and 200 non-slum residents."
  },
  {
    id: "a11q4",
    text: "In a systematic sample with sampling interval 20 and a random start of 7, which is the third unit selected?",
    options: [
      "47",
      "27",
      "60",
      "67"
    ],
    correctAnswer: 0,
    explanation: "Units selected are 7, 7+20 = 27, 7+40 = 47 and so on, so the third unit is number 47."
  },
  {
    id: "a11q5",
    text: "The design effect in a cluster survey is the",
    options: [
      "Number of clusters divided by cluster size",
      "Ratio of the variance under the actual design to the variance under simple random sampling of the same size",
      "Proportion of eligible persons who refuse",
      "Difference between sample and population means"
    ],
    correctAnswer: 1,
    explanation: "Design effect compares the variance of the estimate from the complex (e.g. cluster) design with that from an SRS of equal size. A value above 1 means the design is less efficient than SRS."
  },
  {
    id: "a11q6",
    text: "A survey first collects basic information (e.g. a screening question) from a large sample and then collects detailed information from a sub-sample of it. This is called",
    options: [
      "Quota sampling",
      "Snowball sampling",
      "Multiphase sampling",
      "Cluster sampling"
    ],
    correctAnswer: 2,
    explanation: "In multiphase (double) sampling the same type of unit is sampled repeatedly: inexpensive data from a large first-phase sample, and detailed data from a sub-sample. Multistage sampling, by contrast, samples different levels of units."
  },
  {
    id: "a11q7",
    text: "Lot quality assurance sampling (LQAS) is mainly used in public health to",
    options: [
      "Estimate the exact prevalence in each village",
      "Recruit hidden populations through peer referral",
      "Select participants for qualitative interviews",
      "Classify supervision areas as reaching or not reaching a performance threshold using small samples"
    ],
    correctAnswer: 3,
    explanation: "LQAS takes a small random sample (e.g. 19) from each lot or area and uses a decision rule to classify it as acceptable or not, for example for immunization coverage. It is a classification tool rather than a precise estimator."
  },
  {
    id: "a11q8",
    text: "Respondent-driven sampling differs from ordinary snowball sampling mainly because it",
    options: [
      "Uses tracked, limited referrals (coupons) and statistical weighting to reduce recruitment bias",
      "Uses a complete sampling frame of the population",
      "Selects participants with equal probability from a list",
      "Does not involve peer referral"
    ],
    correctAnswer: 0,
    explanation: "Respondent-driven sampling controls the recruitment chain (limited coupons, recorded network size) so that estimates can be adjusted for unequal selection. It is used for hidden groups such as people who inject drugs."
  },
  {
    id: "a11q9",
    text: "In grounded-theory qualitative research, choosing the next participants based on concepts emerging from the analysis so far is called",
    options: [
      "Systematic sampling",
      "Theoretical sampling",
      "Probability proportional to size sampling",
      "Area sampling"
    ],
    correctAnswer: 1,
    explanation: "Theoretical sampling is iterative: data collection and analysis proceed together, and new participants are chosen to develop or test emerging categories."
  },
  {
    id: "a11q10",
    text: "In qualitative research, recruitment of new participants usually stops when data saturation is reached, i.e. new interviews no longer yield new themes.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Sample size in qualitative studies is usually not fixed by a formula; it is guided by saturation, the point at which further data add no new information."
  },
  {
    id: "a11q11",
    text: "The distribution of a statistic (such as the mean) computed from all possible samples of the same size drawn from a population is called the",
    options: [
      "Frequency distribution of the sample",
      "Population distribution",
      "Sampling distribution",
      "Normal distribution of the raw data"
    ],
    correctAnswer: 2,
    explanation: "The sampling distribution describes how a statistic varies from sample to sample. Its standard deviation is the standard error of that statistic."
  },
  {
    id: "a11q12",
    text: "If the sample size of a simple random sample is increased four-fold, the standard error of the mean will",
    options: [
      "Become one-fourth",
      "Double",
      "Remain the same",
      "Become half"
    ],
    correctAnswer: 3,
    explanation: "SE = SD/sqrt(n). Multiplying n by 4 multiplies sqrt(n) by 2, so the standard error is halved."
  },
  {
    id: "a11q13",
    text: "In sampling without replacement, a unit once selected",
    options: [
      "Cannot be selected again",
      "Is returned to the population and may be selected again",
      "Is replaced by its neighbour on the list",
      "Is excluded from analysis"
    ],
    correctAnswer: 0,
    explanation: "Without replacement, each unit can appear in the sample only once. This is the usual practice in health surveys; with replacement the same unit could be drawn more than once."
  },
  {
    id: "a11q14",
    text: "A household survey uses the telephone directory as its sampling frame. The most likely problem is",
    options: [
      "Periodicity",
      "Undercoverage of households without listed telephones",
      "Overestimation of the design effect",
      "Too small a sampling interval"
    ],
    correctAnswer: 1,
    explanation: "An incomplete frame leaves out part of the target population (undercoverage). If those excluded differ systematically, e.g. poorer households, the estimates will be biased however large the sample."
  },
  {
    id: "a11q15",
    text: "Selecting the patients who happen to attend the outpatient department on the day of data collection is an example of",
    options: [
      "Simple random sampling",
      "Stratified sampling",
      "Convenience sampling",
      "Systematic sampling"
    ],
    correctAnswer: 2,
    explanation: "Convenience (accidental) sampling includes whoever is easily available. It is quick and cheap but there is no known selection probability, so the sample may not represent the target population."
  },
  {
    id: "a11q16",
    text: "For stratified sampling to improve precision, the stratification variable should be",
    options: [
      "Unrelated to the outcome being studied",
      "Chosen after the data are collected",
      "Measured only in the sample",
      "Strongly related to the outcome being studied"
    ],
    correctAnswer: 3,
    explanation: "Stratifying on a variable associated with the outcome (e.g. age for hypertension) makes strata internally homogeneous for the outcome, which reduces the variance of the overall estimate."
  },
  {
    id: "a11q17",
    text: "Area sampling is a form of cluster sampling in which the clusters are",
    options: [
      "Geographic units such as blocks or villages selected from maps",
      "Groups of patients with the same diagnosis",
      "Persons referred by earlier participants",
      "Strata defined by age and sex"
    ],
    correctAnswer: 0,
    explanation: "In area sampling, the population is divided into geographic areas, which are sampled as clusters. It is useful when no list of individuals exists but maps are available."
  },
  {
    id: "a11q18",
    text: "In a two-stage cluster survey selecting villages and then households within selected villages, the villages are the",
    options: [
      "Elementary units",
      "Primary sampling units",
      "Observation units",
      "Secondary sampling units"
    ],
    correctAnswer: 1,
    explanation: "The units selected at the first stage are the primary sampling units (here villages); the households selected within them are the secondary sampling units."
  },
  {
    id: "a11q19",
    text: "Which of the following best describes sampling bias?",
    options: [
      "Chance variation between one random sample and another",
      "A systematic difference between the sample and the population because some members had a lower chance of being selected",
      "Errors made while entering data into the computer",
      "The difference between the sample size and the population size"
    ],
    correctAnswer: 1,
    explanation: "Sampling bias is a systematic distortion: some units of the target population are less likely to be selected than others. It differs from random sampling error, which varies by chance and shrinks as the sample grows."
  },
  {
    id: "a11q20",
    text: "Using a random number table to select an SRS from a numbered list of 450 persons, the investigator reads three-digit numbers. A number such as 732 should be",
    options: [
      "Divided by 450 and the remainder used",
      "Rounded down to 450",
      "Used to select person 73",
      "Ignored, and the next number read"
    ],
    correctAnswer: 3,
    explanation: "Numbers outside the range 001-450 (and repeats, when sampling without replacement) are simply skipped. Modifying them could give some units unequal chances of selection."
  },
  {
    id: "a11q21",
    text: "The main reason for using disproportionate stratified sampling is to",
    options: [
      "Obtain enough subjects in a small stratum for precise subgroup estimates",
      "Avoid the need for a sampling frame",
      "Make weighting unnecessary",
      "Save on travel costs by grouping units"
    ],
    correctAnswer: 0,
    explanation: "Small strata (e.g. a minority group) may be oversampled so that their own estimates are precise. Overall estimates then require weighting."
  },
  {
    id: "a11q22",
    text: "In a probability sample, a person's selection probability is 1/50. The sampling (design) weight assigned to that person is",
    options: [
      "0.02",
      "50",
      "1/2500",
      "1"
    ],
    correctAnswer: 1,
    explanation: "The design weight is the inverse of the probability of selection: 1 / (1/50) = 50. Each sampled person represents 50 people in the population."
  },
  {
    id: "a11q23",
    text: "In optimum (Neyman) allocation for stratified sampling, larger samples are taken from strata that",
    options: [
      "Are smaller in size",
      "Have lower variability",
      "Are larger in size and/or more variable",
      "Are closest to the investigator"
    ],
    correctAnswer: 2,
    explanation: "Neyman allocation sets each stratum's sample size in proportion to stratum size times stratum standard deviation. Taking more units from large or highly variable strata minimises the variance of the overall estimate for a given total n."
  },
  {
    id: "a11q24",
    text: "Enrolling every consecutive eligible patient who attends a clinic until the required sample size is reached is called",
    options: [
      "Consecutive sampling",
      "Quota sampling",
      "Snowball sampling",
      "Cluster sampling"
    ],
    correctAnswer: 0,
    explanation: "Consecutive sampling is a non-probability method in which every eligible person presenting in a defined period is enrolled until the target number is reached; it reduces selection by the investigator but is still not random."
  },
  {
    id: "a11q25",
    text: "The mean of the sampling distribution of the sample mean is equal to the population mean.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. The sample mean is an unbiased estimator: averaged over all possible samples it equals the population mean, even though any single sample mean may differ from it."
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
    text: "A numerical value that describes a characteristic of the whole population, such as the true mean haemoglobin of all women in a district, is called a",
    options: [
      "Statistic",
      "Parameter",
      "Variable",
      "Estimate"
    ],
    correctAnswer: 1,
    explanation: "A parameter describes the population and is usually unknown. A statistic is the corresponding value calculated from a sample and is used as an estimate of the parameter."
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
