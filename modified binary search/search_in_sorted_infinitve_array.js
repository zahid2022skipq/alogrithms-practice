class ArrayReader {
  constructor(arr) {
    this.arr = arr;
  }

  get(index) {
    if (index >= this.arr.length) {
      return Number.MAX_SAFE_INTEGER;
    }
    return this.arr[index];
  }
}

const search_in_infinite_array = function (reader, key) {
  let start = 0;
  let end = 1;

  while(nums[start] < key || )

  return -1;
};

let reader = new ArrayReader([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
]);

console.log(search_in_infinite_array(reader, 7));
