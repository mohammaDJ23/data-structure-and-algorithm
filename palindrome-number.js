function isPalindrome(x) {
  x = x.toString();

  const reversed = x.split('').reverse().join('');

  return x === reversed;
}

console.log(isPalindrome(-7497));
