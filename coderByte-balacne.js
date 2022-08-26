function ArrayChallenge(strArr) {
  // code goes here
  let a = eval(strArr[0]);
  let b = eval(strArr[1]);
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[0] + b[j] == a[1]) {
        return b[j];
      }
      if (a[1] + b[j] == a[0]) {
        return b[j];
      }
      if (a[0] + b[i] == a[1] + b[j]) {
        console.log("check");
        return [b[i], b[j]].sort();
      }
      if (a[0] + b[j] == a[1] + b[i]) {
        console.log("check 2");
        return [b[i], b[j]].sort();
      }
    }
  }
}

console.log(ArrayChallenge(["[13, 4]", "[1, 2, 3, 6, 14]"]));
