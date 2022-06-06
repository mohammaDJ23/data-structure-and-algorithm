// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(4)
//      '   #   '
//      '  ###  '
//      ' ##### '
//      '#######'

function pyramid(n) {
  let symbol = '',
    maxLength = 2 * n - 1,
    midPoint = Math.floor(maxLength / 2),
    space = 0;

  for (let i = 1; i <= n; i++) {
    space = Math.abs(i - maxLength + midPoint);

    for (let j = 0; j < maxLength; j++) {
      if (j < space || j >= maxLength - space) {
        symbol += ' ';
      } else {
        symbol += '#';
      }
    }

    console.log(symbol);
    symbol = '';
  }
}

pyramid(10);
