function ArrayChallenge(arr) {
  // code goes here
  let max = 0;
  let finalMax = 0;

  for (let i = 0; i < arr.length; i++) {
    max = max + arr[i];
    max = Math.max(max, 0);
    finalMax = Math.max(finalMax, max);
  }
  return finalMax;
}
