function cleanStr(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams(str1, str2) {
  return cleanStr(str1) === cleanStr(str2);
}
