//https://codepen.io/btholt/pen/jYpwQV?editors=0010
// Go to above link to test code with test case

//          My Solution
export const preorderTraverse = (node, array) => {
  array.push(node.value); // base condition ? Ok, got it, maybe coz of if(node.left) below its not required
  if (node.left) preorderTraverse(node.left, array);
  if (node.right) preorderTraverse(node.right, array);
  return array;
};

export const inorderTraverse = (node, array) => {
  if (node.left) inorderTraverse(node.left, array);
  array.push(node.value);
  if (node.right) inorderTraverse(node.right, array);
  return array;
};

export const postorderTraverse = (node, array) => {
  if (node.left) postorderTraverse(node.left, array);
  if (node.right) postorderTraverse(node.right, array);
  array.push(node.value);
  return array;
};

//          There Solution
const preorderTraverse2 = (node, array) => {
  if (!node) return array; // worked with just `if (!node) return;` also
  array.push(node.value);
  array = preorderTraverse2(node.left, array);
  array = preorderTraverse2(node.right, array);
  return array;
};

// Authour pointed out that array on LHS is not necessary. This is also valid -
const preorderTraverse3 = (node, array) => {
  if (!node) return array;
  array.push(node.value);
  preorderTraverse2(node.left, array);
  preorderTraverse2(node.right, array);
  return array; // ^
};

/*
^ -> 'return' here is important because in the end/bottom of function call stack,
this is what gets returned to 1st preorderTraverse() call. Else, probably undefined is being
returned.
*/

/*
if(!node) return array; 
// Above line is base case. Always include base case
*/

// -------------------------------- Algoexpert -------------------------------

// O(n) time | O(n) space
function inOrderTraverse(tree, array) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
    return array;
  }
}

// -------------------------------- basecs -------------------------------
// Create our queue and push our root node into it.

function levelOrderSearch(rootNode) {
  var queue = [];
  queue.push(rootNode);
  //...
}

