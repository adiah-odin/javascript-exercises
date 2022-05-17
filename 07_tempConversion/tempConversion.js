// Function to round to a log of ten
function decimalAdjust(type, value, exp) {
  // if the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math[type](value);
  }
  value = +value;
  exp = +exp;

  // If the value is not a number or the exp is not an integer...
  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0 )) {
    return NaN;
  }

  // Shift
  value = value.toString().split('e');
  value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] -exp) : -exp)));

  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

const round10 = (value, exp) => decimalAdjust('round', value, exp);


const ftoc = function(tempF) {
  // (f -32 ) * (5/9)
  let tempC = (tempF - 32) * (5 / 9);
  return round10(tempC, -1);
};

const ctof = function(tempC) {
  // c * 9/5 + 32
  let tempF = tempC * (9 / 5) + 32;
  return round10(tempF, -1);

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
