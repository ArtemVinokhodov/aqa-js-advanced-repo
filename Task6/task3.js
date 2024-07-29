// Завдання 3

// Створіть функцію divide, яка приймає два параметри: numerator і denominator та повертає як результат виконання число отримане від ділення.
// У функції треба поділити numerator на denominator і повернути результат.
// Додайте валідацію в функції. У разі,
// якщо denominator дорівнює 0
// або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
// Викличте функцію divide з різними значеннями numerator і denominator, включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.
// Огорніть кожен окремий виклик функції divide в try…catch.Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.

function divide(numerator, denominator) {
    try {
        if (typeof numerator !== 'number' || typeof denominator !== 'number') {
            throw new Error("Both arguments must be numbers.");
        }
        if (denominator === 0) {
            throw new Error("Cannot be zero.");
        }
        return console.log(numerator / denominator);
    } catch (error) {
        console.log(`${error}`);
    } finally {
        console.log("Mission completed");
    }
}

divide(10, 2);
divide(10, 0);
divide(10, 'a');
divide(10, 5);
