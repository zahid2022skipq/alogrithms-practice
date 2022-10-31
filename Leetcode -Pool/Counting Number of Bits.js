/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let ans = [];

  for (let i = 0; i <= n; i++) {
    let t = i.toString(2);
    let count = 0;
    for (m of t) {
      if (m === "1") {
        count++;
      }
    }
    ans.push(parseInt(count));
  }

  return ans;
};

//Optimized Solution

var countBits = function (n) {
  if (n === 0) return [0];
  let dp = Array(n + 1).fill(0);
  let offset = 1;

  for (let i = 1; i < n + 1; i++) {
    if (i === offset * 2) {
      offset = i;
    }
    dp[i] = 1 + dp[i - offset];

    //console.log(i , offset)
  }
  //console.log(dp)
  return dp;
};
