// 1) Sum (recursion)
let myArray = [0, 1, 2, 3];
let count = 0;

function summ(array) {
  if (array.length === 0) return 0;

  count += 1;
  console.log({array});
  return array[0] + summ(array.slice(1));
}

count = 0;
console.log("sum of []:", summ([]));
console.log("sum of myArray:", summ(myArray));
console.log("count:", count);
console.log({myArray});

// { array: [ 0, 1, 2, 3 ] }  | 0 + summ([1,2,3])  |  0 + 6 = 6
// { array: [ 1, 2, 3 ] }     | 1 + summ([2,3])    |  1 + 5 = 6
// { array: [ 2, 3 ] }        | 2 + summ([3])      |  2 + 3 = 5
// { array: [ 3 ] }           | 3 + summ([])       |  3 + 0 = 3
//                            | 0                  | 

// 2) Count elements (recursion)
// Напишите рекурсивную функцию для подсчета
// элементов в списке. 

let secondArray = [1, 1, 1, 1, 1];
let count2 = 0;

function quantity(array) {
  if (array.length === 0) return 0;

  count2 += 1;
  return 1 + quantity(array.slice(1));
}

count2 = 0;
console.log("quantity of []:", quantity([]));
console.log("quantity of secondArray:", quantity(secondArray));
console.log("count2:", count2);

// 3) Max (recursion) - fixed
let thirdArray = [2, 5, 8, 1];
let count3 = 0;

function max(array) {
  if (array.length === 0) return null;
  if (array.length === 1) return array[0];

  count3 += 1;

  const temporaryMax = max(array.slice(1));
  console.log({temporaryMax});
  console.log({array})
  return array[0] > temporaryMax ? array[0] : temporaryMax;
}

count3 = 0;
console.log("max of thirdArray:", max(thirdArray));
console.log("count3:", count3);
console.log("max of []:", max([]));
