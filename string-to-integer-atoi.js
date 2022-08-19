function myAtoI(s) {
  const num = parseInt(s);

  if (!num) {
    return 0;
  } else if (num > 2147483647) {
    return 2147483647;
  } else if (num < -2147483648) {
    return -2147483648;
  }

  return num;
}

myAtoI('   -42');
