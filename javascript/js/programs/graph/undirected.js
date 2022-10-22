function makeAdjacencyList(edges) {
    let adjecencyList = {}

    for (let edge of edges) {
        let neighbours1 = adjecencyList[edge[0]]
        let neighbours2 = adjecencyList[edge[1]]
        adjecencyList[edge[0]] = neighbours1 ? [...neighbours1, edge[1]] : [edge[1]]
        adjecencyList[edge[1]] = neighbours2 ? [...neighbours2, edge[0]] : [edge[0]]
    }

    return adjecencyList
}

const undirectedPath = (edges, nodeA, nodeB) => {
    const adjecencyList = makeAdjacencyList(edges)
    const set = new Set()

    function hasPath(graph, nodeA, nodeB) {
        set.add(nodeA)
        if (nodeA === nodeB) return true

        for (let neighbour of graph[nodeA]) {
            if (!set.has(nodeA) && hasPath(graph, neighbour, nodeB)) return true
        }

        return false
    }

    return hasPath(adjecencyList, nodeA, nodeB)
}

const edges = [
    ["i", "j"],
    ["k", "i"],
    ["m", "k"],
    ["k", "l"],
    ["o", "n"],
]

console.log(undirectedPath(edges, "j", "m")) // -> true
// console.log(makeAdjacencyList(edges)) // -> true
