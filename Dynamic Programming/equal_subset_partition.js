function can_partition(arr) {
  let parts = [];

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  sum = sum / 2;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] == sum) {
      }
    }
  }
}

console.log(can_partition([1, 2, 3, 4]));
console.log(can_partition([1, 1, 1, 4, 5, 4, 4, 4]));
