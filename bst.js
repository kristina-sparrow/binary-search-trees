// Generate random array
function randomArray(length) {
  if (length <= 0 || !Number.isInteger(length)) return [];
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

// Remove duplicates and sort array
function processArray(arr) {
  arr = Array.from(new Set(arr)).sort((a, b) => a - b);
  return arr;
}

// Binary search tree functions
function Node(data, left = null, right = null) {
  return { data, left, right };
}

function BinaryTree(arr) {
  let root = buildTree(arr);

  function buildTree(arr) {
    if (!arr.length) return null;
    arr = processArray(arr);
    let mid = Math.floor(arr.length / 2);
    let root = Node(arr[mid]);
    root.left = buildTree(arr.slice(0, mid));
    root.right = buildTree(arr.slice(mid + 1));
    return root;
  }

  function printTree(root) {
    prettyPrint(root);
  }

  function insertValue(root, value) {
    if (root === null) {
      return Node(value);
    } else if (value < root.data) {
      root.left = insert(root.left, value);
    } else if (value > root.data) {
      root.right = insert(root.right, value);
    }
    return root;
  }

  function deleteValue(root, value) {
    if (root === null) {
      return null;
    } else if (value < root.data) {
      root.left = deleteValue(root.left, value);
    } else if (value > root.data) {
      root.right = deleteValue(root.right, value);
    } else {
      if (root.left === null && root.right === null) {
        return null;
      } else if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      } else {
        let minValue = findMinValue(root.right);
        root.data = minValue;
        root.right = deleteValue(root.right, minValue);
      }
    }
    return root;
  }

  function findMinValue(root) {
    while (root.left !== null) {
      root = root.left;
    }
    return root.data;
  }

  function levelOrder(root, callback = null) {
    if (root === null) return;
    let queue = [root];
    while (queue.length > 0) {
      let node = queue.shift();
      if (callback) callback(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  function inOrder(root, callback = null) {
    if (!root) return;
    inOrder(root.left, callback);
    if (callback) callback(root);
    inOrder(root.right, callback);
  }

  function preOrder(root, callback = null) {
    if (!root) return;
    if (callback) callback(root);
    preOrder(root.left, callback);
    preOrder(root.right, callback);
  }

  function postOrder(root, callback = null) {
    if (!root) return;
    postOrder(root.left, callback);
    postOrder(root.right, callback);
    if (callback) callback(root);
  }

  function height(node) {
    if (!node) return -1;
    return Math.max(height(node.left), height(node.right)) + 1;
  }

  function depth(node, value) {
    if (!node) return -1;
    if (node.data === value) return 0;
    let left = depth(node.left, value);
    if (left !== -1) return left + 1;
    let right = depth(node.right, value);
    if (right !== -1) return right + 1;
    return -1;
  }

  function isBalanced(root) {
    if (!root) return true;
    let leftHeight = height(root.left);
    let rightHeight = height(root.right);
    if (
      Math.abs(leftHeight - rightHeight) <= 1 &&
      isBalanced(root.left) &&
      isBalanced(root.right)
    ) {
      return true;
    }
    return false;
  }

  function reBalance(root) {
    let values = [];
    inOrder(root, (node) => {
      values.push(node.data);
    });
    return buildTree(values);
  }

  return {
    root,
    buildTree,
    printTree,
    insertValue,
    deleteValue,
    levelOrder,
    inOrder,
    preOrder,
    postOrder,
    height,
    depth,
    isBalanced,
    reBalance,
  };
}

// Printing tree
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
