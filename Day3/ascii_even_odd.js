function asciiFormat(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    let code = char.charCodeAt(0);

    if (char === " ") {
      result += " ";
    } else if (code % 2 === 0) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }
  return result;
}
console.log(asciiFormat("THE LITTLE MERMAID"));
