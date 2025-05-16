// "Write a JavaScript function that takes a string and returns the count of vowels contained within it.
// Ex. User Input : Celebration  ➙ 5"
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Celebration"));
