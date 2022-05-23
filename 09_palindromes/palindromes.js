const palindromes = function (string) {
	// get an array of only letters
	const characters = string
			.toLowerCase()
			.split('')
			.filter(character => /[a-z]/.test(character));

	let length = characters.length;
	let palindrome = true;

	for (let i = 0; i < length / 2; i++) {
		// console.log(characters[i], characters[length - (i + 1)])
		let character1=characters[i];
		let character2=characters[length - (i + 1)];
		if (character1 != character2) {
			palindrome = false;
		}
	}
	return palindrome;
};


// Do not edit below this line
module.exports = palindromes;
