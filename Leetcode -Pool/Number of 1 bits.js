/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  //convert n to string in binary digits
  n = n.toString(2);
  //initialize count variable
  let count = 0;
  //loop over all the bits
  for (let i = 0; i < n.length; i++) {
    //check if its 1 then increment the count
    if (n[i] === "1") {
      count++;
    }
  }
  //return the count
  return count;
};
