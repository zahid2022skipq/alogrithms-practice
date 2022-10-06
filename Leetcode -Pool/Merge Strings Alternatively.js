/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let str = "";
  let size = word1.length >= word2.length ? word1.length - 1 : word2.length - 1;
  for (let i = 0; i <= size; i++) {
    if (word1[i] != undefined) {
      str += word1[i];
    }

    if (word2[i] != undefined) {
      str + word2[i];
    }
  }

  return str;
};
