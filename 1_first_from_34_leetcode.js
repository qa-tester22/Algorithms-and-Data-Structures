function lowerBound(nums, target) {
  let first = 0;
  let last = nums.length;
  let step = 0;

  while (first < last) {
    step++;
    console.log("step = " + step);
    const mid = Math.floor(first + (last - first) / 2);
    console.log("mid = " + mid);
    if (nums[mid] < target) first = mid + 1;
    else last = mid;
    console.log("first = " + first);
    console.log("last = " + last);
  }

    if (first === nums.length || nums[first] !== target) return [-1];

  return first;
}

// let nums = [8, 8, 8, 8, 8, 8];
// let nums = [2, 4, 8, 8, 8, 12];
let nums = [1, 2, 3, 4, 5, 6];
let target = 8;

console.log("first target has index " + lowerBound(nums, target));