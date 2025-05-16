// "Write a JavaScript function that takes a two-digit number and determines if it's the largest of two possible digit swaps
// Ex:- If we give 43 as user input then it will return false because swapping 43 gives us 34, and 43 > 34."
function isLargestSwap(num) {
  if (num < 10 || num > 99) {
    return false;
  }
  const tens = Math.floor(num / 10);
  const ones = num % 10;
  const swappedNum = ones * 10 + tens;

  return num >= swappedNum;
}
console.log(isLargestSwap(52));
