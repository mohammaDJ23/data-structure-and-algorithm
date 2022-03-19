class Bst {
  constructor(num = null) {
    this.value = num;
    this.left = null;
    this.right = null;
  }

  insert(num) {
    const node = new Bst(num);

    if (this.value === num) {
      return;
    } else if (!this.value) {
      return (this.value = num);
    } else if (!this.right && this.value < num) {
      return (this.right = node);
    } else if (!this.left && this.value > num) {
      return (this.left = node);
    } else if (this.left && this.value > num) {
      return this.left.insert(num);
    } else if (this.right && this.value < num) {
      return this.right.insert(num);
    }
  }

  contains(num) {
    if (this.value > num && this.left) {
      return this.left.contains(num);
    } else if (this.value < num && this.right) {
      return this.right.contains(num);
    }

    if (this.value === num) {
      return true;
    }

    return false;
  }

  BFS() {
    let node = this,
      queue = [],
      data = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();

      data.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  DFSPerOrder() {
    const list = [];

    function traverse(node) {
      list.push(node.value);

      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this);

    return list;
  }

  DFSPostOrder() {
    const list = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      if (node.right) {
        traverse(node.right);
      }

      list.push(node.value);
    }

    traverse(this);

    return list;
  }

  DFSInOrder() {
    const list = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }

      list.push(node.value);

      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this);

    return list;
  }
}

const bst = new Bst();

bst.insert(6);
bst.insert(4);
bst.insert(1);
bst.insert(5);
bst.insert(10);
bst.insert(9);
bst.insert(15);

console.log('breadth first search', bst.BFS());
console.log('depth first search per order', bst.DFSPerOrder());
console.log('depth first search post order', bst.DFSPostOrder());
console.log('depth first search in order', bst.DFSInOrder());
