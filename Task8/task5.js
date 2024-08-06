// Завдання 5
// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
  { name: "Tom", email: "tomEmail@emil.com", age: 100 },
  { name: "John", email: "johnEmail@emil.com", age: 150 },
];

for (let user of users) {
  let { name, email, age } = user;
  console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
