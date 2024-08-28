// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу

// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// Copy code
// <https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// Copy code
// <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. Присвойте значення отримані від цих виразів до змінних

function someFunctionTodo() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		.then((value) => {
			console.log('TODO:', value);
			return value;
		})
		.catch((error) => console.error('catch error todo:', error));
}

function someFunctionUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((response) => response.json())
		.then((value) => {
			console.log('USER:', value);
			return value;
		})
		.catch((error) => console.error('catch error user:', error));
}

Promise.all([someFunctionUser(), someFunctionTodo()])
	.then((results) => {
		const [user, todo] = results;
		console.log('USER PromiseAll:', user);
		console.log('TODO PromiseAll:', todo);
	})
	.catch((error) => console.error('Error with Promise.all:', error));

Promise.race([someFunctionUser(), someFunctionTodo()])
	.then((result) => {
		console.log('PromiseRace:', result);
	})
	.catch((error) => console.error('Error with Promise.race:', error));
