const pair_with_targetsum = function (arr, target_sum) {
  // TODO: Write your code here
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] + arr[end] == target_sum) {
      return [start, end];
    }
    if (arr[start] + arr[end] > target_sum) {
      end--;
    } else if (arr[start] + arr[end] < target_sum) {
      start++;
    }
  }
  return [-1, -1];
};

console.log(pair_with_targetsum([1, 2, 3, 4, 6], 6));
console.log(pair_with_targetsum([2, 5, 9, 11], 11));
