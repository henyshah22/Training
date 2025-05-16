// Write a javascript program that returns `true` if the input string includes the string "ee".
function hasDoublee(str) {
  if (typeof str !== "string") {
    throw new Error("Input must be a string.");
  }
  return str.includes("ee");
}
console.log(hasDoublee("heniee"));
