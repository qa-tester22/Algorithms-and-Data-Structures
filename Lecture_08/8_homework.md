# Д/З 8. Хеш-таблицы (Hash Tables)

Тема: использование **hash map / hash set** как готовой структуры (без реализации внутренностей и без коллизий).

## Домашнее задание 8 (5 задач).

### Уровень 1 (Easy) - 3 задачи
1. [387. First Unique Character in a String][lc387]  
   Тренирует: частотный словарь (frequency counter) и один проход по строке.

2. [169. Majority Element][lc169]  
   Тренирует: подсчет частот через hash map (плюс можно обсудить альтернативу без map).

3. [290. Word Pattern][lc290]  
   Тренирует: соответствие "шаблон -> слово" и "слово -> шаблон" через два hash map (или один map + set).

### Уровень 2 (Medium) - 2 задачи
4. [560. Subarray Sum Equals K][lc560]  
   Тренирует: prefix sum + hash map частот. Это очень важный паттерн.

5. [347. Top K Frequent Elements][lc347]  
   Тренирует: hash map частот + выбор top-k (heap или bucket).

## Как сдавать
- В каждом решении добавь 2-4 строки пояснения: какую структуру ты использовала (Map/Set) и почему.
- Для задач 560 и 347 обязательно напиши, что хранится в map (ключ и значение), и как это ускоряет решение.

## Ссылки на задачи
- 387: First Unique Character in a String - [LeetCode][lc387]
- 169: Majority Element - [LeetCode][lc169]
- 290: Word Pattern - [LeetCode][lc290]
- 560: Subarray Sum Equals K - [LeetCode][lc560]
- 347: Top K Frequent Elements - [LeetCode][lc347]

---

# Архив домашних заданий 1-7

## Д/З 1
Задачи: 283, 740, 35, 278, 34.

## Д/З 2
Задачи: 215, 1, 242, 46, 217.

## Д/З 3
Квест: 5 задач = 3 задачи уровня 1, и 2 задачи уровня 2.

## Д/З 4
Квест: 2 уровень 3 задача, 27, 912, 21, 203.

## Д/З 5
1 задача квест Литкод уровень 3 (1441), 509, 20, 155, 206.

## Д/З 6
Задачи Литкода: 1979, 914, 1480, 374, 83.

## Д/З 7
Задачи: 268, Квест Стэк 2 задача (150), Квест Стек 3 задача (636), 905, 977.

---

[lc387]: https://leetcode.com/problems/first-unique-character-in-a-string/
[lc169]: https://leetcode.com/problems/majority-element/
[lc290]: https://leetcode.com/problems/word-pattern/
[lc560]: https://leetcode.com/problems/subarray-sum-equals-k/
[lc347]: https://leetcode.com/problems/top-k-frequent-elements/
