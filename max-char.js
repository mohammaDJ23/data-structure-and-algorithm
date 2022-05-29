// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};

  for (let i = 0; i < str.length; i++) {
    if (chars[str[i]]) {
      chars[str[i]]++;
      continue;
    }

    chars[str[i]] = 1;
  }

  let counter = -Infinity;
  let maxStr = '';

  for (const key in chars) {
    if (chars[key] >= counter) {
      counter = chars[key];
      maxStr = key;
    }
  }

  return maxStr;
}

console.log(maxChar('fffsssss'));
