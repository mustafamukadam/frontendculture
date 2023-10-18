//leetcode - kthSMALLEST - https://leetcode.com/problems/kth-smallest-element-in-a-bst/
//https://leetcode.com/problems/kth-smallest-element-in-a-bst/

let result = -1;
let c = 0;
export default function klargest(node, k) {
  if (!node || c == k) return;

  if (node.right) klargest(node.right, k);
  c++;
  console.log(c, "   -   ", node.value);
  if (c == k) {
    result = node.value;
    return result;
  }
  if (node.left) klargest(node.left, k);
  return result;
}

const tree = {
  value: "20",
  left: {
    value: "8",
    left: {
      value: "4",
      left: {
        value: "3",
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: "12",
      left: null,
      right: {
        value: "14",
        left: {
          value: "13",
          left: null,
          right: null,
        },
        right: null,
      },
    },
  },
  right: {
    value: "30",
    left: {
      value: "27",
      left: {
        value: "26",
        left: null,
        right: null,
      },
      right: {
        value: "28",
        left: null,
        right: null,
      },
    },
    right: null,
  },
};

console.log("answer", klargest(tree, 6));
