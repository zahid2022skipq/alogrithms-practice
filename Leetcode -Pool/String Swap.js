var areAlmostEqual = function (s1, s2) {
  //check if s1 length and s2 length is not equal return false
  if (s1.length !== s2.length) return false;
  if (s1 == s2) return true;
  let str1 = s1.split(""),
    str2 = s2.split("");

  let i = 0,
    j = 0;
  while (i < str1.length) {
    if (j === str1.length) {
      j = 0;
      i++;
    }

    if (s1[i] === s2[j]) {
      let temp = str2[i];
      str2[i] = str2[j];
      str2[j] = temp;

      if (str2.join("") == str1.join("")) {
        return true;
      }
      i++;
      j++;
      (str1 = s1.split("")), (str2 = s2.split(""));
      continue;
    }

    j++;
  }
  return false;
};
// let s1 = "attack",
//   s2 = "defend";
// console.log(areAlmostEqual("bank", "kanb"));
// console.log(areAlmostEqual(s1, s2));
// (s1 = "kelb"), (s2 = "kelb");
// console.log(areAlmostEqual(s1, s2));
// s1 = "abcd";
// s2 = "dcba";
s1 =
  "ysmpagrkzsmmzmsssutzgpxrmoylkgemgfcperptsxjcsgojwourhxlhqkxumonfgrczmjvbhwvhpnocz";
s2 =
  "ysmpagrqzsmmzmsssutzgpxrmoylkgemgfcperptsxjcsgojwourhxlhkkxumonfgrczmjvbhwvhpnocz";
console.log(areAlmostEqual(s1, s2));

for (let i = 0; i < s1.length; i++) {
  if (s1[i] !== s2[i]) {
    console.log(i);
  }
}
