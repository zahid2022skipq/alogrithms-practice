/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
  //check if low and high are negative numbers if yes return 0
  if (low < 0 || high < 0) return 0;

  // initialize count variable for keeping track of odds
  let count = 0;

  // loop from low to high
  for (let i = low; i <= high; i++) {
    //check if i is odd or even if odd then increment counter
    if (i % 2 !== 0) {
      count++;
    }
  }
  //return count
  return count;
};
