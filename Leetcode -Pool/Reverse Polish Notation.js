/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let arr = [];

  for (let i of tokens) {
    if (i === "+") {
      arr.push(arr.pop() + arr.pop());
    } else if (i === "/") {
      let a = arr.pop();
      let b = arr.pop();
      let sum = b / a;
      arr.push(parseInt(sum));
    } else if (i === "-") {
      let a = arr.pop();
      let b = arr.pop();
      arr.push(b - a);
    } else if (i === "*") {
      arr.push(arr.pop() * arr.pop());
    } else {
      arr.push(parseInt(i));
    }
  }

  return arr[0];
};
