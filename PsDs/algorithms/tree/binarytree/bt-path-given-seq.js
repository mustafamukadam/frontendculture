/**
 * educative Grokking : 1.3Path With Given Sequence (medium) -.html
 * Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.
 */
import numberTree from "../../../data/numbertree";
const tree = numberTree.tree
console.log('== ', tree)

let exists = false;
function pathGivenSeq(node, seq) {
  if (!node || node.value != seq[0] || exists) return;

  seq.shift();

  if (!node.left && !node.right) exists = true;
  pathGivenSeq(node.left, seq);
  pathGivenSeq(node.right, seq);

  return exists;
}

// console.log(pathGivenSeq(tree, [8, 10, 14, 13]));
