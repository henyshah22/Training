// "Create a function that moves all capital letters to the front of a word.
// Ex. ""hApPy"" ➞  APhpy"""
// Sort the given string based on ASCII value.
function sortByASCII(str) {
  return str.split("").sort().join("");
}
console.log(sortByASCII("hApPy"));
