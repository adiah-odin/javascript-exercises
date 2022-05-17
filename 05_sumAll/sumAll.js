const sumAll = function(num1, num2) {
	if (typeof(num1) != 'number' || typeof(num2) != 'number') {
		return 'ERROR';
	}

	if (num1 < 0 || num2 < 0) {
		return 'ERROR';
	}

	let smaller;
	let larger;
	let total = 0;

	if (num1 > num2) {
		larger = num1;
		smaller = num2;
	} else if (num1 < num2) {
		larger = num2;
		smaller = num1;
	} else {
		return num1;
	}

	for (let i = smaller; i <= larger; i++) {
		total += i;
	}

	return total;

};

let response = sumAll(1, 3);

// Do not edit below this line
module.exports = sumAll;
