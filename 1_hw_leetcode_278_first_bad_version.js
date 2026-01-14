/**
 * 278. First Bad Version

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
Example 2:

Input: n = 1, bad = 1
Output: 1
 

Constraints:

1 <= bad <= n <= 2^31 - 1
 */

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1;
        let end = n;
        let middle; 
        while(start <= end) {
            middle = Math.floor(start + (end - start) / 2);
            if(isBadVersion(middle)) {
                end = middle - 1
            } else {
                start = middle + 1
            }
        }
        return start
    };
};

// Example 1:
let n1 = 5;
let bad1 = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.

// Example 2:
let n2 = 1;
let bad2 = 1;
// Output: 1


function run(n, bad) {
  const isBadVersion = (version) => version >= bad;
  const firstBadVersion = solution(isBadVersion);
  console.log(firstBadVersion(n));
}

run(n1, bad1); // 4
run(n2, bad2); // 1


/**
278. Первая неудачная версия

Вы — менеджер по продукту и в настоящее время возглавляете команду, разрабатывающую новый продукт. К сожалению, последняя версия вашего продукта не проходит проверку качества. Поскольку каждая последующая версия разрабатывается на основе предыдущей, все последующие версии также окажутся неудачными.

Предположим, у вас есть nнесколько версий [1, 2, ..., n], и вы хотите найти первую неисправную версию, из-за которой все последующие становятся неисправными.

Вам предоставлен API bool isBadVersion(version), который возвращает значение, указывающее, versionявляется ли версия некорректной. Реализуйте функцию для поиска первой некорректной версии. Вам следует минимизировать количество вызовов API.

Пример 1:

Входные данные: n = 5, bad = 4
 Выходные данные: 4
 Пояснение:
вызов isBadVersion(3) -> false
вызов isBadVersion(5) -> true
вызов isBadVersion(4) -> true
Тогда 4 — это первая неудачная версия.
Пример 2:

Входные данные: n = 1, bad = 1
 Выходные данные: 1
 
Ограничения:

1 <= bad <= n <= 2^31 - 1
*/
//*********************************************** */
// Приходит функция , которая определяет, что проверяемая версия продукта не работающая = true/
// номера версии от 1 до n
// поэтому мы можем начать проверку версий с 1, вводим переменную start=1;
// и конечной точкой будет n, вводим переменную end=n;
// находим середину между 1 и n =middle; отбрасываем дробную часть
//          middle = Math.floor(start + (end - start) / 2);
// функция isBadVersion(middle) вернет нам true, если версия под номером middle будет не работающая (bad)
// тогда мы отбрасываем все версии, больше middle, то есть сокращаем end до middle-1
// саму middle мы также отбрасываем, поскольку мы ее уже проверили, и она не работает.
// в цикле while проводим опять проверку, если middle работающая, то функция isBadVersion(middle) вернет нам false, если версия под номером middle будет  работающая (not bad)
// тогда мы отбрасываем все версии, меньше middle, то есть сокращаем start до middle+1
// саму middle мы также отбрасываем, поскольку мы ее уже проверили, и она  работает. А нам нужно убедиться, что это последняя версия, которая работает
// возвращаем start, поскольку надо найти первую неработающую версию продукта. и это случиться когда start = end
//******************************************************************* */
//****************************************************** * /
// A function arrives that determines that the version of the product being checked is not working = true/
// version numbers from 1 to n
// so we can start checking versions from 1, enter the variable start=1;
// and the end point will be n, enter the variable end=n;
// find the middle between 1 and n =middle; discard the fractional part
// middle = Math.floor(start + (end - start) / 2);
// the isBadVersion(middle) function will return true to us if the version numbered middle is not working (bad)
// then we discard all versions greater than middle, that is, we reduce end to middle-1
// we also discard the middle itself, since we have already checked it and it does not work.
// in the while loop we check again, if middle is working, then the isBadVersion(middle) function will return false to us, if the version numbered middle is working (not bad)
// then we discard all versions less than middle, that is, we reduce start to middle+1
// we also discard the middle itself, since we have already checked it and it works. And we need to make sure that this is the latest version that works
// return start because we need to find the first broken version of the product. and this will happen when start = end

