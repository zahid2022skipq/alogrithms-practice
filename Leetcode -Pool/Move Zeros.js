/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0,
    j = 1;

  while (j <= nums.length) {
    if (nums[i] === 0 && nums[j] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
    if (nums[j] === 0) {
      j++;
      continue;
    }
    i++;
    j++;
  }

  return nums;
};

let nums = [0, 1, 0, 3, 12];

console.log(moveZeroes(nums));
