/**
 *
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 *
 * Example 1:
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 *
 * Example 2:
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 *
 */

function addTwoNumbers(nums1, nums2) {
  nums1.push.apply(nums1, nums2);
  nums1 = nums1.sort((a, b) => a - b);

  let middle = nums1.length / 2;
  middle = Math.floor(middle);

  if (nums1.length % 2 === 0) {
    return (nums1[middle - 1] + nums1[middle]) / 2;
  } else {
    return nums1[middle];
  }
}

console.log(addTwoNumbers([1, 3], [2]));
