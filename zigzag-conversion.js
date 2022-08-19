/*

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"

 */

function convert(s, numRows) {
  if (numRows === 1) {
    return s;
  }

  let result = [],
    [row, column] = [0, 0],
    counter = 0;

  for (let i = 0; i < numRows; i++) {
    result.push([]);
  }

  while (counter < s.length) {
    result[row][column] = s[counter];

    if (column % (numRows - 1) === 0 && row < numRows - 1) {
      row++;
    } else if (row <= numRows - 1) {
      row--;
      column++;
    }

    counter++;
  }

  return result.flat(Infinity).join('');
}

convert('PAYPALISHIRING', 4);
