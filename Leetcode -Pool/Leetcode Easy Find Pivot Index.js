/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sum1 = 0,
    sum2 = 0;
  let index = 0;

  if (nums[0] === 0 && nums.length === 1) return 0;

  for (let i = 1; i < nums.length; i++) {
    sum1 += nums[i];

    if (sum1 == 0 && i === nums.length - 1) {
      return 0;
    }
  }

  sum1 = 0;

  for (let i = 0; i < nums.length; i++) {
    sum1 += nums[i];
    index = i + 1;
    for (let j = i + 2; j < nums.length; j++) {
      sum2 += nums[j];
    }
    console.log(sum1, " ", sum2, " ", index);

    if (sum1 === sum2 && index < nums.length) {
      return index;
    }
    sum2 = 0;
  }

  return -1;
};
