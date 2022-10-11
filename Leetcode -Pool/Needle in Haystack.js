/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  //to keep track of lengths creating hSize and nSize for haystack and needle respectivey
  let hSize = haystack.length;
  let nSize = needle.length;
  //check if hSize is less then nSize or hsize is equal to nSize and not equal then return -1 immediatly
  if (hSize < nSize || (hSize === nSize && haystack !== needle)) return -1;
  //check if both are equal then return 0 immediatly
  if (haystack === needle) return 0;
  //initializing i and j to keep track of characters in both
  let i = 0;
  let j = 0;
  //initialize the checker to keep track of equality of characters
  let checker = 0;
  //loop till haystack
  while (i < haystack.length) {
    //if haystack character is equal to needle character
    if (haystack[i] === needle[j]) {
      //then loop over needle and haystack simultaneously
      //loop will start from i and end at i + nSize -1, nSize is needle length
      for (let k = i; k <= i + nSize - 1; k++) {
        //if at any character both are not equal
        if (haystack[k] !== needle[j]) {
          //make checker to 0 and break the loop
          checker = 0;
          break;
        }
        //if both chracters at needle[j] and haystack[k] are equal
        //then increment j
        // and make checker to 1
        j++;
        checker = 1;
      }
      //check if checker is 1 then return i index which is starting index of needle in haystack
      if (checker == 1) return i;
      //if checker is not 1 then make j = 0 to start over needle again
      j = 0;
    }
    //increment the i
    i++;
  }

  //if needle is not found then return -1
  return -1;
};

let haystack = "sadbutsad";
let needle = "sad";
console.log(strStr(haystack, needle));
