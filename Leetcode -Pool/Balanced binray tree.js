/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;
  let depth = new Map();
  let s = [];
  let last;

  while (root || s.length) {
    if (root) {
      s.push(root);
      root = root.left;
    } else {
      root = s[s.length - 1];
      if (!root.right || last == root.right) {
        last = s.pop();

        let left = depth.get(last.left) || 0;
        let right = depth.get(last.right) || 0;
        if (Math.abs(left - right) > 1) return false;
        depth.set(last, 1 + Math.max(left, right));

        root = null;
      } else {
        root = root.right;
      }
    }
  }
  return true;
};
