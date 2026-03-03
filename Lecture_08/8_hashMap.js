// В JavaScript хеш-таблица или ассоциативный массив реализуется с использованием объектов. Вот пример создания и использования ассоциативного массива (или "объекта" в терминах JavaScript):


// Создание пустого объекта (ассоциативного массива)
let book = {
    "title": "The One",
    "title": "The Two"
};

console.log(book.title);  // "The Two"


// Добавление ключей и значений в объект (ассоциативный массив)
book["title"] = "The Great Gatsby";
book["author"] = "F. Scott Fitzgerald";
book["year"] = 1925;
book["pages"] = 218;

// Или можно использовать синтаксис точки для доступа к ключам
book.title = "The Great Gatsby";
book.author = "F. Scott Fitzgerald";
book.year = 1925;

// Вывод значений
console.log(book.title);  // "The Great Gatsby"
console.log(book.author); // "F. Scott Fitzgerald"
console.log(book.year);   // 1925
console.log(book.pages);   // 218
console.log(book) // {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, pages: 218}


// В приведенном примере `book` представляет собой объект, который используется как ассоциативный массив. Ключи (например, "title", "author", "year") являются строками, и вы можете использовать их для доступа к соответствующим значениям.

// Объекты в JavaScript также могут использоваться для реализации хеш-таблиц и других структур данных.

// // 200 -> 0-9
// _|_|_|_|_|_|_|_|_|_|_|_|
// 0|1|2|3|4|5|6|...|7|8|9|

console.log(" newBook as new Map ");

const newBook = new Map();

newBook.set("title", "The Great Gatsby");
newBook.set("author", "F. Scott Fitzgerald");
newBook.set("year", 1925);
newBook.set("pages", 218);

console.log(newBook.get("title"));
console.log(newBook.get("author"));
console.log(newBook.get("year"));
console.log(newBook.get("pages"));
console.log(Object.fromEntries(newBook));

/**
 * Какие из следующих функций являются последовательными?
5.1 f(x) = 1 .... Возвращает "1" дnя nюбых входных значений
Ответ: Функция последовательна.
5.2 f(x) = rand() ... . """ " .. " .. ··· Возвращает сnучайноечисnо
Ответ: Функция непоследовательна.
5.3 f(x) = next_empty_slot() ........... .... ... ........
Ответ: Функция непоследовательна.
Возвращает индекс сnедующеrо
пустого эnемента в хеw-табnице
5.4 f(x) = len(x) ". """.".".".". Возвращает дnину поnученной строки
Ответ: Функция последовательна. 
 */