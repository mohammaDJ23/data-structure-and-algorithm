// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

class Nodes {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Nodes(data));
  }
}

const root = new Nodes(0);

root.add(1);
root.add(2);
root.add(3);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);
root.children[2].add(23);
root.children[2].add(11);
root.children[2].add(21);

function levelWidth(root) {
  let result = [root];

  function findMaxLevel(root) {
    if (result.length < root?.children?.length) {
      result = root.children;
    }

    for (let i = 0; i < root?.children?.length; i++) {
      findMaxLevel(root.children[i]);
    }
  }

  findMaxLevel(root);

  return result.map(node => node.data);
}

console.log(levelWidth(root));
