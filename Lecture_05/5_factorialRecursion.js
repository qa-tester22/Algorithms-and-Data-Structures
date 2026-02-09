// Рекурсия - реализации функции для вычисления факториала числа:
// let num = 10055555555; // 5 * 4 * 3 * 2 * 1 = 5!
let num = 3;

function factorial(num) {
  // Базовый случай: факториал 0 равен 1
  if (num === 0 || num === 1) {
    return 1;
  }

  // Рекурсивный случай: факториал числа num равен num умножить на факториал (num - 1)
  return num * factorial(num - 1);
}

// Пример использования
const resultRecursion = factorial(num);
console.log(`Recursion factorial(${num}) =  ${resultRecursion}`); // Вывод: 120

/*
В этой функции:

- Базовый случай (base case) устанавливает, что факториал 0 равен 1.
- В рекурсивном случае функция умножает число `num` на факториал числа `(num - 1)`.
- Рекурсивные вызовы продолжаются, пока не достигнут базового случая.

Пример использования функции для вычисления факториала числа 5 (`factorial(5)`) выводит результат 120.
*/

// Цикл - вычисление факториала без рекурсии
// 1*1*2*3 

function factorialWithoutRecursion(num) {
  let result = 1;

  // Умножаем result на числа от 1 до num
  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

// Пример использования
const result = factorialWithoutRecursion(num);
console.log(`result without Recursion factorial(${num})= ${result}`); // Вывод: 120

/*
Эта функция использует цикл `for` для умножения чисел от 1 до `num`, что эквивалентно вычислению факториала. В данном примере, вызов `factorialWithoutRecursion(5)` также выводит результат 120.
*/
