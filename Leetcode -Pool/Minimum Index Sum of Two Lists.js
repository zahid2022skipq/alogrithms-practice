/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let max = 99999;
  let str = [];
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j] && max > i + j) {
        max = i + j;
        str.pop();
        str.push(list1[i]);
        break;
      }

      if (list1[i] === list2[j] && max === i + j) {
        console.log(list1[i], " ", list2[j], " ", i + j);
        max = i + j;
        str.push(list1[i]);
        break;
      }
    }
  }

  return str;
};
