
// /*
// Чтобы выстроить слова в алфавитном порядке с использованием бинарного поиска, вам необходимо создать функцию сравнения, которая будет определять, какое слово должно идти раньше в алфавитном порядке. В данном случае, вы можете использовать простое сравнение строк.

// Код бинарного поиска в отсортированном массиве слов:
// */

// Отсортированный массив слов
const sortedWords = ["Маша", "Мила", "Михаил", "Вадим", "Виктор"];

// Функция бинарного поиска
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Сравнение строк
        if (array[mid] === target) {
            return mid; // Найдено совпадение
        } else if (array[mid] < target) {
            left = mid + 1; // Искать в правой части
        } else {
            right = mid - 1; // Искать в левой части
        }
    }

    return -1; // Элемент не найден
}

// Пример использования
const targetWord = "Анна";
const index = binarySearch(sortedWords, targetWord);

if (index !== -1) {
    console.log(`Слово "${targetWord}" найдено на позиции ${index}.
    ****************************************************************************`);
} else {
    console.log(`Слово "${targetWord}" не найдено.
    ***************************************************************************`);
}

/*
В данном коде сравнение строк происходит с использованием операторов `<`, `>`, что автоматически учитывает порядок символов в строках и выстраивает их в алфавитном порядке.
*/


//************************************************************************ */
// вы можете использовать API для получения случайных имен. Например, одним из таких API является "randomuser.me". Вот пример использования этого API для получения случайных имен:

async function getRandomNames(count) {
    const response = await fetch(`https://randomuser.me/api/?results=${count}&inc=name`);
    const data = await response.json();
    // return data.results.map(person => `${person.name.first} ${person.name.last}`);
    return data.results.map(person => `${person.name.first}`);
}

async function generateRandomNames() {
    const randomPeopleNames = await getRandomNames(10);
    console.log(randomPeopleNames);
}

//generateRandomNames();

// В этом примере используется API "randomuser.me", и из ответа извлекаются имена. 

// нужно взять только первое имя из каждого объекта в массиве, а затем отсортировать их:


async function getRandomFirstNames(count) {
    const response = await fetch(`https://randomuser.me/api/?results=${count}&inc=name`);
    const data = await response.json();
    return data.results.map(person => person.name.first);
}

async function generateRandomFirstNamesAndSort() {
    const randomFirstNames = await getRandomFirstNames(10);

    // Сортировка по first name
    const sortedFirstNames = randomFirstNames.sort((a, b) => {
        const firstNameA = a.toLowerCase();
        const firstNameB = b.toLowerCase();

        if (firstNameA < firstNameB) return -1;
        if (firstNameA > firstNameB) return 1;
        return 0;
    });

    //   console.log(sortedFirstNames);
    //   console.log(`inside  ${binarySearch(arrName, 'Mustafa')}`)
}

const arrName = generateRandomFirstNamesAndSort();
console.log(binarySearch(arrName, 'Ann'))

