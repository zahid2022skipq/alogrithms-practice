/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  //convert n to string for easy to loop
  n = n.toString();
  //create a map to store the sums record
  let map = {};
  //create a sum to store the sum
  let sum = 0;

  //loop infinitly because we will define break conditions inside the loop
  while (true) {
    //make sum to 0
    sum = 0;
    //loop over each character of n i.e "19", first 1 then 9
    for (let num of n) {
      // calculate the power and add it to sum for 1, 1 square, sum = 1
      // for 9, 9 square 81, sum = 81+1 = 82
      sum += Math.pow(parseInt(num), 2);
    }
    //make n = sum to overirde it to new value
    n = sum;
    //again convert n to string
    n = n.toString();
    //check if sum is 1 then return true
    if (sum === 1) {
      return true;
    }
    //check if map contains sum then return false because there is a cycle
    if (map[sum] !== undefined) {
      return false;
    }
    //check if map of sum is is undefined then store the sum at sum key
    if (map[sum] === undefined) {
      map[sum] = sum;
    }
  }
};
