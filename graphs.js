/**
 *
 * there are two type of graphs:
 *
 * 1. unweighted (edges have not values)
 *   1. undirected
 *   2. directed
 *
 * 2. weighted (edges have values)
 *   1. undirected
 *   2. directed
 *
 * some terminology:
 *   vertex(node)
 *   edge(line)
 *
 * some representing of graphs:
 *   1. adjacency matrix
 *   ----------------
 *   |  - | B  | C  |
 *   ----------------
 *   | B  | 0  | 1  |
 *   ----------------
 *   | C  | 1  | 0  |
 *   ----------------
 *
 *   2. adjacency list
 *
 *   [
 *     [1, 5], => index of 0
 *     [4, 5], => 1
 *     [4, 12], => 2
 *     [3, 1], => 3
 *   ]
 *
 *   the name of nodes would be indexs
 *   but if the name of nodes might be string
 *
 *   {
 *     A: [1, 5],
 *     B: [1, 23],
 *     C: [3, 55],
 *     F: [7, 2],
 *   }
 *
 */

// this is undirected graph

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) {
      this.adjacencyList[name] = [];
    }

    return this.adjacencyList[name];
  }

  addEdge(v1, v2) {
    (this.adjacencyList[v1] || this.addVertex(v1)).push(v2);
    (this.adjacencyList[v2] || this.addVertex(v2)).push(v1);
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }
  }

  removeVertex(v) {
    const vertexes = this.adjacencyList[v];

    if (!vertexes) {
      return;
    }

    for (let i = 0; i < vertexes.length; i++) {
      this.removeEdge(vertexes[i], v);
    }

    return delete this.adjacencyList[v];
  }

  DFSRecursive(vertex) {
    const list = [];
    const visitedVertices = {};

    const traverse = vertex => {
      if (!this.adjacencyList[vertex]) {
        return;
      }

      visitedVertices[vertex] = true;
      list.push(vertex);

      for (const v of this.adjacencyList[vertex]) {
        if (!visitedVertices[v]) {
          traverse(v);
        }
      }
    };

    traverse(vertex);

    return list;
  }

  DFSIterative(vertex) {
    const list = [];
    const visitedVertices = {};
    const stack = [vertex];
    let currentVertex = null;

    while (stack.length) {
      currentVertex = stack.pop();

      if (!visitedVertices[currentVertex]) {
        visitedVertices[currentVertex] = true;
        list.push(currentVertex);
        stack.push(...this.adjacencyList[currentVertex]);
      }
    }

    return list;
  }

  BFS(vertex) {
    const list = [];
    const visitedVertices = {};
    const queue = [vertex];
    let currentVertex = null;

    visitedVertices[vertex] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      list.push(currentVertex);

      for (let i = 0; i < this.adjacencyList[currentVertex].length; i++) {
        const vertex = this.adjacencyList[currentVertex][i];

        if (!visitedVertices[vertex]) {
          visitedVertices[vertex] = true;
          queue.push(vertex);
        }
      }
    }

    return list;
  }
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

// console.log(g.DFSRecursive('A'));
// console.log(g.DFSIterative('A'));
console.log(g.adjacencyList);
console.log(g.BFS('A'));
