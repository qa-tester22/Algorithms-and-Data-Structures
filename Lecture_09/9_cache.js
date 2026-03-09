// Когда говорится о кэше в контексте веб-сайтов, обычно имеется в виду кэширование на стороне клиента (в браузере) или на стороне сервера. Давайте рассмотрим оба варианта.
/*
//Кэширование на стороне клиента (в браузере):
1.LocalStorage / SessionStorage:
   - В браузере есть объекты `localStorage` и `sessionStorage`, которые предоставляют хранилище для данных в виде ключ-значение.
   - Вы можете сохранять данные в `localStorage` или `sessionStorage` и проверять, есть ли данные для определенного URL при каждом запросе.
*/

function fetchData(url) {
    if (localStorage.getItem(url)) {
        // Данные есть в локальном хранилище, используем их
        return JSON.parse(localStorage.getItem(url));
    } else {
        // Данных нет в локальном хранилище, делаем запрос на сервер
        let data = fetchDataFromServer(url);
        
        // Сохраняем данные в локальном хранилище
        localStorage.setItem(url, JSON.stringify(data));

        return data;
    }
}

function fetchDataFromServer(url) {
    // Запрос к серверу для получения данных по URL
    // ...

    return responseData;
}

/*
 Кэширование на стороне сервера:
2. HTTP-кэширование:
   - Сервер может отправлять заголовки HTTP, такие как `Cache-Control` и `ETag`, чтобы указать браузеру, как долго кэшировать ресурс и проверять обновления.
   - Браузер сохраняет кэшированные ресурсы и может использовать их при следующих запросах.
*/
// Серверный код (Node.js) с использованием Express.js
const express = require('express');
const app = express();

// Middleware для установки заголовков Cache-Control
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Максимальное время кэширования в секундах
    next();
});

// Роут для получения данных
app.get('/data', (req, res) => {
    // Получение данных и отправка их клиенту
    // ...
    res.send(responseData);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// Оба эти подхода могут быть использованы вместе в зависимости от конкретных требований вашего веб-приложения.