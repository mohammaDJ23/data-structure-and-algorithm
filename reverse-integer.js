function reverse(x) {
  const num = +Math.abs(x).toString().split('').reverse().join('');

  if (num >= Math.abs(Math.pow(-2, 31))) return 0;

  return num * Math.sign(x);
}

reverse(-123);
