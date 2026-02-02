/**
 * 283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 10^4
-2^31 <= nums[i] <= 2^31 - 1 */

var moveZeroes = function(nums) {
  let write = 0;

  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      nums[write] = nums[read];
      write++;
    }
  }

  for (let i = write; i < nums.length; i++) {
    nums[i] = 0;
  }
  console.log(nums);

};

// Example 1:
let nums1 = [0,1,0,3,12];
// Output: [1,3,12,0,0]

// Example 2:
let nums2 = [0];
// Output: [0]

moveZeroes(nums1);

moveZeroes(nums2);


/**
 * 283. Переместите нули

Дана целочисленная матрица nums. Переместите все 0 элементы в конец матрицы, сохраняя при этом относительный порядок ненулевых элементов.

Обратите внимание , что это необходимо сделать непосредственно в массиве, не создавая его копию.

Пример 1:
Входные данные: nums = [0,1,0,3,12]
 Выходные данные: [1,3,12,0,0]

 Пример 2:
Входные данные: nums = [0]
 Выходные данные: [0]

Ограничения:

1 <= nums.length <= 10^4
-2^31 <= nums[i] <= 2^31 - 1
 

Дополнительный вопрос: Можно ли минимизировать общее количество выполненных операций?
 */