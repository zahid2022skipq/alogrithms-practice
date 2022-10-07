/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  //convert t and s to arrays and then sort them
  t = t.split("").sort();
  s = s.split("").sort();
  //loop over all ther characters of s and t
  for (let i = 0; i < t.length; i++) {
    //if any character is not matching return it
    if (s[i] !== t[i]) {
      return t[i];
    }
  }
  //if nothing returned in loop then it means last character is extra so return it
  return t[t.length - 1];
};
