/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let size = arr.length;
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += arr[i];
  }

  let odds = arr.map((x, i) => i % 2 !== 0);
};

let arr = [1, 4, 2, 5, 3];

let odds = arr.filter((i, x) => i % 2 !== 0);

console.log(odds);
