const reverseString = function(string) {
	const contents = [...string];
	// let contents = Array.from(string);
	let reversedContents = [];

	for (let i = 1; i <= contents.length; i++) {
		let index = contents.length-i;
		reversedContents.push(contents[index]);
	}

	return reversedContents.join('');
};

reverseString('test')

// Do not edit below this line
module.exports = reverseString;
