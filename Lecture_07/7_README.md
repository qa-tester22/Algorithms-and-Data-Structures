# Lecture 7: Quicksort (Быстрая сортировка)

Quicksort is a **divide-and-conquer** sorting algorithm.

Idea:
1. Pick a **pivot** element.
2. **Partition** the array into:
   - left: elements `<= pivot` (or `< pivot`, depends where you put duplicates)
   - pivot
   - right: elements `> pivot` (or `>= pivot`)
3. Recursively quicksort left and right.
4. **Base case**: arrays of size `0` or `1` are already sorted.

This is exactly the “split into smaller pieces, solve them, glue back together” pattern.

## Walkthrough (like in the slides)

Example: `[33, 10, 15]`  
Pick pivot `33`.

- left: `[10, 15]` (all `< 33`)
- pivot: `[33]`
- right: `[]`

If left and right were already sorted, you can assemble:
`[10, 15] + [33] + [] = [10, 15, 33]`.

How do we sort the subarrays? Same trick: call quicksort again, until we hit the base case.

## Time complexity (Big O)

- **Average / expected case**: `O(n log n)`
- **Worst case**: `O(n^2)`  
  This happens when partitions are extremely unbalanced over and over (for example, pivot is always the smallest or largest element).
- **Space complexity**:
  - Functional (creates new arrays): `O(n)` extra space
  - In-place partition: `O(log n)` recursion stack on average, `O(n)` in the worst case

Why quicksort is popular:
- In practice it is often very fast due to small constant factors and good cache behavior.
- In-place versions avoid extra allocations.

## Why worst case happens

If you always choose the **first element** as pivot and the input is already sorted:
- left becomes empty, right becomes size `n-1`
- recursion depth becomes `n`
- total work turns into `1 + 2 + ... + (n-1) = O(n^2)`

Fix: choose a better pivot strategy (random pivot, median-of-three, middle element, etc.).

## Implementation (simple, readable)

This version is easiest to understand but allocates new arrays.

```ts
export const quickSort = (arr: number[]): number[] => {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const rest = arr.slice(1);

  const left = rest.filter((x) => x <= pivot);
  const right = rest.filter((x) => x > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
};
```

## Implementation (in-place, fast)

This version mutates the array and is closer to what you see in production implementations.

```ts
const swap = (a: number[], i: number, j: number) => {
  const t = a[i];
  a[i] = a[j];
  a[j] = t;
};

const partitionHoare = (a: number[], low: number, high: number) => {
  const pivot = a[Math.floor((low + high) / 2)];
  let i = low - 1;
  let j = high + 1;

  while (true) {
    do i++;
    while (a[i] < pivot);

    do j--;
    while (a[j] > pivot);

    if (i >= j) return j;
    swap(a, i, j);
  }
};

export const quickSortInPlace = (
  a: number[],
  low = 0,
  high = a.length - 1
): number[] => {
  if (low >= high) return a;

  const p = partitionHoare(a, low, high);
  quickSortInPlace(a, low, p);
  quickSortInPlace(a, p + 1, high);

  return a;
};
```

## Common pitfalls

- **Duplicates**: if you partition badly, duplicates can create unbalanced splits.
  - A practical upgrade is **3-way partitioning** (Dutch National Flag) to group `< pivot`, `== pivot`, `> pivot`.
- **Recursion depth**: worst case can blow the call stack for large arrays.
  - Use randomized pivot and/or switch to iterative approaches for extreme inputs.

## Mini exercises

1. Implement quicksort with different pivots: first, last, middle, random. Compare performance on:
   - already sorted input
   - reverse sorted input
   - random input
2. Add a counter for comparisons and print it for each pivot strategy.
3. Implement 3-way partitioning and test on data with many duplicate values.

## Файлы с кодом для практики
- `7_quickSort.js` - быстрая сортировка (pivot = первый элемент) + счётчик итераций/сравнений

- `7_sumLecture_6_quickSort.js` - сумма элементов массива (цикл) + заготовки/комментарии к рекурсивной сумме и quicksort

- `7_homework.md` - домашка (5 задач LeetCode: quicksort-тема + stack-квесты)

- `7_terms.json` - термины лекции
