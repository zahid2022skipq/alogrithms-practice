/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  if (!root) return false;
  if (dfs(head, root)) return true;
  return isSubPath(head, root.left) || isSubPath(head, root.right);
};

function dfs(head, node) {
  if (!head) return true;
  if (!node) return false;
  if (node.val !== head.val) return false;
  return dfs(head.next, node.left) || dfs(head.next, node.right);
}
