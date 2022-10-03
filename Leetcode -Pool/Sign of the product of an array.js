var arraySign = function (nums) {
  let prod = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) return 0;
    prod *= nums[i];
  }

  return prod > 0 ? 1 : -1;
};

let a = [-1, 1, -1, 1, -1];
console.log(arraySign(a));
