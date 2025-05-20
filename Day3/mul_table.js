// "JavaScript program to display multiplication tables using user input integer value.

// Ex. User Input: 2

//      2 * 1 = 2

//      2 * 2 = 4

//      ….

//      2 * 10 = 20"

//  a way to read user input from the terminal
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a number: ", (n) => {
  n = parseInt(n);
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
  readline.close();
});
