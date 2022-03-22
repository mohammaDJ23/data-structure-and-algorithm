/**
 *
 * @finding_child
 *
 * for any index of an array n...
 * the left child is stored at 2n + 1
 * the right child is at 2n + 2
 *
 * @finding_parent
 *
 * for any child node at index n...
 * its parent is at index (n - 1) / 2
 *
 *
 * there is no relationship between sibling
 *
 *
 * @min_binary_heap
 *
 *                2
 *          12          24
 *       14    200    77   100
 *
 *
 * @max_binary_heap
 *
 *                100
 *           45         99
 *        12    28    80   1
 *
 *
 */

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;

    while (index > 0) {
      const element = this.values[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];

      if (parent <= element) {
        this.values[parentIndex] = this.values[index];
        this.values[index] = parent;
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMax() {
    const root = this.values.shift();

    if (this.values.length > 0) {
      this.values.unshift(this.values.pop());
      this.sinkDown();
    }

    return root;
  }

  sinkDown(parentIndex = 0) {
    const leftChildIndex = 2 * parentIndex + 1;
    const rightChildIndex = 2 * parentIndex + 2;
    const parent = this.values[parentIndex];
    const leftElement = this.values[leftChildIndex];
    const rightElement = this.values[rightChildIndex];

    if (parent < leftElement && parent > rightElement) {
      this.values[parentIndex] = leftElement;
      this.values[leftChildIndex] = parent;
      this.sinkDown(leftChildIndex);
    }

    if (parent < rightElement && parent > leftElement) {
      this.values[parentIndex] = rightElement;
      this.values[rightChildIndex] = parent;
      this.sinkDown(rightChildIndex);
    }
  }
}

class PriorityNode {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push(new PriorityNode(value, priority));
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;

    while (index > 0) {
      const element = this.values[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];

      if (parent.priority >= element.priority) {
        this.values[parentIndex] = this.values[index];
        this.values[index] = parent;
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  dequeue() {
    const root = this.values.shift();

    if (this.values.length > 0) {
      this.values.unshift(this.values.pop());
      this.sinkDown();
    }

    return root;
  }

  sinkDown(parentIndex = 0) {
    const leftChildIndex = 2 * parentIndex + 1;
    const rightChildIndex = 2 * parentIndex + 2;
    const parent = this.values[parentIndex];
    const leftElement = this.values[leftChildIndex];
    const rightElement = this.values[rightChildIndex];

    if (leftElement?.priority < parent.priority && leftElement?.priority < rightElement?.priority) {
      this.values[parentIndex] = leftElement;
      this.values[leftChildIndex] = parent;
      this.sinkDown(leftChildIndex);
    }

    if (rightElement?.priority < parent?.priority && rightElement?.priority < leftElement?.priority) {
      this.values[parentIndex] = rightElement;
      this.values[rightChildIndex] = parent;
      this.sinkDown(rightChildIndex);
    }
  }
}

const p = new PriorityQueue();

p.enqueue('Hey', 2);
p.enqueue('Hey', 3);
p.enqueue('Hey', 6);
p.enqueue('Hey', 1);
p.enqueue('Hey', 7);
p.enqueue('Hey', 12);
p.enqueue('Hey', 5);

// console.log(p.values);
// console.log(p.dequeue(12));
// console.log(p.values);

module.exports = PriorityQueue;
