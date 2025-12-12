const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  return arr.reduce((accumulator,current) => accumulator + current,0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator,current) => accumulator * current);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let current = 1;
  for(let i = a; i>0; i--) {
    current *= i;
  }
  return current;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
