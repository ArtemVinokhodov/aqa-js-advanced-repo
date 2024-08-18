// Завдання 2: Визначення рівня успішності студента використовуючи конструкцію switch/case

const AVERAGE_GRADE = 80;

switch (true) {
	case AVERAGE_GRADE <= 60:
		console.log('Unsatisfactory');
		break;
	case AVERAGE_GRADE <= 70:
		console.log('Satisfactory');
		break;
	case AVERAGE_GRADE <= 80:
		console.log('Good');
		break;
	case AVERAGE_GRADE <= 90:
		console.log('Very Good');
		break;
	case AVERAGE_GRADE <= 100:
		console.log('Excellent');
		break;
	default:
		console.log('Invalid grade');
}
