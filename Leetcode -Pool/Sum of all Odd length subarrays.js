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

  let i = 0,
    j = 2;
  let track = 2;

  while (track < size) {
    if (track >= size) {
      break;
    }

    if (j === size - 1) {
      track += 2;
      i = 0;
      j = track;
    }
    sum += arr[i];
    sum += arr[j];
    i++;
    j++;
  }
  return sum;
};

console.log(sumOddLengthSubarrays([1, 2, 3, 4, 5]));
