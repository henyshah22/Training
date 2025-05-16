// Write a JavaScript function that accepts a String with space-separated numbers and returns the highest and lowest number (as a string).
// Ex. User Input : "1 2 3 4 5"
//       Output : "5 1"
function highLow(str) {
  let numbers = str.split(" ").map(Number);
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  return `${max} ${min}`;
}
console.log(highLow("1 2 3 4 5"));
