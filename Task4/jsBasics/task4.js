function calculateCircleArea() {
	let radius = 5;
	let circleArea = Math.PI * Math.pow(radius, 2);
	console.log(`Circle area: ${circleArea.toFixed(2)}`);
}

calculateCircleArea();

function calculateRectangleArea() {
	let length = 10;
	let width = 7;
	let rectangleArea = length * width;
	console.log(`Rectangle area: ${rectangleArea}`);
}

calculateRectangleArea();

function calculateCylinderVolume() {
	let radius = 4;
	let height = 10;
	let cylinderVolume = Math.PI * Math.pow(radius, 2) * height;
	console.log(`Cylinder volume: ${cylinderVolume.toFixed(2)}`);
}

calculateCylinderVolume();
