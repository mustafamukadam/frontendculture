const dfs = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);

    for (const neighbour of graph[current]) {
      stack.push(neighbour);
    }
  }
};

const bfs = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    let current = queue.shift();
    console.log(current);

    for (let neighnour of graph[current]) {
      queue.push(neighnour);
    }
  }
};

const dfsR = (graph, source) => {
  console.log(source);

  for (let neighbour of graph[source]) {
    dfsR(graph, neighbour);
  }
};

const hasPathDFS = (graph, src, dst) => {
  let stack = [src];

  while (stack.length) {
    let current = stack.pop();
    console.log(current);
    if (current === dst) return true;

    for (let neighbour of graph[current]) {
      stack.push(neighbour);
    }
  }

  return false;
};

const hasPathDFSR = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbour of graph[src]) {
    if (hasPath(graph, neighbour, dst)) return true;
  }

  return false;
  // can we imagine above code to be equivalent to graph[src].some(hasPath())?
};

//BFS recursive is not possible
const hasPathBFS = (graph, src, dst) => {
  const queue = [src];

  while (queue.length) {
    const current = queue.shift();
    if (current === dst) return true;

    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }

  return false;
};

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

//hasPath
// const graph = {
//   a: ["b", "c"],
//   b: ["d"],
//   c: ["e"],
//   d: ["f"],
//   e: [],
//   f: [],
// };



test('should graph traversal', () => {
  console.log(':: ',dfsR(graph, "a"))
  // console.log(':: ',dfs(graph, "a"))
  // expect(dfsR(graph, "a")).toBe(null);
});
