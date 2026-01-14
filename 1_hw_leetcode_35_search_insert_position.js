/**
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Constraints:

1 <= nums.length <= 10^4
-10^4 <= nums[i] <= 10^4
nums contains distinct values sorted in ascending order.
-10^4 <= target <= 10^4
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    let middle;
    while(start <= end) {
        middle = Math.floor((start + end) / 2);
        if(nums[middle] <= target) {
            start = middle  + 1;
        } else {
            end = middle - 1;
        }
    }
    console.log(start + '-' + middle + "-" + end)
    return ((nums[end] === target)?end:start);         
};

// Example 1:

let nums1 = [1,3,5,6]; 
let target1 = 5;
// Output: 2

// Example 2:

let nums2 = [1,3,5,6]; 
let target2 = 2;
// Output: 1

// Example 3:

let nums3 = [1,3,5,6];
let target3 = 7;
// Output: 4

console.log("Example 1:");
searchInsert(nums1, target1);
console.log("Example 2:");
searchInsert(nums2, target2);
console.log("Example 3:");
searchInsert(nums3, target3);

/**
 * 35. Поиск. Вставка позиции.

Имея отсортированный массив различных целых чисел и целевое значение, верните индекс, если целевое значение найдено. В противном случае верните индекс, по которому оно находилось бы, если бы было вставлено в порядке возрастания.

Вам необходимо написать алгоритм с  O(log n)заданной временной сложностью.

 

Пример 1:

Входные данные: nums = [1,3,5,6], target = 5
 Выходные данные: 2
Пример 2:

Входные данные: nums = [1,3,5,6], target = 2
 Выходные данные: 1
Пример 3:

Входные данные: nums = [1,3,5,6], target = 7
 Выходные данные: 4
 

Ограничения:

1 <= nums.length <= 10^4
-10^4 <= nums[i] <= 10^4
numsСодержит уникальные значения, отсортированные в порядке возрастания .
-10^4 <= target <= 10^4
 */