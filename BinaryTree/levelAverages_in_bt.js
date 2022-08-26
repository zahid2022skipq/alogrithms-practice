class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const Deque = require("./node_modules/collections/deque"); //http://www.collectionsjs.com
const traverse = function (root) {
  let result = [];

  let queue = new Deque();
  queue.push(root);
  while (queue.length > 0) {
    let levelSize = queue.length;
    let currentLevel = [];
    let average = 0;
    for (let i = 0; i < levelSize; i++) {
      let currentItem = queue.shift();
      currentLevel.push(currentItem.val);
      average = average + currentItem.val;
      if (currentItem.left) {
        queue.push(currentItem.left);
      }
      if (currentItem.right) {
        queue.push(currentItem.right);
      }
    }
    console.log(average);
    result.push(average / levelSize);
  }
  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.left.right = new TreeNode(2);
console.log(`Level order traversal: ${traverse(root)}`);
