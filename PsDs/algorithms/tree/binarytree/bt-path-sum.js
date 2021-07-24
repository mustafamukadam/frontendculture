/**
 * https://leetcode.com/problems/path-sum/
 * ONE line solution - https://leetcode.com/problems/path-sum/discuss/36596/One-Line-Solution-Sharing-in-Javascript
 */

// runtime is not good (57%)

let sum = 0;
let exists = false;
function pathSum(node, s) {
  if (!node || exists) return;

  sum += node.value;
  if (!node.left && !node.right && sum == s) exists = true;

  pathSum(node.left, s);
  pathSum(node.right, s);

  sum -= node.value;

  return exists;
}

const tree = {
  value: 20,
  left: {
    value: 8,
    left: {
      value: 4,
      left: {
        value: 3,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 12,
      left: null,
      right: {
        value: 14,
        left: {
          value: 13,
          left: null,
          right: null,
        },
        right: null,
      },
    },
  },
  right: {
    value: 30,
    left: {
      value: 27,
      left: {
        value: 26,
        left: null,
        right: null,
      },
      right: {
        value: 28,
        left: null,
        right: null,
      },
    },
    right: null,
  },
};

const tree2 = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: null,
};

console.log(pathSum(tree, 103));
