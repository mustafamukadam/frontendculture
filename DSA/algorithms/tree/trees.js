export default class Tree {
  constructor(value) {
    this.value = value;
    this.children = []; // Tree
  }
  insertChild(value) { }

  // Uses a Depth-First Traversal
  static traverse(tree, func = console.log) { }

  contains(searchValue) { }

  static size(tree) { }

  static find(tree, value) { }

  insert(value) {
    const tree = new Tree(value);
    this.children.push(tree);
    return tree;
  }

  remove(value) { }

  reorder(node1, node2) { }
}

// Insert
const tree = new Tree(1);
console.log(tree);
tree.insert(2);
console.log(tree);

