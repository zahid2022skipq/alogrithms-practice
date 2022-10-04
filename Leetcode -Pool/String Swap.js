/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  //check if s1 is already equal to s2 return true
  if (s1 === s2) return true;
  //check if lengths of s1 and s2 are not equal the return false
  if (s1.length !== s2.length) return false;
  //create an array to hold the different indices
  let ind = [];
  //loop over s1 and s2
  for (let i = 0; i < s1.length; i++) {
    //check if there is any different characters at same index of s1 and s2
    if (s1[i] !== s2[i]) {
      //if there is any then push it in ind array
      ind.push(i);
    }
    //check if length of ind is greater then 2 then one swap cant make them both equal
    if (ind.length > 2) return false;
  }
  //ind length is 1 then then also one swap cant make them both equal
  if (ind.length < 2) return false;

  //check if character of s1 at ind[0] index is equal to character of s2 at ind[1] index and vice versa then return true else false
  return s1[ind[0]] === s2[ind[1]] && s1[ind[1]] === s2[ind[0]] ? true : false;
};
