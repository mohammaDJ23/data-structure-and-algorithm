/**
 *
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * Example 1:
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Example 2:
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 */

function longestSubString(s) {
  let mySet = new Set(),
    max = 0,
    i = 0,
    j = 0;

  while (i < s.length) {
    if (!mySet.has(s[i])) {
      mySet.add(s[i]);
      i++;
    } else {
      max = Math.max(max, mySet.size);
      mySet.delete(s[j]);
      j++;
    }
  }

  max = Math.max(max, mySet.size);
  return max;
}

longestSubString('pwwkew');
