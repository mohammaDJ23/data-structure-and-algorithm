class Test {
  constructor() {
    this.test = 'test';
  }
}

function clone(instance) {
  const copy = new instance.constructor();
  return Object.assign(copy, instance);
}

const test = new Test();
let copy = clone(test);

console.log(test === copy, copy.test, test.test);
