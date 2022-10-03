/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  n = n.toString();
  let map = {};
  let sum = 0;
  while (true) {
    sum = 0;
    for (let num of n) {
      sum += Math.pow(parseInt(num), 2);
    }
    n = sum;
    n = n.toString();
    if (sum === 1) {
      return true;
    }
    if (map[sum] !== undefined) {
      return false;
    }
    if (map[sum] === undefined) {
      map[sum] = sum;
    }
  }
};
