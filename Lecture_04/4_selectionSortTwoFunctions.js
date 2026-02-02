function findSmallestIndex(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function selectionSort(arr) {
  const copy = arr.slice();
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const smallestIndex = findSmallestIndex(copy);
    newArr.push(copy.splice(smallestIndex, 1)[0]);
    console.log(`arr = ${arr}`);
    console.log(`copy = ${copy}`);

  }

  return newArr;
}

let arr = [5, 3, 6, 2, 10];
console.log(selectionSort(arr));
console.log(arr);

