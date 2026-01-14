/**
 * 34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
nums is a non-decreasing array.
-10^9 <= target <= 10^9
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
   
  const left = lowerBound(nums, target);
  if (left === nums.length || nums[left] !== target) return [-1, -1];

  const right = upperBound(nums, target) - 1;
  return [left, right];
};

function lowerBound(nums, target) {
  let first = 0;
  let last = nums.length; // важный трюк - правая граница НЕ включительно

  while (first < last) {
    const mid = Math.floor(first + (last - first) / 2);
    if (nums[mid] < target) {
      first = mid + 1;
    } else {
      last = mid;
    }
  }
  return first;
}

function upperBound(nums, target) {
  let first = 0;
  let last = nums.length;

  while (first < last) {
    const mid = Math.floor(first + (last - first) / 2);
    if (nums[mid] <= target) {
      first = mid + 1;
    } else {
      last = mid;
    }
  }
  return first;
}

// Example 1:
let nums1 = [5,7,7,8,8,10];
let target1 = 8;
// Output: [3,4]

// Example 2:
let nums2 = [5,7,7,8,8,10]; 
let target2 = 6;
// Output: [-1,-1]

// Example 3:
let nums3 = []; 
let target3 = 0;
// Output: [-1,-1]

console.log("Example 1: " + searchRange(nums1, target1));

console.log("Example 2: " + searchRange(nums2, target2));

console.log("Example 3: " + searchRange(nums3, target3));

/**
 * 34. Найдите первую и последнюю позицию элемента в отсортированном массиве.

Дан массив целых чисел nums, отсортированных в порядке убывания. Необходимо найти начальную и конечную позиции заданного targetзначения.

Если targetзначение не найдено в массиве, вернуть [-1, -1].

Вам необходимо написать алгоритм с  O(log n)заданной временной сложностью.

 

Пример 1:

Входные данные: nums = [5,7,7,8,8,10], target = 8
 Выходные данные: [3,4]
Пример 2:

Входные данные: nums = [5,7,7,8,8,10], target = 6.
 Выходные данные: [-1,-1].
Пример 3:

Входные данные: nums = [], target = 0
 Выходные данные: [-1,-1]
 

Ограничения:

0 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
numsявляется неубывающим массивом.
-10^9 <= target <= 10^9 */