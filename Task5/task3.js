// Завдання 3: Генерація таблиці множення

const NUMBER = 5;

// for
for (let i = 1; i < 11; i++) {
  let element = NUMBER * i;
  console.log(`${NUMBER} x ${i} = ${element}`);
}

console.log("");

// while
let count = 1;
while (count < 11) {
  let element = NUMBER * count;
  console.log(`${NUMBER} x ${count} = ${element}`);
  count++;
}
