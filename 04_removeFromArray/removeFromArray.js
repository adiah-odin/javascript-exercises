const removeFromArray = function(array, ...searchParams) {
	searchParams.forEach(term => {
		let index;
		do {
			index = array.indexOf(term);
			if (index != -1) {
				array.splice(index, 1);
			}
		} while (index != -1)
	})
	return array;

};

removeFromArray([1, 2, 3, 4], 3)

// Do not edit below this line
module.exports = removeFromArray;
