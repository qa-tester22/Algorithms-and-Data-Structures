// Сумма чисел в массиве - вычисляем с помощью цикла
let array = [2, 4, 6]; // []; [1];  [2,4,6];
let sum = null;
let sumRecursion = null;
let steps = 0;
// create array
// const bigArr = Array(8).fill(null).map(() => Math.floor(Math.random() * 1000) - 355)
const bigArr = Array(100).fill(null).map(() => Math.floor(Math.random() * 300) - 726)
 
// 2|4|6
// _|_|_|_|_|_|_|
// _|_|_|
// _|_|
// 2|4|
function arrayNumbersSumLoop (array, steps = 0) {
    for (let i = 0; i < array.length; i++) {
        ++steps
        sum += array[i]
    }
    return [sum, steps]
}

const SUM_WITH_LOOP = arrayNumbersSumLoop(array)

console.log(`You have an array = [${array}]; 
For these numbers from array the result of loop is sum = ${SUM_WITH_LOOP[0]} and did ${SUM_WITH_LOOP[1]} steps.`);

sum = null;

const BIG_SUM_WITH_LOOP = arrayNumbersSumLoop(bigArr)
console.log(`You have a big array = [${bigArr}]; 
For these numbers from big array the result of loop is sum = ${BIG_SUM_WITH_LOOP[0]} and did ${BIG_SUM_WITH_LOOP[1]} steps.
********************************************************************************`);




// Сумма чисел в массиве - вычисляем с помощью рекурсии *************************************

function arrayNumbersSumRecursion (array, index = 0, steps = 0) {
                                     
    if(index >= array.length) return {"sum": sumRecursion, "steps": steps}      // Базовый случай: если индекс выходит за пределы массива, возвращаем null
    
    const recursiveResult = arrayNumbersSumRecursion(array, index + 1, steps + 1);
    const currentSum = array[index] + recursiveResult.sum;  // Рекурсивный случай: суммируем текущий элемент и  //результат рекурсивного вызова для следующего элемента
   // console.log(array[index])
    // {
        // "sum": valueSum,
        // "steps": valueSteps
        // }
    return {"sum": currentSum, "steps": recursiveResult.steps}
}                                                                       


const SUM_WITH_RECURSION = arrayNumbersSumRecursion(array.slice())
console.log (`You have an array = [${array}];`); 
console.log (`For these numbers from array the result of recursive function is sum = ${SUM_WITH_RECURSION.sum} and did ${SUM_WITH_RECURSION.steps} steps.`);

sumRecursion = null;

const BIG_SUM_WITH_RECURSION = arrayNumbersSumRecursion(bigArr.slice())
console.log (`You have a big array = [${bigArr}];`) 
console.log (`For these numbers from big array the result of recursive function is sum = ${BIG_SUM_WITH_RECURSION.sum} and did ${BIG_SUM_WITH_RECURSION.steps} steps.`) 