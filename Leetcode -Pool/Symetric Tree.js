/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let result = true;

  if (!root.left && !root.right) return result;

  function traverse(l, r) {
    if (!l && !r) return;

    if ((!l && r) || (!r && l)) {
      result = false;
      return;
    }

    if (l.val !== r.val) {
      result = false;
      return;
    }
    if (result) {
      if (l.left || r.right) traverse(l.left, r.right);
      if (l.right || l.left) traverse(l.right, r.left);
    }
    return;
  }

  traverse(root.left, root.right);
  return result;
};
