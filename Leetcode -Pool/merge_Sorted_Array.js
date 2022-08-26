var merge = function (nums1, m, nums2, n) {
  if (n == 0) {
    return nums1;
  }

  if (m == 0) {
    return nums2;
  }

  for (var i = 0; i < m; i++) {
    nums1.push(nums2[i]);
  }

  for (var i = 0; i < nums1.length; i++) {
    for (var j = 0; j < nums1.length - 1; j++) {
      if (nums1[i] < nums1[j]) {
        let temp = nums1[i];
        nums1[i] = nums1[j];
        nums1[j] = temp;
      }
    }
  }
  for (var i = 0; i < nums1.length; i++) {
    if (nums1[i] == 0) {
      nums1.splice(i, 1);
      i--;
    }
  }
  return nums1;
};

//console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

var merge2 = function (nums1, m, nums2, n) {
  let k = m + n - 1;
  let i = m - 1;
  let j = n - 1;

  while (j >= 0) {
    if (nums2[j] <= nums1[i]) {
      nums1[k] = nums1[i];
      k--;
      i--;
    } else {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }
  return nums1;
};
