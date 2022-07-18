/**
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 */

function twoSum(numbers, target) {
  const indexes = [];
  let minTarget = Infinity;
  let minNumber = minTarget;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      minNumber = Math.abs(numbers[i] + numbers[j] - target);

      if (minNumber < minTarget) {
        minTarget = minNumber;

        indexes[0] = i;
        indexes[1] = j;
      }
    }
  }

  return indexes;
}

console.log(twoSum([3, 5, 8, 11, 4, 12], 12));
