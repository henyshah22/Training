// "Write a javascript program that takes in a number as a string n and returns the number without trailing and leading zeros.
// Ex. removeLeadingTrailing(""230.000"") ➞ ""230""
//      removeLeadingTrailing(""00402"") ➞ ""402"""
function removeLeadingTrailing(n) {
  return parseFloat(n).toString();
}
console.log(removeLeadingTrailing("230.000"));
console.log(removeLeadingTrailing("00402"));
