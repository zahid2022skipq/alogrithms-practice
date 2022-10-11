/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let hSize = haystack.length;
  let nSize = needle.length;
  if (hSize < nSize || (hSize === nSize && haystack !== needle)) return false;
  if (haystack === needle) return true;
  let i = 0;
  let j = 0;
  let checker = 0;
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      for (let k = i; k <= i + nSize; k++) {
        if (haystack[k] !== needle[k]) {
          checker = 0;
          break;
        }
        checker = 1;
      }

      if ((checker = 1)) return i;
    }
    j++;
    i++;
  }

  return -1;
};
