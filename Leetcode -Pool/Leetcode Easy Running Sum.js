var runningSum = function (nums) {
  //initialize sums array to store sum
  let sums = [];

  //brute force and iterate over nums array and then in j loop interate over nums till i to calculate running sum
  for (let i = 0; i < nums.length; i++) {
    //initialize sum to store running sum
    let sum = 0;
    for (let j = 0; j <= i; j++) {
      sum += nums[j];
    }
    //store the sum in sums array
    sums.push(sum);
  }

  return sums;
};

// O(n)

var runningSum = function (nums) {
  //initialize sums array to store sum
  let sums = [];
  //initialize sum to store running sum
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    // calculate sum and store in sums array
    sum += nums[i];
    sums.push(sum);
  }

  return sums;
};
