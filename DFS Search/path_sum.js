class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const has_path = function (root, sum) {
  // TODO: Write your code here

  if (root === null) {
  }

  if (root.value === sum && root.left === null && root.right === null) {
    return true;
  }

  return (
    has_path(root.left, sum - root.value) ||
    has_path(root.right, sum - root.value)
  );
  return node;

  return node;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has path: ${has_path(root, 23)}`);
console.log(`Tree has path: ${has_path(root, 16)}`);
