var findMaxConsecutiveOnes = function (nums) {
  var max = 0;
  var newMax = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      max++;
      newMax = Math.max(max, newMax);
    } else {
      max = 0;
    }
  }
  return newMax;
};

var findMaxConsecutiveOnesOpt = function (nums) {
  var max = 0;
  var newMax = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      max++;
    } else {
      max = 0;
    }

    if (max > newMax) {
      newMax = max;
    }
  }
  return newMax;
};
