function mimicRightShift(number, shiftBy) {
  return Math.floor(number / Math.pow(2, shiftBy));
}
console.log(mimicRightShift(80, 3));
console.log(mimicRightShift(-24, 2));
