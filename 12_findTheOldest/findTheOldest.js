const findTheOldest = function(people) {
	let sortedPeople = people.sort( (a, b) => {
		const ageA = a.yearOfDeath ? a.yearOfDeath - a.yearOfBirth : (new Date).getFullYear() - a.yearOfBirth;
		const ageB = b.yearOfDeath ? b.yearOfDeath - b.yearOfBirth : (new Date).getFullYear() - b.yearOfBirth;

		return ageA > ageB ? -1 : 1;
	})

	return sortedPeople[0];
};


// Do not edit below this line
module.exports = findTheOldest;
