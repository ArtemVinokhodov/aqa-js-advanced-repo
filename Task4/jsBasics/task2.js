function concatenateStrings() {
	let person1 = 'Tom';
	let person2 = 'Johns';

	let createConcat = 'Hello, ' + person1 + ' and ' + person2 + '!';
	console.log(createConcat);

	let createTemplate = `Hello, ${person1} and ${person2}!`;
	console.log(createTemplate);
}

concatenateStrings();
