var matrixReshape = function (nums, h, w) {
  const m = nums.length,
    n = nums[0].length;
  if (m * n !== h * w) return nums;
  const res = [];
  for (let i = 0; i < m * n; i++) {
    let r = Math.floor(i / w);
    if (!res[r]) res.push([]);
    res[r].push(nums[Math.floor(i / n)][i % n]);
  }
  return res;
};

var matrixReshape2 = function (nums, h, w) {
  const m = nums.length,
    n = nums[0].length;
  if (m * n !== h * w) return nums;
  const res = [];
  for (let i = 0, r = 0; r < m; r++) {
    for (let c = 0; c < n; c++, i++) {
      let rr = Math.floor(i / w);
      if (!res[rr]) res.push([]);
      res[rr].push(nums[r][c]);
    }
  }
  return res;
};
