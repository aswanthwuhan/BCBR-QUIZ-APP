import { Question } from '../types';

export const ASSIGNMENT_10_QUESTIONS: Question[] = [
  {
    id: "a10q1",
    text: "In a study on hypertension, patients are categorized based on their systolic blood pressure as normal, pre-hypertension, stage 1 hypertension and stage 2 hypertension. What type of variable is this?",
    options: ["Qualitative", "Descriptive", "Nominal", "Ordinal"],
    correctAnswer: 3,
    explanation: "Normal, pre-hypertension, stage 1 and stage 2 are categories with a natural order of severity but unequal intervals, making it an ordinal variable."
  },
  {
    id: "a10q2",
    text: "Most commonly used measure of central tendency is",
    options: ["Mode", "Median", "Mean", "Range"],
    correctAnswer: 2,
    explanation: "The arithmetic mean is the most commonly used measure of central tendency because it uses all observations and underlies most statistical tests. Range is a measure of dispersion."
  },
  {
    id: "a10q3",
    text: "First quartile (Q1) is equivalent to",
    options: ["25th", "50th", "75th", "1st"],
    correctAnswer: 0,
    explanation: "The first quartile (Q1) is the 25th percentile: 25% of observations lie below it. Q2 is the median (50th) and Q3 the 75th percentile."
  },
  {
    id: "a10q4",
    text: "Find the median in the following sample of observations: 12, 26, 10, 29, 48",
    options: ["29", "48", "26", "25"],
    correctAnswer: 2,
    explanation: "Sorted: 10, 12, 26, 29, 48. With $n=5$, the median is the 3rd value, 26."
  },
  {
    id: "a10q5",
    text: "The following measure is not influenced by extreme values in a data set",
    options: ["Arithmetic Mean", "Inter-quartile range", "Range", "b and c"],
    correctAnswer: 1,
    explanation: "The interquartile range ($Q_3-Q_1$) covers only the middle 50% of data, so outliers do not affect it. The mean and range are both influenced by extreme values."
  },
  {
    id: "a10q6",
    text: "Which of the following statistic does not belong with the others?",
    options: ["Range", "Variance", "Mode", "Standard deviation"],
    correctAnswer: 2,
    explanation: "Range, variance and standard deviation are measures of dispersion, while mode is a measure of central tendency, so mode is the odd one out."
  },
  {
    id: "a10q7",
    text: "'Number of children per household' is an example of a continuous variable",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation: "False. Number of children is a whole-number count (0, 1, 2...), so it is a discrete variable, not continuous."
  },
  {
    id: "a10q8",
    text: "In a study, researchers are interested in measuring the cholesterol levels of participants. Cholesterol level is a",
    options: ["Ordinal", "Nominal", "Continuous", "Discrete"],
    correctAnswer: 2,
    explanation: "Cholesterol is measured on a scale and can take any value including decimals within a range, so it is a continuous variable."
  },
  {
    id: "a10q9",
    text: "In the following set of data, what is the mean? 4,1,9,7,3,8,2,6",
    options: ["5", "4.5", "9", "8"],
    correctAnswer: 0,
    explanation: "Mean = sum/n = $40/8 = 5$."
  },
  {
    id: "a10q10",
    text: "Difference between the minimum value and the maximum value of the observations",
    options: ["Variance", "Inter-quartile range", "Range", "Standard Deviation"],
    correctAnswer: 2,
    explanation: "Range is the difference between the maximum and minimum observations, the simplest measure of dispersion."
  },
  {
    id: "a10q11",
    text: "All the following are measures of dispersion except",
    options: ["Mean", "Variance", "Standard deviation", "Range"],
    correctAnswer: 0,
    explanation: "The mean is a measure of central tendency; variance, standard deviation and range are measures of dispersion."
  },
  {
    id: "a10q12",
    text: "Which percentile is equivalent to the median?",
    options: ["25", "50", "75", "100"],
    correctAnswer: 1,
    explanation: "The median divides ordered data into two equal halves, so it equals the 50th percentile (Q2)."
  },
  {
    id: "a10q13",
    text: "All the following are true for standard deviation (SD) EXCEPT",
    options: [
      "It is the square root of the average of the squared deviations of the observations from the arithmetic mean",
      "It is the most important measure of dispersion",
      "It is expressed in the same units of measurement as the observation",
      "The square of the standard deviation is called mean deviation"
    ],
    correctAnswer: 3,
    explanation: "This statement is false: the square of the standard deviation is the variance, not mean deviation. The other statements about SD are true."
  },
  {
    id: "a10q14",
    text: "A researcher measures fasting blood level of glucose of 100 participants. The mean blood sugar level was measured as 110 mg/dl. The standard deviation was 11 mg/dl. Calculate the coefficient of variance.",
    options: ["20%", "14%", "10%", "25%"],
    correctAnswer: 2,
    explanation: "Coefficient of variation = (SD/Mean) x 100 = $(11/110) \\times 100 = 10\\%$."
  },
  {
    id: "a10q15",
    text: "A researcher measures the height of 100 school going children for his study. What type of variable is 'height'?",
    options: ["Nominal", "Ordinal", "Continuous", "Discrete"],
    correctAnswer: 2,
    explanation: "Height is measured and can take any value including fractions within a range, so it is a continuous variable."
  },
  {
    id: "a10q16",
    text: "A chest physician observed the distribution of forced expiratory volume (FEV) in 100 Chronic Obstructive Pulmonary disease (COPD) patients and calculated a median value of 2.0 litres. The value of first and third quartile of the distribution was 1.5 litres and 3.0 litres respectively. Based on this data how many patients in the sample are expected to have a FEV between 1.5 and 3.0 litres?",
    options: ["100", "50", "25", "75"],
    correctAnswer: 1,
    explanation: "Q1 and Q3 enclose the middle 50% of observations, so 50% of 100 patients, i.e., 50, have FEV between 1.5 and 3.0 litres."
  },
  {
    id: "a10q17",
    text: "The average of the absolute deviations of the observations from the arithmetic mean is known as",
    options: ["Variance", "Inter-quartile range", "Mean deviation", "Standard deviation"],
    correctAnswer: 2,
    explanation: "Mean deviation is the average of the absolute deviations of observations from the mean. Variance uses squared deviations; SD is the square root of variance."
  },
  {
    id: "a10q18",
    text: "In a study, a researcher was interested in measuring the hemoglobin levels of 10 participants. The values are 10.0, 8.5, 12.0, 14.0, 11.5, 13.5, 9.0, 12.0, 11.3, 7.5. What is the mode of this distribution?",
    options: ["7.5", "12.0", "10.9", "14.0"],
    correctAnswer: 1,
    explanation: "The mode is the most frequent value; 12.0 occurs twice while all other values occur once."
  },
  {
    id: "a10q19",
    text: "All the following are examples of a nominal variable EXCEPT",
    options: ["Gender", "Age", "Place of residence", "Colour of eyes"],
    correctAnswer: 1,
    explanation: "Age is a quantitative (numerical) variable. Gender, place of residence and eye colour are unordered categories, i.e., nominal variables."
  },
  {
    id: "a10q20",
    text: "Which of the following is true about interquartile range?",
    options: [
      "It describes the middle value of the distribution",
      "It divides the distribution into two halves",
      "It covers the middle 50% of observations",
      "It is affected by the extreme values in the distribution"
    ],
    correctAnswer: 2,
    explanation: "The interquartile range ($Q_3-Q_1$) spans the 25th to 75th percentile, covering the middle 50% of observations, and is not affected by extreme values."
  },
  {
    id: "a10q21",
    text: "When the data set contains too many extreme values, the most representative average value is",
    options: ["Mean", "Mode", "Median", "Variance"],
    correctAnswer: 2,
    explanation: "The median depends only on the middle position, not on extreme magnitudes, so it is the most representative average when data contain many extreme values."
  },
  {
    id: "a10q22",
    text: "The age of ten pregnant women who visited an ANC clinic is given. What is the mean age of this group? (26, 31, 25, 26, 30, 27, 25, 32, 25 and 33 years).",
    options: ["45", "28", "25", "32"],
    correctAnswer: 1,
    explanation: "Sum of ages = 280; mean = $280/10 = 28$ years."
  },
  {
    id: "a10q23",
    text: "Which of the following is a relative measure of dispersion when comparing variables which are measured in different units?",
    options: ["Inter-quartile range", "Coefficient of variation", "Range", "Standard deviation"],
    correctAnswer: 1,
    explanation: "The coefficient of variation (SD/mean x 100) is unit-free, so it can compare dispersion of variables measured in different units."
  },
  {
    id: "a10q24",
    text: "The following scores were obtained by ten medical students in a quiz: (5, 3, 6, 8, 7, 8, 3, 11, 6, 3) What is the median score of this group?",
    options: ["3", "6", "8", "11"],
    correctAnswer: 1,
    explanation: "Sorted: 3, 3, 3, 5, 6, 6, 7, 8, 8, 11. With $n=10$, median = average of 5th and 6th values = $(6+6)/2 = 6$."
  },
  {
    id: "a10q25",
    text: "'Height of the students in a particular class measured in centimeter' is an example of a continuous variable",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "True. Height in centimetres is measured and can take any fractional value within a range, so it is continuous."
  },
  {
    id: "a10q26",
    text: "What is the appropriate measure of dispersion to report when median is reported as the measure of central tendency for a given set of data?",
    options: ["Standard deviation", "Inter-quartile range", "Variance", "Coefficient of variance"],
    correctAnswer: 1,
    explanation: "The median is paired with the interquartile range because both are percentile-based and robust to outliers; SD, variance and CV pair with the mean."
  },
  {
    id: "a10q27",
    text: "In the NCD clinic of a primary health Centre, fasting blood sugar (in g/dL) of 11 patients was measured. The following values were obtained - (85, 93, 104, 108, 105, 120, 129, 202, 160, 400, 410). What is the most appropriate measure of central tendency for this data?",
    options: ["Mean=120", "Median=120", "Mean=174.1", "Median=174.1"],
    correctAnswer: 1,
    explanation: "The data are skewed by extreme values (400, 410), so the median is most appropriate. Sorted, the 6th of 11 values is 120."
  },
  {
    id: "a10q28",
    text: "Which of the following about 'Range' is TRUE?",
    options: [
      "It indicates the way in which values cluster about a particular point",
      "It gives the number of observations bearing the same value",
      "It is the difference between the minimum and maximum value",
      "It shows the degree to which the mean value differs from its expected value."
    ],
    correctAnswer: 2,
    explanation: "Range is the difference between the maximum and minimum values of a data set."
  },
  {
    id: "a10q29",
    text: "In a survey, socio-economic status (SES) was collected in the following manner - 'Lower, Lower Middle, Upper Middle and Upper'. What type of variable is SES?",
    options: ["Ordinal", "Nominal", "Continuous", "Discrete"],
    correctAnswer: 0,
    explanation: "SES categories (lower to upper) have a clear rank order but unequal intervals, making SES an ordinal variable."
  },
  {
    id: "a10q30",
    text: "Body weights of 11 children who attended a pediatric OPD was measured. For this group, the first quartile, median, mean and third quartile were 8.5, 12, 11.9 and 16, respectively. Calculate the Interquartile Range.",
    options: ["3.5", "7.5", "0.1", "24.5"],
    correctAnswer: 1,
    explanation: "IQR = $Q_3 - Q_1 = 16 - 8.5 = 7.5$."
  },
  {
    id: "a10q31",
    text: "When the dataset contains too many extreme values, the most representative average value is..",
    options: ["Mean", "Mode", "Median", "Variance"],
    correctAnswer: 2,
    explanation: "The median depends only on the rank order of values, not their magnitude, so extreme values (outliers) barely affect it. The mean is pulled toward extremes, making the median the most representative average for skewed data."
  },
  {
    id: "a10q32",
    text: "Ages of ten pregnant women who visited an ANC clinic are given below. What is the mean age of this group? (26, 31, 25, 26, 30, 27, 25, 32, 25 and 33 years).",
    options: ["45", "28", "25", "32"],
    correctAnswer: 1,
    explanation: "The sum of the ten ages is 280, and dividing by 10 gives a mean of 28 years. 25 is the mode, and 45 is impossible because a mean cannot exceed the maximum value."
  },
  {
    id: "a10q33",
    text: "Which of the following is a relative measure of dispersion when comparing variables which are measured in different units?",
    options: ["Inter-quartile range", "Coefficient of variation", "Range", "Standard deviation"],
    correctAnswer: 1,
    explanation: "The coefficient of variation (SD/mean x 100) is unit-free, so it can compare dispersion of variables measured in different units."
  },
  {
    id: "a10q34",
    text: "(5, 3, 6, 8, 7, 8, 3, 11, 6, 3) What is the median score of this group?",
    options: ["3", "6", "8", "11"],
    correctAnswer: 1,
    explanation: "Sorted, the data are 3, 3, 3, 5, 6, 6, 7, 8, 8, 11. With n = 10 (even), the median is the average of the 5th and 6th values: (6 + 6)/2 = 6."
  },
  {
    id: "a10q35",
    text: "'Height of the students in a particular class' is an example of a continuous variable",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "Height can take any value within a range, including fractions (e.g., 160.5 cm), limited only by measurement precision. Measured variables like this are continuous, unlike counted (discrete) variables."
  },
  {
    id: "a10q36",
    text: "What is the appropriate measure of dispersion to report when median is reported as the measure of central tendency for a given set of data?",
    options: ["Standard deviation", "Inter-quartile range", "Variance", "Coefficient of variance"],
    correctAnswer: 1,
    explanation: "The median is paired with the interquartile range because both are percentile-based and robust to outliers; SD, variance and CV pair with the mean."
  },
  {
    id: "a10q37",
    text: "In the NCD clinic of a primary health centre, haemoglobin (in g/dL) of 10 patients was measured. The following values were obtained 5,4,9,8,4,8,3,7,7,8. What is the mean haemoglobin of this group?",
    options: ["5.0", "6.3", "7", "8"],
    correctAnswer: 1,
    explanation: "The ten haemoglobin values add up to 63 g/dL. Dividing by 10 gives a mean of 6.3 g/dL. The median is 7 and the mode is 8."
  },
  {
    id: "a10q38",
    text: "Which of the following about 'Range' is TRUE?",
    options: [
      "It indicates the way in which values cluster about a particular point",
      "It gives the number of observations bearing the same value",
      "It is the difference between the minimum and maximum value",
      "It shows the degree to which the mean value differs from its expected value"
    ],
    correctAnswer: 2,
    explanation: "Range is the difference between the maximum and minimum values of a data set."
  },
  {
    id: "a10q39",
    text: "In a survey, socio-economic status (SES) was collected in the following manner - 'Lower, Lower Middle, Upper Middle and Upper'. What type of variable is SES?",
    options: ["Ordinal", "Nominal", "Continuous", "Discrete"],
    correctAnswer: 0,
    explanation: "SES categories (lower to upper) have a clear rank order but unequal intervals, making SES an ordinal variable."
  },
  {
    id: "a10q40",
    text: "Calculate the interquartile range of the following body weight (in Kg) of children who attended a paediatric OPD. (7, 12, 11, 13.5, 8.5, 16, 7, 11, 12)",
    options: ["7, 16", "8.5, 12", "11, 12", "12, 13.5"],
    correctAnswer: 1,
    explanation: "Sorted: 7, 7, 8.5, 11, 11, 12, 12, 13.5, 16. The median is 11. The median of the lower half gives Q1 = 8.5 and the median of the upper half gives Q3 = 12, so the IQR runs from 8.5 to 12 (width 3.5 kg)."
  },
  {
    id: "a10q41",
    text: "Square root of the average of the squared deviations of the observations from the arithmetic mean is known as",
    options: ["Variance", "Inter-quartile range", "Mean deviation", "Standard deviation"],
    correctAnswer: 3,
    explanation: "Standard deviation is the square root of the variance, which is the average of the squared deviations from the mean. Taking the root returns the measure to the original units."
  },
  {
    id: "a10q42",
    text: "The age of twelve pregnant women who visited an ANC clinic is given. 26, 31, 25, 26, 30, 27, 25, 32, 25, 33, 34, 21. What is the mean age of this group?",
    options: ["28 years", "27.9 years", "25 years", "30 years"],
    correctAnswer: 1,
    explanation: "The twelve ages add up to 335. Dividing by 12 gives 27.92, which rounds to 27.9 years. 28 is the mean of only the first ten values."
  },
  {
    id: "a10q43",
    text: "Variance is always preferred to calculate deviations from",
    options: ["Mode", "Variance", "Median", "Mean"],
    correctAnswer: 3,
    explanation: "Variance is defined as the average squared deviation from the arithmetic mean. The sum of squared deviations is smallest around the mean (the least-squares property)."
  },
  {
    id: "a10q44",
    text: "The following scores were obtained by nine medical students in a quiz: 7, 3, 6, 9, 4, 8, 10, 12, 11. What is the median score of this group?",
    options: ["3", "8", "8.5", "11"],
    correctAnswer: 1,
    explanation: "Sorted: 3, 4, 6, 7, 8, 9, 10, 11, 12. With n = 9 (odd), the median is the (n+1)/2 = 5th value, which is 8."
  },
  {
    id: "a10q45",
    text: "State whether true or false. 'Height of a student in a particular class is 60 inches' is an example of a continuous variable.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation: "Height is a continuous variable because it can take any value within a range. Recording one observation as a whole number (60 inches) is just rounding and does not make the variable discrete."
  },
  {
    id: "a10q46",
    text: "Which one of the following measurements does not divide a set of observations into equal parts?",
    options: ["Quartiles", "Standard deviation", "Percentiles", "Median"],
    correctAnswer: 1,
    explanation: "The median, quartiles and percentiles are partition values that divide ordered data into 2, 4 and 100 equal parts. Standard deviation instead measures how spread out the values are around the mean."
  },
  {
    id: "a10q47",
    text: "In the NCD clinic of a primary health centre, haemoglobin (in g/dL) of 15 patients was measured. The following values were obtained: 5,4,9,8,4,8,8,7,7,8, 10, 12, 6, 5, 4. What is the mean hemoglobin of this group?",
    options: ["5 g/dL", "6 g/dL", "7 g/dL", "8 g/dL"],
    correctAnswer: 2,
    explanation: "The fifteen haemoglobin values add up to 105 g/dL. Dividing by 15 gives a mean of 7 g/dL. The mode is 8 g/dL."
  },
  {
    id: "a10q48",
    text: "Which of the following about 'Range' is true?",
    options: [
      "It indicates the way in which values cluster about a particular point",
      "It gives the number of observations bearing the same value",
      "It is the difference between the minimum and maximum value",
      "It shows the degree to which the mean value differs from its expected value."
    ],
    correctAnswer: 2,
    explanation: "Range is the difference between the maximum and minimum values. It is the simplest measure of dispersion but is very sensitive to outliers. The other options describe central tendency, frequency or bias."
  },
  {
    id: "a10q49",
    text: "If the mean is 25 and the standard deviation is 5 then coefficient of variation is",
    options: ["100%", "25%", "20%", "None of these"],
    correctAnswer: 2,
    explanation: "Coefficient of variation = (SD / mean) x 100 = (5/25) x 100 = 20%. It is a unit-free measure of relative dispersion."
  },
  {
    id: "a10q50",
    text: "All the following are examples of a nominal variable EXCEPT",
    options: ["Gender", "Age", "Place of residence", "Colour of eyes"],
    correctAnswer: 1,
    explanation: "Age is a quantitative (numerical) variable. Gender, place of residence and eye colour are unordered categories, i.e., nominal variables."
  }
];