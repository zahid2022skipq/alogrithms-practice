const make_squares = function (arr) {
  squares = [];
  // TODO: Write your code here
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.pow(arr[i], 2);
  }
  arr.sort();
  return arr;
};

//-------------------- Optimized Solution 2 POinters ------------------------- \\

const make_squares1 = function (arr) {
  squares = [];
  // TODO: Write your code here
  let n = arr.length;
  let highestSqaureIndex = n - 1;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    let sq1 = arr[left] * arr[left];
    let sq2 = arr[right] * arr[right];
    if (sq1 > sq2) {
      squares[highestSqaureIndex] = sq1;
      left++;
    } else {
      squares[highestSqaureIndex] = sq2;
      right--;
    }

    highestSqaureIndex--;
  }

  return squares;
};

console.log(make_squares1([-2, -1, 0, 2, 3]));
console.log(make_squares1([-3, -1, 0, 1, 2]));
console.log(make_squares1([-3, -1, 1, 2]));
