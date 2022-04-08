//leetcode - kthSMALLEST - https://leetcode.com/problems/kth-smallest-element-in-a-bst/
//https://leetcode.com/problems/kth-smallest-element-in-a-bst/

const k = 10;
export default function klargest(node, result, C) {
  if (!node || C.c > k) return result;

  result = klargest(node.right, result, C);
  C.c++;
  if (C.c == k) return node.value;
  result = klargest(node.left, result, C);

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

const C = {
  c: 0,
};
console.log("answer", klargest(tree, -1, C));
