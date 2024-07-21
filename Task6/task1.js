// Завдання 1

// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

// 1.1 function declaration:
function sumOfRectangleDec(width, height) {
  return width * height;
}

console.log(sumOfRectangleDec(5, 10));

// 1.2 function expression:
const sumOfRectangleExp = function (width, height) {
  return width * height;
};

console.log(sumOfRectangleExp(2, 20));

// 1.3 arrow function:
const sumOfRectangleArr = (width, height) => {
  return width * height;
};

console.log(sumOfRectangleArr(3, 30));
