var containsDuplicate = function (nums) {
  let size = nums.length - 1;

  let map = {};
  for (let i = 0; i < size; i++) {
    map[nums[i]] = nums[i];
    console.log(nums[i - 1], nums[i]);
    if (map[nums[i]] == nums[i]) {
      return true;
    }
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 1]));
