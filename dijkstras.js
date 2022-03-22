const PriorityQueue = require('./binary-heaps');

/**
 *
 * it's actually a graph algorithm with weighted type.
 * we will use this algorithm to get find shortest path
 * like finding shortest road in the map, ...
 *
 */

class Dijkstras {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) {
      this.adjacencyList[name] = [];
    }

    return this.adjacencyList[name];
  }

  addEdge(v1, v2, weight) {
    (this.adjacencyList[v1] || this.addVertex(v1)).push({ node: v2, weight });
    (this.adjacencyList[v2] || this.addVertex(v2)).push({ node: v1, weight });
  }

  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at end
    let smallest;

    //build up initial state

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    // as long as there is something to visit

    while (nodes.values.length) {
      smallest = nodes.dequeue().value;

      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END

        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //find neighboring node

          let nextNode = this.adjacencyList[smallest][neighbor];
          //calculate new distance to neighboring node

          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;

          if (candidate < distances[nextNeighbor]) {
            //updating new smallest distance to neighbor

            distances[nextNeighbor] = candidate;

            //updating previous - How we got to neighbor

            previous[nextNeighbor] = smallest;

            //enqueue in priority queue with new priority

            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

const d = new Dijkstras();

d.addVertex('A');
d.addVertex('B');
d.addVertex('C');
d.addVertex('D');
d.addVertex('E');
d.addVertex('F');

d.addEdge('A', 'B', 4);
d.addEdge('A', 'C', 2);
d.addEdge('B', 'F', 3);
d.addEdge('C', 'D', 2);
d.addEdge('C', 'F', 4);
d.addEdge('D', 'E', 3);
d.addEdge('D', 'F', 1);
d.addEdge('E', 'F', 1);

console.log(d.dijkstra('A', 'E'));
