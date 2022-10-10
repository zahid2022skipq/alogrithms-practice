/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  return arr.sort(
    (a, b) =>
      a.toString(2).replace(/0/g, "").length -
        b.toString(2).replace(/0/g, "").length || a - b
  );
};
