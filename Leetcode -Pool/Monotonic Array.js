var isMonotonic = function (numa) {
  let flag = 0; //increasing - 1; decreasing -2
  if (numa.length <= 1) return true;

  for (let i = 1; i < numa.length; i++) {
    if (numa[i] > numa[i - 1]) {
      if (flag === 2) return false;
      flag = 1;
    } else if (numa[i] < numa[i - 1]) {
      if (flag === 1) return false;
      flag = 2;
    }
  }

  return true;
};
