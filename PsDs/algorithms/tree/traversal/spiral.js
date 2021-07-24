// recursive
export default spiral = (queue, array) => {
  let stack = queue;
  let ltr = true;

  while (stack.length) {
    let temp = [];
    while (stack.length) {
      const node = stack.pop();
      array.push(node.value);
      if (ltr) {
        if (node.left) temp.push(node.left);
        if (node.right) temp.push(node.right);
      } else {
        if (node.right) temp.push(node.right);
        if (node.left) temp.push(node.left);
      }
    }
    stack = temp;
    ltr = !ltr;
  }
  return array;
};

// unit tests
// do not modify the below code

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
const results = spiral([tree], []);
const expected = ["A", "C", "B", "D", "E", "F", "J", "I", "H", "G", "K"];

console.log(JSON.stringify(results) === JSON.stringify(expected));
// console.log(spiral([tree], []));
