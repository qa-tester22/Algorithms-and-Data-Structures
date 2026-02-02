/**   
 * Условие задачи (как в книге)

Есть 5 городов и известны расстояния между каждой парой городов. Коммивояжёр хочет побывать в каждом городе ровно один раз так, чтобы общее расстояние было минимальным. Самое прямолинейное решение:
перебрать все возможные порядки объезда городов (все перестановки), посчитать длину маршрута для каждого, выбрать самый короткий.

Почему “факториал”: для n городов число порядков = n!. Для 5 это 5! = 120.

Важно: обычно рассматривается именно маршрут-путь (без обязательного возврата в старт). 
 “классический TSP-тур” (вернуться в начало) - это один флаг в коде.
*/
function travelingSalesmanFactorial(cityDistances, cityNames, returnToStart = false) {
  const n = cityDistances.length;
  const route = Array.from({ length: n }, (_, i) => i); 

console.log(`route = ${route}`);
  
let bestRoute = [];
  let bestDistance = Infinity;

  function routeDistance(r) {
    let sum = 0;
    for (let i = 0; i < r.length - 1; i++) {
      sum += cityDistances[r[i]][r[i + 1]];
    }
    if (returnToStart) sum += cityDistances[r[r.length - 1]][r[0]];
    return sum;
  }

  function permute(arr, startIndex) {
    if (startIndex === arr.length) {
      const dist = routeDistance(arr);
      if (dist < bestDistance) {
        bestDistance = dist;
        bestRoute = arr.slice();
      }
      return;
    }

    for (let i = startIndex; i < arr.length; i++) {
      [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]];
      permute(arr, startIndex + 1);
      [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]];
    }
  }

  permute(route, 0);

  const bestRouteNames = bestRoute.map((i) => cityNames[i]);
  return { bestRoute, bestRouteNames, bestDistance };
}
/**   
 * Возьмём города с картинки (условные мили, просто для тренировки логики):

Индексы:
0 = Marin
1 = San Francisco
2 = Berkeley
3 = Fremont
4 = Palo Alto

Матрица cityDistances[i][j] означает расстояние из i в j.
 */
const cityNames = ["Marin", "San Francisco", "Berkeley", "Fremont", "Palo Alto"];
const cityDistances = [
  [0, 15, 25, 45, 40],
  [15, 0, 12, 35, 33],
  [25, 12, 0, 25, 38],
  [45, 35, 25, 0, 18],
  [40, 33, 38, 18, 0]
];

/**
 * Есть флаг returnToStart: если true, добавляем возврат в стартовый город (тур), 
 * если false, считаем просто путь.
 */
const pathResult = travelingSalesmanFactorial(cityDistances, cityNames, false);
console.log("Best path:", pathResult.bestRouteNames.join(" -> "));
console.log("Best distance:", pathResult.bestDistance);

const tourResult = travelingSalesmanFactorial(cityDistances, cityNames, true);
console.log("Best tour:", tourResult.bestRouteNames.join(" -> "), "->", tourResult.bestRouteNames[0]);
console.log("Best tour distance:", tourResult.bestDistance);
