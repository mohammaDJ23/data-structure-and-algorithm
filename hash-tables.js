/**
 *
 * giving a key and make a index based on size of keyMap using hash function
 * and store entire [key, value] (or [[key, value], [key, value], ...]) inside keyMap
 *
 */

class HashTable {
  constructor(size = 10) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME_NUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const value = key[i].charCodeAt(0) - 96;
      total = (total * PRIME_NUMBER + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  get(acceptedKey) {
    const index = this._hash(acceptedKey);

    if (!this.keyMap[index]) {
      return undefined;
    }

    for (const element of this.keyMap[index]) {
      const [key, value] = element;

      if (key === acceptedKey) {
        return value;
      }
    }
  }

  values() {
    const values = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          values.push(this.keyMap[i][j][1]);
        }
      }
    }

    return new Set(values);
  }

  keys() {
    const keys = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }

    return new Set(keys);
  }
}
