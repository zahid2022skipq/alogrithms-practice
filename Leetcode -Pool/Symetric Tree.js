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
  // result variable for storing values
  let result = true;

  //check if left and right exists if not return resutl
  if (!root.left && !root.right) return result;

  // recursive logic for symmetry
  function trv(l, r) {
    //check if left and right exist
    if (!l && !r) return;

    //check if left exists and right doesn't or vice-versa
    if ((!l && r) || (!r && l)) {
      result = false;
      return;
    }

    //check if left and right values are same if not make resutl false and return out of function
    if (l.val !== r.val) {
      result = false;
      return;
    }

    //if result is still true
    if (result) {
      //if left and right for l and r exists call the recursive function
      if (l.left || r.right) trv(l.left, r.right);
      //check if right and left exist for l and r call the recursive function
      if (l.right || l.left) trv(l.right, r.left);
    }
    // after each call return out of the function
    return;
  }

  // call the recursive function
  trv(root.left, root.right);
  // return result
  return result;
};
