const arr = [0, 3, 2, 5, 5, -1, -5, 23];
let count = 0;

const quickSort = (array) => {
  if (array.length <= 1) return array;

  const pivot = array[0];
  const less = [];
  const greater = [];

  for (let i = 1; i < array.length; i++) {
    count += 1;

    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
    console.log(
      "pivot = ", pivot,
      "count = ", count,
      "less = ", less,
      "greater = ", greater
    )
  }

  
  // return [...quickSort(less), pivot, ...quickSort(greater)];
  const sortedLess = quickSort(less);
  const sortedGreater = quickSort(greater);
  console.log("sortedLess = ", sortedLess);
  console.log("sortedGreater = ", sortedGreater);
  return [...sortedLess, pivot, ...sortedGreater];
};

const sortedArray = quickSort(arr);
console.log("quickSort(arr) = ", sortedArray);
+console.log('count = ', count);
