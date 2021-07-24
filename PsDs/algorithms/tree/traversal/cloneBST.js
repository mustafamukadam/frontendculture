export default clone = (node) => {
  if (!node) return null;

  const tree = { value: null, left: null, right: null };
  tree.value = node.value;
  tree.left = clone(node.left);
  tree.right = clone(node.right);

  return tree;
};

const tree = {
  value: "A",
  left: {
    value: "B",
    left: {
      value: "D",
      left: {
        value: "G",
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: "E",
      left: null,
      right: {
        value: "H",
        left: {
          value: "K",
          left: null,
          right: null,
        },
        right: null,
      },
    },
  },
  right: {
    value: "C",
    left: {
      value: "F",
      left: {
        value: "I",
        left: null,
        right: null,
      },
      right: {
        value: "J",
        left: null,
        right: null,
      },
    },
    right: null,
  },
};

console.log(JSON.stringify(tree) === JSON.stringify(clone(tree)));
// console.log(JSON.stringify(tree));
// console.log("\n\n");
// console.log(JSON.stringify(clone(tree)));

// console.log(tree);
// console.log(clone(tree));
