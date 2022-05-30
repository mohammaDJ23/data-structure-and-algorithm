// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[undefined, undefined],
//     [undefined, undefined]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(chunk) {
  const result = [];

  for (let i = 0; i < chunk; i++) {
    result.push([]);
  }

  let startColumn = 0,
    endColumn = chunk - 1,
    startRow = 0,
    endRow = chunk - 1,
    counter = 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // top

    for (let i = startColumn; i <= endColumn; i++) {
      result[startRow][i] = counter;
      counter++;
    }

    startRow++;

    // right

    for (let i = startRow; i <= endRow; i++) {
      result[i][endColumn] = counter;
      counter++;
    }

    endColumn--;

    // button

    for (let i = endColumn; i >= startColumn; i--) {
      result[endRow][i] = counter;
      counter++;
    }

    endRow--;

    // left

    for (let i = endRow; i >= startRow; i--) {
      result[i][startColumn] = counter;
      counter++;
    }

    startColumn++;
  }

  return result;
}

console.log(matrix(3));
