var nextGreaterElement = function (nums1, nums2) {
  let res = new Array(nums1.length);
  let map = new Map();

  for (let i = 0; i < nums1.length; i++) map.set(nums1[i], i);

  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) {
      let tmp = nums2[i];
      for (let j = i + 1; j < nums2.length; j++) {
        if (tmp < nums2[j]) {
          tmp = nums2[j];
          break;
        }
      }
      tmp !== nums2[i]
        ? (res[map.get(nums2[i])] = tmp)
        : (res[map.get(nums2[i])] = -1);
    }
  }

  return res;
};
