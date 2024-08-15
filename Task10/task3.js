// Завдання 3

// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити

async function someFunctionTodo() {
  try {
    const responseTodo = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    return await responseTodo.json();
  } catch (error) {
    console.error("TODO async/await error", error);
  }
}

async function someFunctionUser() {
  try {
    const responseUser = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    return await responseUser.json();
  } catch (error) {
    console.error("USER async/await error", error);
  }
}

async function asyncAwait() {
  try {
    const [user, todo] = await Promise.all([
      someFunctionUser(),
      someFunctionTodo(),
    ]);
    console.log("USER PromiseAll asyncAwait:", user);
    console.log("TODO PromiseAll asyncAwait:", todo);

    const whoFirst = await Promise.race([
      someFunctionUser(),
      someFunctionTodo(),
    ]);
    console.log("PromiseRace asyncAwait:", whoFirst);
  } catch (error) {
    console.log("Error:", error);
  }
}

asyncAwait();
