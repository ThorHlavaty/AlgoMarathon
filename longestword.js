function longestWord(aString) {
  aString = aString.replace(/[^a-zA-Z\d\s:]/g, "");
  aString = aString.split(" ");
  let longest = 0;
  aString.forEach((element) => {
    if (element.length > longest) {
      longest = element.length;
    }
  });
  return longest;
}

console.log(longestWord("Hello, how are you friend?"));
