var lengthOfLongestSubstring = function (s) {
  if (s.length === 1) return 1;
  let freq = new Set(s[0]);
  let max = 0;
  let l = 0,
    r = 1;

  while (r < s.length) {
    if (!freq.has(s[r])) {
      freq.add(s[r]);
      r++;
      max = Math.max(max, r - l);
    } else {
      freq.delete(s[l]);
      l++;
      freq.add([s[r]]);
    }
  }

  return max;
};
