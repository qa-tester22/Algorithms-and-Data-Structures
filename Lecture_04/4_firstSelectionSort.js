function selectionSort(arr) {
    const len = arr.length;
    const sortedArray = [];

    for (let i = 0; i < len; i++) {
        // Находим минимальный элемент в оставшейся части массива
        let minIndex = 0;
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Добавляем минимальный элемент в новый массив и удаляем его из исходного
        sortedArray.push(arr.splice(minIndex, 1)[0]);
        console.log(arr);
    }

    return sortedArray;
}

// Пример использования
// const unsortedArray = [5, -3, 6, 2, 10];
const unsortedArray2 = [51, 23, 36, -267, 109];
// const sortedArray = selectionSort(unsortedArray.slice());
//const sortedArray = selectionSort(unsortedArray);

// console.log('slice ~ ' , unsortedArray.slice())

const sortedArray2 = selectionSort(unsortedArray2.slice());


// console.log("Исходный массив - первый:", unsortedArray);
// console.log("Отсортированный массив - первый:", sortedArray);


console.log("Исходный массив - второй:", unsortedArray2);
console.log("Отсортированный массив - второй:", sortedArray2);

/*

sortedArray.push(arr.splice(minIndex, 1)[0]);

1. `arr.splice(minIndex, 1)`: Этот вызов метода `splice` удаляет один элемент из массива `arr` по индексу `minIndex` и возвращает массив удаленных элементов. В данном случае, так как мы передаем второй аргумент `1`, будет удален только один элемент.

2. `[0]`: Поскольку метод `splice` возвращает массив удаленных элементов, а в данном случае мы удаляем только один элемент, мы обращаемся к элементу с индексом 0 в этом возвращенном массиве, чтобы получить сам удаленный элемент.

3. `sortedArray.push(...)`: Этот элемент затем добавляется в конец массива `sortedArray` с использованием метода `push`.

Таким образом, строка кода `sortedArray.push(arr.splice(minIndex, 1)[0]);` удаляет минимальный элемент из `arr` и добавляет его в конец массива `sortedArray`.
*/