const binarySearch = function (arr, key) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);
  assending = arr[0] < arr[right];
  while (left <= right) {
    if (arr[mid] === key) {
      return mid;
    }
    if (assending) {
      if (arr[mid] > key) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (arr[mid] < key) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    mid = Math.floor((left + right) / 2);
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));
console.log(binarySearch([9, 8, 7, 6, 5, 4, 3, 2, 1], 6));
