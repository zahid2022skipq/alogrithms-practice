/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  let output = [];
  if (!root) return [];
  if (!root.children) return [root.val];

  let stack = [root];

  while (stack.length) {
    let elem = stack.shift();
    output.push(elem.val);
    if (elem.children) {
      stack.unshift(...elem.children);
    }
  }

  return output;
};
