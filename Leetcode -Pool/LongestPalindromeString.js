/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length === 1) return s;
  let s1 = s[0];
  let largestS = "";

  let i = 0,
    j = 1;

  while (i < s.length || j < s.length) {
    s1 += s[j];

    let rev = s1.split("").reverse().join("");

    if (rev === s1) {
      largestS = s1.length >= largestS.length ? s1 : largestS;
    }

    if (j < s.length) {
      j++;
    }

    if (j === s.length) {
      i++;
      j = i + 1;
      s1 = s[i];
    }

    if (i === s.length) {
      return largestS !== "" ? largestS : s[0];
    }
  }
  return largestS !== "" ? largestS : s[0];
};

// ***********************    OPTIMIZED    ********************************** \\

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let max = "";
  for (let i = 0; i < s.length; i++) {
    let left = helper(i, i, s);
    let right = helper(i, i + 1, s);
    let currMax = left.length >= right.length ? left : right;
    max = currMax.length > max.length ? currMax : max;
  }

  return max;
};

function helper(left, right, s) {
  let curr = "";

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    curr = s.substring(left, right + 1);
    left -= 1;
    right += 1;
  }

  return curr;
}
