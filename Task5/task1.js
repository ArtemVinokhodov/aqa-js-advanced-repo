// Завдання 1: Визначення рівня успішності студента

const AVERAGE_GRADE = 80;

if (AVERAGE_GRADE < 60) {
  console.log("Unsatisfactory");
} else if (AVERAGE_GRADE <= 70) {
  console.log("Satisfactory");
} else if (AVERAGE_GRADE <= 80) {
  console.log("Good");
} else if (AVERAGE_GRADE <= 90) {
  console.log("Very Good");
} else if (AVERAGE_GRADE <= 100) {
  console.log("Excellent");
}
