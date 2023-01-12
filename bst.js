// Array creation and processing functions
function generateArray(length) {
  if (length <= 0 || !Number.isInteger(length)) return [];
  let randomArr = [];
  for (let i = 0; i < length; i++) {
    randomArr.push(Math.floor(Math.random() * 100));
  }
  return randomArr;
}

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

function mergeSort(arr) {
  if (arr.length === 0) return [];
  if (arr.length < 2) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    left[i] < right[j] ? result.push(left[i++]) : result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Binary search tree functions
function Node(data, left = null, right = null) {
  return { data, left, right };
}

function Tree(arr) {
  let root = buildTree(arr);
  prettyPrint(root);
  return { root };
}

function buildTree(arr) {
  if (!arr.length) return null;
  arr = removeDuplicates(arr);
  arr = mergeSort(arr);
  let mid = Math.floor(arr.length / 2);
  let root = Node(arr[mid]);
  root.left = buildTree(arr.slice(0, mid));
  root.right = buildTree(arr.slice(mid + 1));
  return root;
}

function printTree(root) {
  prettyPrint(root);
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
