var lengthOfLastWord = function (s) {
  let count = 0;
  s = s.trim();
  if (s.length === 1) return 1;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == " ") {
      break;
    } else {
      count++;
    }
  }

  return count;
};

console.log(lengthOfLastWord("this is just a simple program"));
console.log(lengthOfLastWord("this is just a simple program  "));
console.log(lengthOfLastWord("    day"));
