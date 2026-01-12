const array = [1,4,5,8,5,1,2,7,5,2,11];
let count = 0;
function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null
}

// console.log(linearSearch(array, 111));
// console.log('count = ', count);

// console.log(linearSearch(array, 4));
// console.log('count = ', count);

console.log(linearSearch(array, 2));
console.log('count = ', count);

// console.log(linearSearch(array, 11));
// console.log('count = ', count);

// Ищем заданное число из массива с помощью линейного поиска
// Тест-кейсы минимум:

// элемент в середине
// элемент в начале
// элемент в конце
// элемента нет
// массив пустой
// массив из 1 элемента