// Write a JavaScript function that accepts a String with space-separated numbers and returns the highest and lowest number (as a string).
// Ex. User Input : "1 2 3 4 5"
//       Output : "5 1"
function highAndLow(numbers) {
  const nums = numbers.split(" ");
  let highest = parseInt(nums[0]);
  let lowest = parseInt(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    const num = parseInt(nums[i]);
    if (num > highest) {
      highest = num;
    }
    if (num < lowest) {
      lowest = num;
    }
  }
  return `${highest} ${lowest}`;
}
