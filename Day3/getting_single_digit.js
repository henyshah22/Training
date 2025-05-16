// "Create a function that takes two or more numbers as user input and adds them together to get a new number. The function then repeatedly multiplies the digits of the new number by each other, giving a new number, until the product is returned only 1 digit long. Return the final value.
// EX. User input - ""16 28"" then -- 16 + 28 = 44 after this it will add digits like this --4 * 4 = 16 until it gets only single digit as value-- 1 * 6 = 6"
function reduceToSingleDigit(a, b) {
  let sum = a + b;
  while (sum >= 10) {
    let product = 1;
    let digits = sum.toString();
    for (let i = 0; i < digits.length; i++) {
      product *= parseInt(digits[i]);
    }
    sum = product;
  }
  return sum;
}
console.log(reduceToSingleDigit(16, 28));
