var longestCommonPrefix = function (strs) {
  let size = strs.length;
  let index = 0;
  let currentChar = strs[index]?.[0];
  let str = "";

  for (let i = 0; i < size; i++) {
    const character = strs[i];
    if (!character?.[index]) return str;
    if (character[index] !== currentChar) return str;

    if (i === size - 1) {
      i = 0;
      str += currentChar;
      index++;
      currentChar = strs[0]?.[index];
    }
  }

  return str;
};
