var inorderTraversal = function (root) {
  if (root == null) return [];
  let result = [];
  dfs(root);
  function dfs(root) {
    if (root != null) {
      dfs(root.left);
      result.push(root.val);
      dfs(root.right);
    }
  }
  return result;
};
