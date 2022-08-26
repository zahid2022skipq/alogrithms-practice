// brute-force
/*var maxProduct = function(nums) {
    let max = nums[0]
    for (let i = 0; i < nums.length; i++) {
        let product = 1
        for (let j = i; j < nums.length; j++) {
            product *= nums[j]
            max = Math.max(max, product)
        }
    }
    return max
}*/

// tabulation
var maxProduct = function (nums) {
  let maxProd = nums[0];
  let min = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const a = min * nums[i];
    const b = max * nums[i];

    min = Math.min(a, b, nums[i]);
    max = Math.max(a, b, nums[i]);

    maxProd = Math.max(maxProd, max);
  }
  return maxProd;
};
