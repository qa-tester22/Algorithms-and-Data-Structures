const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 70]
let count1 = 0
let count2 = 0

function binarySearch(array, item) {
    let start = 0
    let end = array.length
    let middle;
    let found = false
    let position = -1
    //  while (found === false && start <= end) {
    while (start <= end) {
        count1 += 1
        middle = Math.floor((start + (end - start) / 2));
        if (array[middle] === item) {
            // found = true
            position = middle
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return position;
}

function recursiveBinarySearch(array, item, start = 0, end = array.length) {

    let position = -1
    if (start > end) {
        return position
    }
    let middle = Math.floor((start + (end - start) / 2));
    count2 += 1
    if (item === array[middle]) {
        return middle
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle - 1)
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end)
    }
}

console.log(binarySearch(array, 70))
//console.log(count1)
console.log(recursiveBinarySearch(array, 3, 0, array.length))
//console.log(count2)

// create array
const arr = Array(100).fill(null).map(() => Math.floor(Math.random() * 1000) - 300);
console.log('arr = ' + arr);
console.log(arr.sort((a,b) => (a-b)));

array1 = [
    -92, 58, -285, 143, -276, -217, 16, 12, 614, 664, 599,
    34, 471, -184, -279, 325, 508, 323, 539, -236, -65, 490,
    9, 689, -160, 636, -282, -168, 88, -181, 666, -145, 617,
    -181, 320, -169, -237, -207, -184, 459, 516, -56, 229, 161,
    695, -207, 639, 477, -163, -169, 357, 643, 378, 288, 463,
    239, 540, 412, -287, 630, 105, 627, -102, 92, 682, -235,
    632, 102, 121, 149, 23, 418, -210, 433, 605, 509, -126,
    -289, 632, -231, 222, 77, -83, 4, 497, 89, -68, 414,
    280, -43, 680, 300, 482, 256, -241, -292, 646, -214, 542,
    224
]

array2 = [
    -292, -289, -287, -285, -282, -279, -276, -241, -237, -236, -235,
    -231, -217, -214, -210, -207, -207, -184, -184, -181, -181, -169,
    -169, -168, -163, -160, -145, -126, -102, -92, -83, -68, -65,
    -56, -43, 4, 9, 12, 16, 23, 34, 58, 77, 88,
    89, 92, 102, 105, 121, 143, 149, 161, 222, 224, 229,
    239, 256, 280, 288, 300, 320, 323, 325, 357, 378, 412,
    414, 418, 433, 459, 463, 471, 477, 482, 490, 497, 508,
    509, 516, 539, 540, 542, 599, 605, 614, 617, 627, 630,
    632, 632, 636, 639, 643, 646, 664, 666, 680, 682, 689,
    695
]

// console.log(binarySearch(array2, -92));
 console.log('loop = ' + binarySearch(arr.sort((a,b) => (a-b)), 74));
 console.log('recursion = ' + recursiveBinarySearch(arr.sort((a,b) => (a-b)), 74))