/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  digits = digits.join("");
  console.log(digits);
  let d = parseInt(digits);
  d = parseInt(d) + 1;
  console.log(d);
  digits = d.toString();

  d = digits.split("");
  return d;
};
let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
console.log(plusOne(digits));
console.log(6145390195186705543 + 1);
