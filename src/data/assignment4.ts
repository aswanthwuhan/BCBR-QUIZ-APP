import { Question } from '../types';

export const ASSIGNMENT_4_QUESTIONS: Question[] = [
  {
    id: "a4q1",
    text: "Which of the following must be considered while measuring occurrence of a disease?",
    options: ["The number of people affected by the disease", "The population size from which the cases of disease arise", "The length of the time the population is followed", "All of the above"],
    correctAnswer: 3,
    explanation: "Measuring disease occurrence requires the number of cases (numerator), the population from which they arise (denominator), and the time period of observation. All three are needed."
  },
  {
    id: "a4q2",
    text: "__________ is most useful for evaluating the impact of prevention programme",
    options: ["Point prevalence", "Period prevalence", "Case fatality", "Incidence"],
    correctAnswer: 3,
    explanation: "Prevention programmes aim to stop new cases, and incidence measures new cases over time, so a fall in incidence directly reflects programme impact. Prevalence is influenced by duration and survival, and case fatality reflects severity."
  },
  {
    id: "a4q3",
    text: "Which one of the following statements is true?",
    options: [
      "High cure rate can increase the prevalence of a disease",
      "Low case fatality can reduce the prevalence of a disease",
      "Both 'a' and 'b' are true",
      "High cure rate and high case fatality can reduce the prevalence of a disease"
    ],
    correctAnswer: 3,
    explanation: "Since prevalence is roughly incidence times duration ($P \\approx I \\times D$), anything that shortens disease duration lowers prevalence. Patients leave the prevalence pool by cure or death, so high cure rate and high case fatality both reduce prevalence."
  },
  {
    id: "a4q4",
    text: "Measures of disease frequency",
    options: ["Incidence", "Prevalence", "Birth rate", "'a' and 'b'"],
    correctAnswer: 3,
    explanation: "Incidence (new cases) and prevalence (existing cases) are the basic measures of disease frequency. Birth rate is a demographic fertility measure, not a measure of disease."
  },
  {
    id: "a4q5",
    text: "A measure that reflects severity of an acute infectious disease",
    options: ["Case fatality ratio", "Incidence rate", "Prevalence", "Mortality rate"],
    correctAnswer: 0,
    explanation: "Case fatality ratio is the proportion of people with a disease who die from it, so it reflects the killing power or severity of an acute disease. Mortality rate uses the whole population as denominator."
  },
  {
    id: "a4q6",
    text: "Incidence data can be used to measure the occurrence of disease with gradual onset",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Incidence requires knowing the time of onset of each new case, which is hard to determine for diseases with gradual onset; prevalence is usually preferred for such conditions."
  },
  {
    id: "a4q7",
    text: "This measure reflects the impact of a disease on population in terms of death",
    options: ["Incidence density", "Case fatality", "Disease specific mortality", "Attack rate"],
    correctAnswer: 2,
    explanation: "Disease-specific mortality rate relates deaths from a disease to the whole population, so it reflects the disease's impact on the population in terms of death. Case fatality uses only cases as denominator and reflects severity."
  },
  {
    id: "a4q8",
    text: "While measuring the frequency of a chronic disease in a community in terms of Incidence per 1000 persons per year, and point prevalence per 1000 persons, what is the expected pattern of incidence and prevalence?",
    options: ["Low prevalence, high incidence", "High prevalence, low incidence", "Both prevalence and incidence will be similar", "None of the above statements are true"],
    correctAnswer: 1,
    explanation: "Chronic diseases have long duration and low cure rates, so few new cases occur each year (low incidence) while cases accumulate over time (high prevalence), as $P \\approx I \\times D$."
  },
  {
    id: "a4q9",
    text: "In a study among 3400 children aged 5-10 years, 16 children were diagnosed with autistic disorder. Calculate the prevalence of autism per 1000 children",
    options: ["4.01", "5.53", "3.35", "4.71"],
    correctAnswer: 3,
    explanation: "Prevalence = existing cases / population examined x 1000 = $16/3400 \\times 1000 \\approx 4.71$ per 1000 children."
  },
  {
    id: "a4q10",
    text: "Statistic used to estimate the risk of acquiring a disease",
    options: ["Prevalence", "Incidence", "Mortality rate", "All of the above"],
    correctAnswer: 1,
    explanation: "Risk is the probability that a disease-free person develops the disease over a period, which is measured by (cumulative) incidence. Prevalence measures existing burden and mortality rate measures risk of death."
  },
  {
    id: "a4q11",
    text: "During a measles outbreak, a case was identified in a household with 30 susceptible household contacts. Within the incubation period, 9 of these contacts developed measles. What is the secondary attack rate?",
    options: ["9%", "21%", "30%", "39%"],
    correctAnswer: 2,
    explanation: "Secondary attack rate = secondary cases among susceptible contacts / total susceptible contacts x 100 = 9/30 x 100 = 30%. Only contacts exposed to the primary case are counted in the denominator."
  },
  {
    id: "a4q12",
    text: "A district has a mid-year population of 50,000 and recorded 400 deaths from all causes during the year. What is the crude death rate per 1000 population?",
    options: ["8.0", "0.8", "80", "4.0"],
    correctAnswer: 0,
    explanation: "Crude death rate = all deaths during the year / mid-year population x 1000 = 400/50,000 x 1000 = 8.0 per 1000 per year. The whole population is the denominator and deaths from all causes are counted."
  },
  {
    id: "a4q13",
    text: "Select the correct statement among the following",
    options: [
      "Prevalence of a disease will increase when it has a high cure rate",
      "Prevalence of a disease will decrease when it has a low case fatality ratio",
      "Prevalence of a disease will increase when it has a low cure rate",
      "Prevalence of a disease will increase when it is acute in nature"
    ],
    correctAnswer: 2,
    explanation: "A low cure rate keeps patients in the diseased state longer, increasing duration and therefore prevalence ($P \\approx I \\times D$). High cure rate and acute nature shorten duration, and low case fatality increases rather than decreases prevalence."
  },
  {
    id: "a4q14",
    text: "In a survey of 200 adults, 50 have the disease and 150 do not. What are the odds of disease in this group?",
    options: ["0.25", "0.33", "0.50", "4.00"],
    correctAnswer: 1,
    explanation: "Odds = diseased / non-diseased = 50/150 = 0.33. The proportion with disease is 50/200 = 0.25, a different measure, because odds place the diseased group in the numerator only and not in the denominator."
  },
  {
    id: "a4q15",
    text: "Cumulative incidence is otherwise known as",
    options: ["Attack rate", "Case fatality rate", "Mortality rate", "Morbidity rate"],
    correctAnswer: 0,
    explanation: "Attack rate is the cumulative incidence of a disease in a population exposed over a short period, typically during an outbreak: new cases / population at risk."
  },
  {
    id: "a4q16",
    text: "The healthcare professionals working in an intensive care unit were asked whether there has been an increase in the number of new pneumonia cases. Which of the following factor(s) is inappropriate in the calculation of cumulative incidence?",
    options: ["Number of new cases", "Total number of people at risk", "Pre-existing cases of pneumonia", "Both ‘a’ and ‘b’"],
    correctAnswer: 2,
    explanation: "Cumulative incidence = new cases / population at risk at the start. Pre-existing cases are not at risk of becoming new cases, so they must be excluded from the calculation."
  },
  {
    id: "a4q17",
    text: "When measuring the frequency for an acute infectious disease in a community in terms of incidence per 1000 persons per year and point prevalence per 1000 persons, how will the pattern of incidence and prevalence be?",
    options: ["High prevalence", "Low incidence", "Both prevalence and incidence will be similar", "Low prevalence and high incidence"],
    correctAnswer: 3,
    explanation: "Acute infectious diseases produce many new cases (high incidence) but each episode is short, so few people are ill at any given point (low point prevalence)."
  },
  {
    id: "a4q18",
    text: "Among 25000 population in a city, 105 residents were identified with Hepatitis B infection. Calculate the prevalence of Hepatitis B per 1000 population.",
    options: ["5.2", "4.2", "3.2", "2.2"],
    correctAnswer: 1,
    explanation: "Prevalence = existing cases / population x 1000 = $105/25000 \\times 1000 = 4.2$ per 1000 population."
  },
  {
    id: "a4q19",
    text: "For cumulative incidence (risk) to be a valid measure in a cohort study, which condition should hold?",
    options: ["Participants enter and leave the cohort at different times", "Each participant contributes different amounts of person-time", "Follow-up losses are frequent and unrecorded", "The cohort is closed and all members are followed for the same period"],
    correctAnswer: 3,
    explanation: "Cumulative incidence assumes a closed cohort followed for a common period, so every member has the same opportunity to develop disease. When follow-up times differ, incidence density based on person-time is the appropriate measure."
  },
  {
    id: "a4q20",
    text: "Which of the following is true about incidence density?",
    options: ["Numerator has number of new cases", "Also called cumulative incidence", "Denominator is number of persons at risk", "Numerator has person-years at risk"],
    correctAnswer: 0,
    explanation: "Incidence density = new cases / total person-time at risk, so its numerator is the number of new cases. Person-time is in the denominator, and it is the incidence rate, not cumulative incidence."
  },
  {
    id: "a4q21",
    text: "In a rural block with 1,00,000 population, 250 residents were identified with cardiovascular disease. Calculate the prevalence of cardiovascular disease per 1000 population.",
    options: ["0.2", "0.5", "2.5", "25"],
    correctAnswer: 2,
    explanation: "Prevalence = $250/100000 \\times 1000 = 2.5$ per 1000 population (1,00,000 is one lakh, i.e. 100,000)."
  },
  {
    id: "a4q22",
    text: "What is the appropriate epidemiologic measure to determine the burden of a disease in terms of number of cases presenting a specified geographical area at a specific point in time?",
    options: ["Cumulative Incidence", "Point Prevalence", "Incidence rate", "Case fatality ratio"],
    correctAnswer: 1,
    explanation: "Point prevalence counts all existing cases in a defined population at a specific point in time, giving a snapshot of disease burden in a given area."
  },
  {
    id: "a4q23",
    text: "In a study, 300 children were followed up for a period of one year to determine the burden of acute respiratory infections (ARI). Calculate the incidence density if the total number of ARI episodes recorded was 1500.",
    options: ["5 episodes per child year", "0.2 episodes per child year", "3 episodes per child year", "0.5 episodes per child year"],
    correctAnswer: 0,
    explanation: "Incidence density = episodes / person-time = $1500/(300 \\times 1) = 5$ episodes per child-year. Recurrent episodes are all counted, so the value can exceed 1."
  },
  {
    id: "a4q24",
    text: "A total of 100 people with hypertension were followed up for 3 years to observe for the development of myocardial infarction in a cohort study. At the end of first year, 10 people developed myocardial infarction, at the end of second year 10 people left the study and at the end of third year, another 10 people developed myocardial infarction. Calculate the total person-years of observation in this study?",
    options: ["250", "260", "270", "280"],
    correctAnswer: 2,
    explanation: "Person-years at risk: year 1 = 100, year 2 = 90 (10 had MI), year 3 = 80 (10 more left). Total = $100 + 90 + 80 = 270$ person-years."
  },
  {
    id: "a4q25",
    text: "During a one-year follow-up, a psychiatrist determined the burden of suicidal ideation among 100 patients with drug addiction. Seven patients had previous history of suicidal ideation and 20 patients developed it for the first time. What is the incidence of suicidal ideation in the study population?",
    options: ["7% per year", "20% per year", "21.5% per year", "27 per year"],
    correctAnswer: 2,
    explanation: "The 7 patients with previous suicidal ideation are not at risk of a first episode and are excluded from the denominator: $20/(100-7) \\times 100 \\approx 21.5\\%$ per year."
  },
  {
    id: "a4q26",
    text: "In a food poisoning outbreak, 75 people were affected. Among them, 50 were hospitalized, and two died. Calculate the case-fatality ratio.",
    options: ["1.2%", "2.7%", "4%", "8%"],
    correctAnswer: 1,
    explanation: "Case fatality ratio = deaths / all cases x 100 = $2/75 \\times 100 \\approx 2.7\\%$. The 50 hospitalized is a distractor; the denominator is all 75 affected."
  },
  {
    id: "a4q27",
    text: "Which of the following is NOT required for calculating prevalence of a disease?",
    options: ["Pre-existing cases", "New cases", "Total number of people at risk", "Total person-time of observation"],
    correctAnswer: 3,
    explanation: "Prevalence = all existing (pre-existing plus new) cases / total population at a given time. Person-time of observation is used only for incidence density, not prevalence."
  },
  {
    id: "a4q28",
    text: "A new drug prolongs the survival of patients with a chronic disease but does not cure them. If the incidence of the disease stays the same, what happens to its prevalence?",
    options: ["It decreases", "It remains unchanged", "It increases", "It becomes equal to the incidence"],
    correctAnswer: 2,
    explanation: "Prevalence is approximately $P \\approx I \\times D$. Prolonged survival increases the average duration, so cases accumulate and prevalence rises even though the number of new cases is unchanged."
  },
  {
    id: "a4q29",
    text: "In which of the following conditions, prevalence is an appropriate measure of disease frequency?",
    options: ["Common cold episodes in elderly", "Number of exacerbations in asthma patients", "Proportion of foot ulcers in Diabetes Mellitus", "Number of diarrhoea episodes in children"],
    correctAnswer: 2,
    explanation: "Prevalence suits long-lasting conditions measured as a snapshot. Diabetic foot ulcers persist, whereas colds, asthma exacerbations and diarrhoea are short recurring episodes better measured by incidence."
  },
  {
    id: "a4q30",
    text: "Which of the following is INCORRECT about case fatality?",
    options: ["It reflects the severity of a disease", "High case fatality indicates poor prognosis", "It relates the number of deaths to the number of cases of a disease", "It is a true rate"],
    correctAnswer: 3,
    explanation: "Case fatality is a proportion (deaths among cases), not a true rate, because its denominator has no person-time component. It does reflect severity and prognosis."
  },
  {
    id: "a4q31",
    text: "A cohort of 2,000 factory workers was followed for varying periods and contributed a total of 15,000 person-years. During follow-up, 36 new cases of occupational asthma were diagnosed. What is the incidence density per 1000 person-years?",
    options: ["0.42", "2.4", "4.2", "24"],
    correctAnswer: 1,
    explanation: "Incidence density = new cases / person-years at risk x 1000 = 36/15,000 x 1000 = 2.4 per 1000 person-years. The number of workers is not used as the denominator because their follow-up times differ."
  },
  {
    id: "a4q32",
    text: "Which measure gives the proportion of a population that has ever had a condition up to a given age or time, including those who have recovered?",
    options: ["Point prevalence", "Period prevalence", "Cumulative incidence", "Lifetime prevalence"],
    correctAnswer: 3,
    explanation: "Lifetime prevalence counts everyone who has ever experienced the condition up to a given point in life, including those who recovered. Point and period prevalence count only cases present at a time point or during a period."
  },
  {
    id: "a4q33",
    text: "Why can a cross-sectional survey NOT directly measure the incidence of a disease?",
    options: ["It only counts deaths from the disease", "It always uses person-time as the denominator", "It records existing cases at one point in time without following people over time", "It can only measure disease in children"],
    correctAnswer: 2,
    explanation: "A cross-sectional survey captures existing cases at one time point, so it estimates prevalence. Incidence requires initially disease-free people to be followed over time, as in a cohort study, to observe new onsets."
  },
  {
    id: "a4q34",
    text: "100 people with hypertension are followed up for 5 years to observe for development of myocardial infarction. At the end of second year 5 people develop myocardial infarction, at the end of third year another 2 people develop myocardial infarction and at the end of five years 3 people develop myocardial infarction. Calculate the incidence rate of myocardial infarction.",
    options: ["10 cases per five person-years", "10 percentage", "10/481 cases per person-year", "10/500 cases per person-year"],
    correctAnswer: 2,
    explanation: "Person-time = 5×2 + 2×3 + 3×5 + 90×5 = 481 person-years. Incidence rate = 10 new cases / 481 person-years, since cases stop contributing time once they develop MI."
  },
  {
    id: "a4q35",
    text: "In a city, 120 deaths occurred during one year among 8,000 residents aged 65 years and above. What is the age-specific death rate per 1000 population for this group?",
    options: ["1.5", "15", "150", "0.15"],
    correctAnswer: 1,
    explanation: "Age-specific death rate = deaths in the age group / population of that age group x 1000 = 120/8,000 x 1000 = 15 per 1000 per year. Only the population aged 65 and above is used as the denominator."
  },
  {
    id: "a4q36",
    text: "Which of the following statements about a proportion is TRUE?",
    options: ["Its denominator is always a person-time total", "Its value can exceed 1 when recurrent events are counted", "Its numerator is a subset of its denominator, so it lies between 0 and 1", "It always includes time as a component"],
    correctAnswer: 2,
    explanation: "A proportion divides a part by the whole that contains it, so its value lies between 0 and 1 (0 to 100%). Person-time belongs to rates, and only rates can exceed 1 when recurrent events are counted."
  },
  {
    id: "a4q37",
    text: "In a cohort study, 40 of 200 exposed persons developed the disease, compared with 10 of 200 unexposed persons. What is the relative risk of disease in the exposed group?",
    options: ["0.25", "2.0", "0.15", "4.0"],
    correctAnswer: 3,
    explanation: "Risk in exposed = 40/200 = 0.20 and risk in unexposed = 10/200 = 0.05. Relative risk = 0.20/0.05 = 4.0, a ratio of two cumulative incidences."
  },
  {
    id: "a4q38",
    text: "A disease has an incidence of 2 new cases per 100 persons per year and an average duration of 5 years. Under steady-state conditions, what is its approximate prevalence?",
    options: ["2%", "10%", "25%", "0.4%"],
    correctAnswer: 1,
    explanation: "Under steady-state conditions, prevalence is approximately $P \\approx I \\times D$ = 0.02 per year x 5 years = 0.10, or 10%."
  },
  {
    id: "a4q39",
    text: "At a wedding, 80 guests ate the chicken and 40 of them fell ill. The 20 guests who did not eat the chicken remained well. What is the attack rate among those who ate the chicken?",
    options: ["50%", "10%", "25%", "66.7%"],
    correctAnswer: 0,
    explanation: "Attack rate = ill persons among those exposed / total exposed x 100 = 40/80 x 100 = 50%. Guests who did not eat the chicken are not part of the denominator."
  },
  {
    id: "a4q40",
    text: "The approximation $P \\approx I \\times D$ is most valid when which condition holds?",
    options: ["Incidence and average duration remain approximately stable over time (steady state)", "Incidence is zero during the study period", "Duration of disease varies greatly from patient to patient", "All cases die within one year"],
    correctAnswer: 0,
    explanation: "The relation $P \\approx I \\times D$ holds at steady state, when incidence and duration are approximately constant. If either changes, prevalence lags behind and the approximation becomes less accurate."
  },
  {
    id: "a4q41",
    text: "All of the following are measures of morbidity EXCEPT:",
    options: ["Incidence", "Probability of experiencing a disease condition", "Population at risk of a disease", "Period prevalence"],
    correctAnswer: 2,
    explanation: "Incidence, risk (probability of disease) and period prevalence are morbidity measures. The population at risk is only the denominator used to calculate them, not a measure itself."
  },
  {
    id: "a4q42",
    text: "The ratio of the number of new cases to the total time the population is at risk of disease refers to__________.",
    options: ["Cumulative incidence", "Incidence density", "Risk", "Incidence proportion"],
    correctAnswer: 1,
    explanation: "Incidence density (incidence rate) is new cases divided by total person-time at risk. Cumulative incidence, risk and incidence proportion all use the number of people at risk, not time."
  },
  {
    id: "a4q43",
    text: "A cross sectional survey was undertaken to estimate the prevalence of refractive errors among adults in a village with an adult population of 10,000. During the survey, about 400 reported spectacle use for refractive error and another 800 individuals were identified with refractive error during the survey. What is the prevalence of refractive error?",
    options: ["8.0%", "8.3%", "12.0%", "12.3%"],
    correctAnswer: 2,
    explanation: "Prevalence includes all existing cases: 400 known plus 800 newly detected = 1200. Prevalence = 1200/10,000 = 12.0%."
  },
  {
    id: "a4q44",
    text: "Which of the following is FALSE about disease prevalence?",
    options: [
      "It is the ratio of existing cases to the total population at risk during a specified time point",
      "Total mid-year population is used as an approximation for population at risk",
      "The multiplier is chosen depending upon how rare or common the disease is",
      "Prevalence is the appropriate for measuring burden of diseases with high fatality"
    ],
    correctAnswer: 3,
    explanation: "Highly fatal diseases have short duration, so prevalence stays low and underestimates burden; incidence is preferred. The other statements about prevalence are true."
  },
  {
    id: "a4q45",
    text: "Which of the following can decrease the prevalence of a disease?",
    options: ["Increase in the incidence", "Improved detection", "High case fatality", "Immigration of persons with the disease"],
    correctAnswer: 2,
    explanation: "High case fatality removes cases from the pool through death, shortening duration and lowering prevalence. Higher incidence, better detection and immigration of cases all raise prevalence."
  },
  {
    id: "a4q46",
    text: "Which of the following statement is FALSE about incidence of disease?",
    options: [
      "It measures the rapidity with which new cases are occurring",
      "It is the number of all existing cases (new and old) during a given period",
      "It can be expressed as cumulative incidence or incidence density",
      "Cumulative incidence is also referred to as attack rate"
    ],
    correctAnswer: 1,
    explanation: "Counting all existing (new and old) cases defines prevalence, not incidence. Incidence counts only new cases and can be expressed as cumulative incidence (attack rate) or incidence density."
  },
  {
    id: "a4q47",
    text: "A cohort of women who smoked cigarettes was followed-up to study the incidence of cleft lip among the children born to these women. Of the total 9,500 children born to these women, 228 children had cleft lip. What is the risk of cleft lip among the children born to women who smoke cigarettes?",
    options: ["2.4 per 100 persons", "0.24 per 100 persons", "0.24 per lakh persons", "0.024 per 1000 persons"],
    correctAnswer: 0,
    explanation: "Risk = 228/9500 = 0.024, i.e. 2.4 per 100 children (24 per 1000)."
  },
  {
    id: "a4q48",
    text: "Which of the following is TRUE about case fatality?",
    options: [
      "It reflects the severity of the disease",
      "It can be expressed as a rate",
      "It cannot be expressed as a proportion",
      "It expresses a relation between the number of deaths due to a disease to the total number of deaths"
    ],
    correctAnswer: 0,
    explanation: "Case fatality (deaths from a disease / cases of that disease) reflects disease severity. It is a proportion, not a true rate; deaths over total deaths is proportional mortality."
  },
  {
    id: "a4q49",
    text: "About 1000 prison inmates were followed up for one year to study the occurrence of Tuberculosis (TB) among them. Of the total, 10 had TB at the beginning and another 25 persons developed TB during one year of follow-up. What is the period prevalence for that year?",
    options: ["2.5%", "3.0%", "3.5%", "4.0%"],
    correctAnswer: 2,
    explanation: "Period prevalence counts cases existing at the start plus new cases during the period: (10 + 25)/1000 = 3.5%."
  },
  {
    id: "a4q50",
    text: "State whether true or false. Change in prevalence from one time period to another may be the result of changes in incidence rates, changes in the duration of disease, or both.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Since prevalence ≈ incidence × duration, a change in prevalence can result from a change in incidence, in duration, or both."
  }
];
