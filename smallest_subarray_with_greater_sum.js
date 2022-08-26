const smallest_subarray_sum = function (s, arr) {
  var minLength = Infinity;
  var windowSum = 0;
  var windowStart = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= s) {
      return 1;
    }

    windowSum += arr[i];
    //maxLen = end - start;
    while (windowSum > s) {
      minLength = Math.min(minLength, i - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }

    // console.log("LAST- WINDOW SUM: ", windowSum);
  }
  return minLength == Infinity ? 0 : minLength;
};

console.log(smallest_subarray_sum(7, [3, 1, 2, 1, 5, 6, 4, 3]));
console.log(smallest_subarray_sum(4, [3, 1, 2, 1, 5, 6, 4, 3]));
console.log(smallest_subarray_sum(8, [3, 1, 2, 1, 5, 6, 4, 3]));
console.log(smallest_subarray_sum(15, [3, 1, 2, 1, 5, 7, 4, 3]));
console.log(smallest_subarray_sum(20, [1, 1, 1, -4, 1, 1, 1, 1]));
