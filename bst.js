function mergeSort(arr) {
  if (arr.length === 0) return "Please provide a non empty array";
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

function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

function node(data, lChild, rChild) {
  return { data, lChild, rChild };
}

function tree(arr) {
  return buildTree();
}

function buildTree(arr) {
  return tree;
}
