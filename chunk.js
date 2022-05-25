function chunk(arr, count) {
  const chunkedArr = [];

  for (let i = 0; i < Math.ceil(arr.length / count); i++) {
    chunkedArr.push(arr.slice(i * count, i * count + count));
  }

  return chunkedArr;
}

console.log(chunk([1, 2, 3, 4, 5], 2));
