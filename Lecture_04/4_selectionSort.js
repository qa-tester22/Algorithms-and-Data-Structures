function selectionSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;

        // Находим индекс минимального элемента в оставшейся части массива
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Обмен значениями текущего элемента и минимального элемента
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// Пример использования
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(unsortedArray.slice());

console.log("Исходный массив:", unsortedArray);
console.log("Отсортированный массив:", sortedArray);
