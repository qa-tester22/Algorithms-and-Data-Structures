# Домашнее задание к Лекции 4. Массивы, вставка/удаление, сдвиги, linked list, Сортировка выбором.
## Задачи

 ## 1 Задача. Третья задача квест Литкода уровень 2.
 - [ https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/?envType=problem-list-v2&envId=dsa-linear-shoal-array-ii] 
 LeetCode Quest (Level 2): 
 

## 2 Задача. 27. Remove Element
- [ https://leetcode.com/problems/remove-element/description/] LeetCode 
удаление из массива и Сдвиги. Ты учишься делать in-place (без нового массива), обычно через два указателя.

## 3 Задача. 912. Sort an Array
- [ https://leetcode.com/problems/sort-an-array/description/] LeetCode 

На каждом шаге ты выбираешь минимальный элемент из неотсортированной части и ставишь его в начало (swap). Повторяешь, пока всё не выстроится.

## 4 Задача. 21. Merge Two Sorted Lists
- [https://leetcode.com/problems/merge-two-sorted-lists/description/ ] LeetCode
Там не нужно ничего сдвигать, ты просто переставляешь ссылки (или собираешь новый список через указатель-хвост).
Это идеальный контраст с массивом: в массиве вставка обычно дорогая, а в linked list всё решает перенастройка next.

## 5 Задача. 203. Remove Linked List Elements
- [ https://leetcode.com/problems/remove-linked-list-elements/description/] LeetCode 
это удаление в linked list.

почему нужен dummy node (фиктивная голова),

как аккуратно удалять подряд идущие элементы,

почему в списке удаление это изменение ссылок, а не сдвиги, но всё равно O(n), потому что надо пройтись по всем.

# Мини-правило для выполнения:
В каждой задаче после решения прямо подпиши себе две оценки: 
- time O(?) и 
- space O(?), 
- и отдельно отметь “mutates input?” (портит ли входные данные). Это ровно то, что превращает “я решила” в “я понимаю структуру данных”.

