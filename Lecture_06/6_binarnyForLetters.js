 let count1 = 0
 let count2 = 0
 let letters1 = ['a', 'b', 'c']

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
    //if ((item < start) || (item > end) ) {
        if(start > end) {  
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



//   Для создания массива из букв вы можете использовать следующий подход. 
// Код создает массив из случайных букв:

// create array of letters
const letters = Array(100).fill(null).map(() => String.fromCharCode(Math.floor(Math.random() * 26) + 97));

console.log("Поиск по массиву letters1 = [" + letters1 + "]  циклом даст позицию буквы = " + binarySearch(letters1, "b") + ", а поиск рекурсией нашел букву в позиции = " + recursiveBinarySearch(letters1, 'b') + '.');
console.log("Неотсортированный массив букв = " + letters);
console.log("Отсортировали полученный массив букв = " + letters.sort() + ".");
console.log("Проведя бинарный поиск циклом, получаем позицию буквы в массиве " + binarySearch(letters.sort(), 'ф'));
console.log("Если полученный ответ = -1, то буквы в массиве нет.");
console.log("Рекурсия и Бинарный поиск - получаем позицию буквы в массиве: ");
console.log(recursiveBinarySearch(letters.sort(), 'ф'));


// Этот код создает массив из 100 элементов, каждый из которых представляет собой случайную букву английского алфавита.
//Функция `String.fromCharCode` используется для преобразования числа в соответствующий символ в ASCII-таблице. В данном случае, мы добавляем 97, чтобы генерировать случайные строчные буквы.
// ASCII-коды строчных букв латинского алфавита начинаются с 97. Таким образом, для генерации случайных строчных букв, мы добавляем случайное число от 0 до 25 (поскольку английский алфавит состоит из 26 букв) к ASCII-коду строчной буквы 'a' (который равен 97).

// - `String.fromCharCode(97)` возвращает `'a'`
// - `String.fromCharCode(98)` возвращает `'b'`
// - `String.fromCharCode(99)` возвращает `'c'`

// случайное число от 0 до 25 добавляется к 97, чтобы получить случайную строчную букву.
