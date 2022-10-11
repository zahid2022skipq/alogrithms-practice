/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let t = "";
  let chars = "";
  let sSize = s.length;

  for (let i = 0; i < s.length; i++) {
    t += s[i];
    if (t.length === sSize) return false;
    for (let j = 0; j < sSize; j++) {
      chars += t;
      if (chars.length >= sSize) break;
    }
    if (chars === s) return true;

    chars = "";
  }

  return false;
};
