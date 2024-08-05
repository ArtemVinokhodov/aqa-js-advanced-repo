// Завдання 3
// Створіть об'єкт car1 з такими властивостями:
// brand: рядок, представляє марку автомобіля.
// model: рядок, представляє модель автомобіля.
// year: число, представляє рік випуску автомобіля.
// Створіть об'єкт car2 з такими властивостями:
// brand: рядок, представляє марку автомобіля.
// model: рядок, представляє модель автомобіля.
// owner: число, представляє рік випуску автомобіля.
// Створіть об'єкт car3. Використайте оператор spread щоб додати всі властивості що є в car1 та car2 до об’єкту car3.
// Виведіть об'єкт car3 в консоль.

const car1 = {
  brand: "Some brand Car1",
  model: "Some model Car1",
  year: 1980,
};

const car2 = {
  brand: "Some brand Car2",
  model: "Some model Car2",
  owner: 1990,
};

const car3 = { ...car1, ...car2 };
console.log(car3);
