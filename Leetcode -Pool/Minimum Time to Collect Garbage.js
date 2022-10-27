/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var charCount = function (word) {
  const ans = { G: 0, M: 0, P: 0 };
  for (const ch of word) {
    ans[ch]++;
  }
  return ans;
};

var garbageCollection = function (garbage, travel) {
  const trucks = { G: 0, M: 0, P: 0 };
  let time = 0;

  for (let i = 0; i < garbage.length; i++) {
    const freq = charCount(garbage[i]);
    Object.keys(trucks).forEach((t) => {
      time += freq[t];
      if (freq[t]) {
        for (let j = trucks[t] + 1; j <= i; j++) {
          trucks[t]++;
          time += travel[j - 1];
        }
      }
    });
  }

  return time;
};

console.log(garbageCollection(["G", "P", "GP", "GG"], [2, 4, 3]));
