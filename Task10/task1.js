// Завдання 1

// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент. Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд

function outputTExtAfterMilliseconds(someText, milliseconds) {
	setTimeout(() => {
		console.log(someText);
	}, milliseconds);
}

outputTExtAfterMilliseconds('text-text is wait 2 sec', 2000);
