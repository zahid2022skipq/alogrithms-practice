var lengthOfLIS = function (nums) {
  let arr = new Array(nums.length);
  arr.fill(1);
  //   console.log(arr);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && arr[i] <= arr[j]) {
        arr[i] = 1 + arr[j];
      }
    }
  }

  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
