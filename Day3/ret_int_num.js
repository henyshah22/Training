// "Javascript program that will return an integer number corresponding to the amount of digits in the given integer num.
// Ex. num_of_digits(1000) ➞ 4
//      num_of_digits(12) ➞ 2"78
function counting(num) {
  return String(num).length;
}
let num1 = 1000;
let num2 = 12;
console.log(counting(num1));
console.log(counting(num2));
