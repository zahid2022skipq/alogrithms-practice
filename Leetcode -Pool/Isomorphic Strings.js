var isIsomorphic = function (s, t) {
  //check if length of both strings are equal
  if (s.length !== t.length) return false;
  //initialize map to keep track of values
  let map = new Map();
  //initialize word to store replaced strings
  let word = "";
  //loop over all chars of s
  for (let i = 0; i < s.length; i++) {
    //initialze char to store current character if in map
    const char = map.get(s[i]);
    //if character is undefined
    if (!char) {
      //initialze vals to get all the values from map
      let vals = [...map.values()];
      //check if map contains the t strings current character if not store it in map
      if (!vals.includes(t[i])) {
        //if not then store it in map and add it to word
        map.set(s[i], t[i]);
        word += t[i];
      }
    } else {
      //if current character is in the map then add it into the word
      word += char;
    }
  }
  //return true if word is equal to t else false
  return word === t;
};
