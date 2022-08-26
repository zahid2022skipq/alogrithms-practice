const ceiling = function (arr, key) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((right + left) / 2);
  if (arr[left] <= 0) {
    return left;
  }

  while (left < right) {
    if (arr[mid] == key) {
      return arr[mid - 1];
    } else if (arr[mid] > key) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }

  return -1;
};

console.log(ceiling([1, 2, 3, 4, 5, 6, 7], 2));
