var combinationSum4 = function (nums, target) {
  let dp = [];
  nums.sort((n1, n2) => n1 - n2);
  nums.forEach((n) => {
    dp[n] = 1;
  });

  for (let i = 1; i <= target; ++i) {
    let count = 0;
    for (let j = 0; j < nums.length && nums[j] < i; ++j) {
      count += dp[i - nums[j]];
    }

    dp[i] = dp[i] ? dp[i] + count : count;
  }

  return dp[target];
};

console.log(combinationSum4([1, 2, 3], 4));
