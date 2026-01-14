/**
 * 704. Binary Search
Solved
Easy
Topics
premium lock icon
Companies
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 10^4
-10^4 < nums[i], target < 10^4
All the integers in nums are unique.
nums is sorted in ascending order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    start = 0
    end = nums.length - 1

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (target === nums[mid]) {
            return mid;
        } else {
            if (target > nums[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
};

// Example 1:
nums1 = [-1,0,3,5,9,12]; 
target1 = 9;
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
nums2 = [-1,0,3,5,9,12]; 
target2 = 2;
// Output: -1
// Explanation: 2 does not exist in nums so return -1


console.log("for example 1 is " + search(nums1, target1));

console.log("for example 2 is " + search(nums2, target2));


/**
 * 704. Бинарный поиск

Дан массив целых чисел nums, отсортированный в порядке возрастания, и целое число target. Напишите функцию для поиска targetв массиве nums. Если targetсуществует, верните его индекс. В противном случае верните -1.

Вам необходимо написать алгоритм с O(log n)заданной временной сложностью.

 

Пример 1:

Входные данные: nums = [-1,0,3,5,9,12], target = 9
 Выходные данные: 4
 Пояснение: число 9 существует в переменной nums, и его индекс равен 4.
Пример 2:

Входные данные: nums = [-1,0,3,5,9,12], target = 2.
 Выходные данные: -1.
 Пояснение: число 2 не существует в массиве nums, поэтому возвращается -1.
 

Ограничения:

1 <= nums.length <= 10^4
-10^4 < nums[i], target < 10^4
Все целые числа в numsявляются уникальными .
numsотсортировано в порядке возрастания.
 */