var plusOne = function (digits) {
  var size = digits.length - 1;

  for (var i = size; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      break;
    }
    if (digits[i] == 9) {
      digits[i] = 0;
      if (i == 0) {
        for (var j = 0; j < size + 2; j++) {
          if (j == 0) {
            digits[j] = 1;
          } else {
            digits[j] = 0;
          }
        }
      }
    }
  }
  return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([1, 2, 9]));
console.log(plusOne([8, 9, 9]));
console.log(plusOne([8]));
console.log(plusOne([9]));
