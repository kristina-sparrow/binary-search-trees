const BinaryTree = require("./bst");

// Generate random array
function randomArray(length) {
  if (length <= 0 || !Number.isInteger(length)) return [];
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

// Set up
const tree = BinaryTree(randomArray(20));

// Tests
console.log(tree.isBalanced());

console.log(tree.levelOrder());
console.log(tree.inOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());

tree.insertValue(300);
tree.insertValue(400);
tree.insertValue(500);

console.log(tree.isBalanced());
tree.reBalance();
console.log(tree.isBalanced());

console.log(tree.levelOrder());
console.log(tree.inOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());

tree.prettyPrint();
