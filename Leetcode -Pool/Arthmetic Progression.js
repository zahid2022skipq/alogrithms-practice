var canMakeArithmeticProgression = function (arr) {
  //sort the array
  arr.sort((a, b) => a - b);
  //check if length of array is 2 or less then return true
  if (arr.length <= 2) {
    return true;
  }

  //initialize a diff variable and make it equal to the difference of 1st and second element
  let diff = arr[1] - arr[0];
  //loop from 2 till array length
  for (let i = 2; i < arr.length; i++) {
    //check from 2nd array element and index - 1 element is equal to diff
    //if not equal then return false imediately
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }
  //if false is not returned then return true in the end
  return true;
};
