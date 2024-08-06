// Завдання 2
// Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: число, представляє рік видання книги.
// Деструктуризуйте назву та автора книги з об'єкта book.
// Виведіть деструктуризовані змінні в консоль

const book = {
  title: "Some Book",
  author: "No name author",
  year: 1980,
};

console.log(book);

let { title, author, year } = book;
console.log(title);
console.log(author);
console.log(year);
