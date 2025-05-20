// Write a JavaScript function that accepts a String with space-separated numbers and returns the highest and lowest number (as a string).
// Ex. User Input : "1 2 3 4 5"
//       Output : "5 1"
function highLow(str) {
  let arr = str.split(" ");
  let max = Math.max(...arr); // Strings auto-convert to numbers
  let min = Math.min(...arr);
  return `${max} ${min}`;
}

console.log(highLow("1 2 3 4 5"));
