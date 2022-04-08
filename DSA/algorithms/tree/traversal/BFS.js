// https://btholt.github.io/four-semesters-of-cs-part-two/tree-traversals
// https://codepen.io/btholt/pen/WdgRrB?editors=0010
// Go to above link to test code with test case

/* Recursive */

//My (WRONG - No return else everything right)
const breadthFirstTraverseMy = (queue, array) => {
  if (!queue.length) return array;
  const node = queue.shift();
  array.push(node.value);
  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);
  breadthFirstTraverseMy(queue, array); // WRONG !!!! missing return
};

// There
export const breadthFirstTraverse = (queue, array) => {
  if (!queue.length) return array;
  const node = queue.shift();
  array.push(node.value);
  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);
  return breadthFirstTraverse(queue, array);
};

/* While loop solution */

// My
export function bfs(queue, array) {
  // there should be base case here
  while (queue.length) {
    const node = queue.shift();
    array.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return array;
}

export default bfs;