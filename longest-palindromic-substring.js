/**
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer
 *
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 *
 */

function longestPalindromicSubstring(s) {
  let longest = s[0];

  function isPalindrome(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > longest.length) {
        longest = s.substring(l, r + 1);
      }

      l--;
      r++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    isPalindrome(i, i);
    isPalindrome(i, i + 1);
  }

  console.log(longest);

  return longest;
}

longestPalindromicSubstring('aafgcgf');
