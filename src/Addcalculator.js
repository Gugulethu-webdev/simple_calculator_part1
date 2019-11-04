//addition part of my actual calculator.
/*
function add_function(a, b) {
  return a + b;
}
module.exports = { add_function };
*/

function addBunch(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}
module.exports = { addBunch };

// multiplication part of my actual calculator.
// this below function multiplies only two numbers
/*function multiply_function(a, b) {
  return a * b;
}
module.exports = { multiply_function };*/

// this function below can multiply more than two numbers
/*function multiplyBunch(...args) {
  let product = 1;
  for (let i = 0; i < args.length; i++) {
    product *= args[i];
  }
  return product;
}
module.exports = { multiplyBunch };
*/
