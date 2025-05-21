// "JavaScript program to display multiplication tables using user input integer value.
// Ex. User Input: 2
//      2 * 1 = 2
//      2 * 2 = 4
//      ….
//      2 * 10 = 20"
const number = parseInt(prompt("Enter an integer: "));
for (let i = 1; i <= 10; i++) {
  const result = i * number;
  console.log(`${number} * ${i} = ${result}`);
}
