// 1. dfs
function dfs(graph, source) {
  let stack = [source];

  while (stack.length) {
    let current = stack.pop();
    console.log(current);

    for (let neighbour of graph[current]) {
      stack.push(neighbour);
    }
  }
}

// 2. bfs
function bfs(graph, source) {
  let queue = [source];

  while (queue.length) {
    let current = queue.shift();
    console.log(current);

    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }
}

// 3. dfsR
function dfsR(graph, source) {
  console.log(source);

  for (let neighbour of graph[source]) {
    dfsR(graph, neighbour);
  }
}

// 4. hasPathDFS
function hasPathDFS(graph, source, dest) {
  let stack = [source];

  while (stack.length) {
    let current = stack.pop();
    if (current === dest) return true;
    for (let neighbour of graph[current]) {
      stack.push(neighbour);
    }
  }

  return false;
}

// 5. hasPathDFSR
function hasPathDFSR(graph, source, dest) {
  if (source === dest) return true;

  for (let neighbour of graph[source]) {
    if (hasPathDFSR(graph, neighbour, dest)) return true;
  }

  return false;
}
// 6. hasPathBFS

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

// dfs(graph, "a");
// dfsR(graph, "a");
console.log(hasPathDFS(graph, "f", "k")); //true
console.log(hasPathDFSR(graph, "i", "h")); //true
