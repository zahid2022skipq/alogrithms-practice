var letterCasePermutation = function (s, i = 0, arr = []) {
  if (i === s.length) {
    arr.push(s);
    return;
  }

  const char = s[i];
  if (isNaN(Number(char))) {
    // char is not a digit
    letterCasePermutation(
      s.slice(0, i) + char.toLowerCase() + s.slice(i + 1),
      i + 1,
      arr
    );
    letterCasePermutation(
      s.slice(0, i) + char.toUpperCase() + s.slice(i + 1),
      i + 1,
      arr
    );
  } else {
    letterCasePermutation(s, i + 1, arr);
  }

  return arr;
};

console.log(letterCasePermutation("ab"));
