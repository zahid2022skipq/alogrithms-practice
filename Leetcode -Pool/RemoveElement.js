var removeElement = function (nums, val) {
  var size = nums.length;
  for (var i = 0; i < size; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i--;
    }
    //console.log("i = ", i, nums);
  }
  return nums;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
// var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// a.splice(2, 1);
// console.log(a);
// a.splice(4, 1);
// console.log(a);
// a.splice(7, 1);
// console.log(a);
