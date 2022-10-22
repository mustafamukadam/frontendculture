// 1. dfs
function dfs(graph, source) {}
// dfs(graphTraverse, "a");

// 2. bfs
function bfs(graph, source) {}

// 3. dfsR
function dfsR(graph, source) {}
// dfsR(graphTraverse, "a");

// 4. hasPathDFS
function hasPathDFS(graph, source, dest) {}
// console.log(hasPathDFS(graphHasPath, "f", "k")); //true

// 5. hasPathDFSR
function hasPathDFSR(graph, source, dest) {}
// console.log(hasPathDFSR(graphHasPath, "i", "h")); //true

// 6. hasPathBFS
function hasPathBFS(graph, source, dest) {}

const graphTraverse = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const graphHasPath = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};
