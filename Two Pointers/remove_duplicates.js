const remove_duplicates = function (arr) {
  // TODO: Write your code here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      arr.splice(i + 1, 1);
      i--;
    }
  }
  console.log(arr);
  return arr.length;
};

// console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
// console.log(remove_duplicates([2, 2, 2, 11]));
// console.log(
//   remove_duplicates([1, 2, 3, 4, 4, 4, 4, 4, 5, 6, 7, 8, 9, 9, 9, 9])
// );

function remove_duplicates1(arr) {
  // index of the next non-duplicate element
  let nextND = 1;
  let i = 0;
  let l = 1;
  while (i < arr.length) {
    if (arr[i] != arr[nextND - 1]) {
      arr[nextND] = arr[i];
      nextND++;
      l++;
    } else {
      i++;
    }
  }

  return nextND;
}

console.log(remove_duplicates1([2, 3, 3, 3, 6, 9, 9]), "\n------\n");
console.log(remove_duplicates1([2, 2, 2, 11]));
