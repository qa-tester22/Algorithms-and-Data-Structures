
# Домашнее задание к Лекции 9

Тема: Hash Tables, Hash Functions, Cache

---

## Задача 1

**560. Subarray Sum Equals K**

[https://leetcode.com/problems/subarray-sum-equals-k/](https://leetcode.com/problems/subarray-sum-equals-k/)

Найти количество подмассивов, сумма которых равна `k`.

Подсказка:

используйте **hash map для хранения prefix sums**.

---

## Задача 2

**49. Group Anagrams**

[https://leetcode.com/problems/group-anagrams/](https://leetcode.com/problems/group-anagrams/)

Сгруппировать слова, которые являются анаграммами.

Подсказка:

использовать **hash map**, где ключ — отсортированная строка.

---

## Задача 3

**347. Top K Frequent Elements**

[https://leetcode.com/problems/top-k-frequent-elements/](https://leetcode.com/problems/top-k-frequent-elements/)

Найти `k` самых часто встречающихся элементов массива.

Подсказка:

используйте **hash map для подсчёта частоты**.

---

## Задача 4

**451. Sort Characters By Frequency**

[https://leetcode.com/problems/sort-characters-by-frequency/](https://leetcode.com/problems/sort-characters-by-frequency/)

Отсортировать символы строки по убыванию частоты.

Подсказка:

использовать **hash map для подсчёта символов**.

---

## Задача 5

**525. Contiguous Array**

[https://leetcode.com/problems/contiguous-array/](https://leetcode.com/problems/contiguous-array/)

Найти максимальную длину подмассива, содержащего одинаковое количество `0` и `1`.

Подсказка:

используйте **hash map + prefix sum**.

---

### Задачи показывают разные применения **hash map**:

```
560 → prefix sums + hash map
49  → grouping
347 → frequency counting
451 → frequency + sorting
525 → prefix sums + hash map
```
