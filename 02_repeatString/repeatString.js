const repeatString = function(string, count) {
	let output = "";


	if (count >= 0) {
		for (i=0; i < count; i++) {
			output += string;
		}
		return output;
	} else {
		return "ERROR";
	}
};

// Do not edit below this line
module.exports = repeatString;
