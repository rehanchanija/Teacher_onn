export const API_URL = "https://dc-backend-mocha.vercel.app";
//

export const schoolClasses = [
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
];

export const undergraduateDegrees = [
  "BA",
  "BSc",
  "BCom",
  "BBA",
  "BCA",
  "BTech",
  "BE",
  "LLB",
  "BArch",
  "BPharm",
  "BDS",
  "MBBS",
  "BEd",
];

export const postgraduateDegrees = [
  "MA",
  "MSc",
  "MCom",
  "MBA",
  "MCA",
  "MTech",
  "ME",
  "LLM",
  "MArch",
  "MPharm",
  "MD",
  "MS",
  "MEd",
];

export const professionalCourses = [
  "CA",
  "CS",
  "CFA",
  "ICWA",
  "Diploma",
  "PGDM",
  "PGD",
  "PhD",
];

export const subjectLevelMap = {
  Mathematics: [...schoolClasses, "BSc", "MSc"],
  Physics: [...schoolClasses, "BSc", "MSc"],
  Chemistry: [...schoolClasses, "BSc", "MSc"],
  Biology: [...schoolClasses, "BSc", "MSc", "MBBS"],
  History: [...schoolClasses, "BA", "MA"],
  Geography: [...schoolClasses, "BA", "MA"],
  "Political Science": [...schoolClasses, "BA", "MA"],
  Economics: [...schoolClasses, "BCom", "MCom"],
  "Computer Science": [...schoolClasses, "BCA", "MCA", "BTech", "MTech"],
  English: [...schoolClasses, "BA", "MA"],
  Law: ["LLB", "LLM"],
  Medicine: ["MBBS", "MD"],
  Engineering: ["BTech", "MTech"],
};
