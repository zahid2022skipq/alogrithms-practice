function ArrayChallenge(arr) {
  // code goes here
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        max++;
        arr.splice(arr.indexOf(arr[i]), 1);
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        max++;
        arr.splice(arr.indexOf(arr[i]), 1);
      }
    }
  }
  return max;
}

console.log(ArrayChallenge([1, 2, 2, 2, 3]));
