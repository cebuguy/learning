const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let result = 0;
  arr.forEach(element => result += element);
  return result;
};

const multiply = function(arr) {
  let sum = 1;
  arr.forEach(element => sum *= element);
  return sum;
};

const power = function(num1,num2) {
	return num1**num2;
};

const factorial = function(num) {
	let sum = 1;
  for(let i = num; i > 0; i-- ) {
    if(num === 0) break;
    sum *= num;
    num--;
    console.log(sum);
    console.log(i);
}
return sum;
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
