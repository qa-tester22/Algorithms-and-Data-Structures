// В Java ассоциативный массив реализуется с использованием класса `HashMap` из стандартной библиотеки Java. Вот пример создания и использования `HashMap`:


import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // Создание объекта HashMap
        HashMap<String, Object> book = new HashMap<>();

        // Добавление ключей и значений в HashMap
        book.put("title", "The Great Gatsby");
        book.put("author", "F. Scott Fitzgerald");
        book.put("year", 1925);

        // Получение значений по ключам
        String title = (String) book.get("title");
        String author = (String) book.get("author");
        int year = (int) book.get("year");

        // Вывод значений
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Year: " + year);
          // Вывод всего объекта
        System.out.println("Book details: " + book); // применяется метод toString()
    }
}


// Здесь `HashMap` представляет собой ассоциативный массив, где ключами являются строки (`String`), а значениями могут быть объекты любого типа (`Object`). Обратите внимание, что при извлечении значений из `HashMap` мы используем явное приведение типов (`(String)` и `(int)`), поскольку типы значений необходимо указывать при извлечении.

// Класс `HashMap` предоставляет множество методов для работы с ассоциативным массивом, таких как `put`, `get`, `remove` и др.