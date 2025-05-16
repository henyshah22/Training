// write a Javascript program that takes a number as its argument and returns an array of all its factors.
// Ex. 12 ➞ [1, 2, 3, 4, 6, 12]
//     4 ➞ [1, 2, 4]
function getFactors(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}
console.log(getFactors(12));
console.log(getFactors(4));
