var isSubsequence = function (s, t) {
  //initialize word to store s characters
  let word = "";
  //initialze l and r to keep track of s and t
  let l = 0;
  r = 0;

  //loop till end of s and r
  while (l < s.length && r < t.length) {
    //if s charater is matching with t character
    if (s[l] === t[r]) {
      //if yes then add this character to word and increment l
      word += s[l];
      l++;
    }
    //increment r
    r++;
  }
  //return true if word is equal to s else return false
  return word === s;
};
