# Лекция 9. Команды в VS Code для просмотра IP, домена и структуры DNS

## Что это за файл
Этот файл нужен для практики в **VS Code** через встроенный терминал.

Открыть терминал в VS Code:

**Terminal → New Terminal**

Дальше вводить команды прямо там.

---

## 1. Как по имени сайта посмотреть IP

### Windows
```bash
nslookup google.com
```

### macOS / Linux
```bash
dig google.com
```

или

```bash
host google.com
```

### Универсально через ping
```bash
ping google.com
```

### Что это делает
Команда отправляет **DNS query** и получает ответ вида:

```text
google.com → IP address
```

Пример:

```text
Name:    google.com
Address: 142.250.151.113
```

---

## 2. Как по IP посмотреть имя сайта

Это называется **reverse DNS lookup**.

### Windows
```bash
nslookup 142.250.151.113
```

### macOS / Linux
```bash
dig -x 142.250.151.113
```

или

```bash
host 142.250.151.113
```

### Что это делает
Команда проверяет, есть ли у IP обратная DNS-запись.

Пример:

```text
142.250.151.113 → some-google-hostname
```

Важно:
Не у каждого IP есть понятное доменное имя. Иногда обратной записи нет.

---

## 3. Как посмотреть сразу несколько IP у сайта

### Windows
```bash
nslookup google.com
```

### macOS / Linux
```bash
dig google.com
```

### Что видно в ответе
У одного сайта может быть много адресов:

- **IPv4**
- **IPv6**

Пример:

```text
google.com
Addresses:
142.250.151.113
142.250.151.101
2a00:1450:4009:c17::8b
```

### Почему IP несколько
Потому что большие сайты используют:

- **load balancing**
- **CDN**
- **geo routing**
- распределённую инфраструктуру

---

## 4. Как посмотреть всю структуру ответа DNS

### Windows
```bash
nslookup google.com
```

### Что означает вывод
Пример:

```text
Server:  public-dns-a.as9105.net
Address: 79.79.79.79

Non-authoritative answer:
Name:    google.com
Addresses:  2a00:1450:4009:c17::8b
          142.250.151.113
```

### Разбор

#### `Server`
Это **DNS server**, который отвечал на запрос.

Пример:

```text
Server: public-dns-a.as9105.net
```

Это не сайт и не твой IP. Это DNS-сервер, который помог найти адрес сайта.

#### `Address`
Это IP DNS-сервера.

Пример:

```text
79.79.79.79
```

#### `Non-authoritative answer`
Это значит, что ответ пришёл не напрямую от официального DNS сервера домена, а из кэша или через промежуточный DNS-сервер.

#### `Name`
Это имя сайта, которое ты запросила.

#### `Addresses`
Это IP-адреса сайта.

Там могут быть:

- **IPv4**
- **IPv6**

---

## 5. Как посмотреть подробную DNS-информацию

### macOS / Linux
```bash
dig google.com
```

### Полезные поля в ответе `dig`

#### `ANSWER SECTION`
Главный ответ DNS.

```text
google.com.    173  IN  A     142.250.151.113
```

#### `A`
IPv4 address.

#### `AAAA`
IPv6 address.

#### `MX`
Mail server.

#### `NS`
Name servers.

#### `TTL`
**Time To Live**. Время, сколько ответ можно хранить в кэше.

---

## 6. Как посмотреть name servers домена

### macOS / Linux
```bash
dig google.com NS
```

### Windows
```bash
nslookup -type=NS google.com
```

### Что это показывает
Какие DNS-серверы отвечают за домен.

Пример:

```text
google.com → ns1.google.com
```

---

## 7. Как посмотреть mail servers домена

### macOS / Linux
```bash
dig google.com MX
```

### Windows
```bash
nslookup -type=MX google.com
```

### Что это показывает
Какие серверы принимают почту для домена.

---

## 8. Как посмотреть путь до сайта

### Windows
```bash
tracert google.com
```

### macOS / Linux
```bash
traceroute google.com
```

### Что это показывает
Маршрут пакета через интернет от твоего компьютера до сервера.

Это уже не DNS, а **network route**.

---

## 9. Как быстро увидеть IP через ping

```bash
ping google.com
```

Пример:

```text
Pinging google.com [142.250.151.113] with 32 bytes of data:
```

IP будет показан в квадратных скобках.

---

## 10. Что важно понимать

### Домен и IP это не одно и то же

```text
google.com → 142.250.151.113
```

- **domain name** — удобное имя для человека
- **IP address** — числовой адрес для сети

### DNS это не хеш-функция
DNS не вычисляет IP из имени по формуле.
DNS хранит и находит соответствие:

```text
domain → IP
```

То есть DNS можно представить как большую **key-value system**, но это не просто одна hash table.

---

## 11. Мини-шпаргалка

### Посмотреть IP сайта
```bash
nslookup google.com
```

```bash
dig google.com
```

### Посмотреть имя по IP
```bash
nslookup 142.250.151.113
```

```bash
dig -x 142.250.151.113
```

### Посмотреть DNS-серверы домена
```bash
nslookup -type=NS google.com
```

```bash
dig google.com NS
```

### Посмотреть почтовые серверы
```bash
nslookup -type=MX google.com
```

```bash
dig google.com MX
```

### Посмотреть маршрут
```bash
tracert google.com
```

```bash
traceroute google.com
```

---

## 12. Короткий вывод

Через встроенный терминал в **VS Code** можно:

- по имени сайта узнать его **IP address**
- по IP узнать доменное имя через **reverse DNS**
- посмотреть DNS-ответ и его структуру
- узнать **name servers** и **mail servers** домена
- посмотреть путь пакета до сайта через **traceroute**

