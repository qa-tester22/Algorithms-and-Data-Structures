function travelingSalesman(cityDistances) {
    const n = cityDistances.length; // Количество городов
    const cities = [0, 1, 2]; // Индексы трех городов

    let optimalRoute = []; // порядок посещения городов для меньшей дистанции
    let optimalDistance = Infinity;  // наименьшая возможная дистанция при посещении городов

    // Перебираем все перестановки порядка городов
    for (const city1 of cities) {
        for (const city2 of cities) {
            if (city2 === city1) continue; // Города не должны совпадать
            for (const city3 of cities) {
                if (city3 === city1 || city3 === city2) continue; // Города не должны совпадать
                const currentDistance = cityDistances[city1][city2] + cityDistances[city2][city3] + cityDistances[city3][city1];
 
                if (currentDistance < optimalDistance) {
                    optimalDistance = currentDistance;
                    optimalRoute = [city1, city2, city3];
                }
            }
        }
    }

    return { optimalRoute, optimalDistance };
}
/**
 * Возможное передвижение по городам с возвратом в начальный город:
1-2-3  |  10+20+15=45
1-3-2  |  15+20+10=45
2-1-3
2-3-1
3-1-2
3-2-1

1-2=10
1-3=15
2-1=10
2-3=20
3-1=15
3-2=20
*/
// Расстояния между городами 
// Это матрица 3 x 3, где строка = “откуда”, столбец = “куда”.
const cityDistances = [
    [0, 10, 15],    
    [10, 0, 20],    
    [15, 20, 0]
];

/**
 * Читается так (индексы, а не города. индекс 0 - город 1...):

cityDistances[0][0] = 0 расстояние из города 0 в город 0 (ноль).
cityDistances[0][1] = 10 расстояние из 0 в 1 равно 10.
cityDistances[0][2] = 15 расстояние из 0 в 2 равно 15.
cityDistances[1][0] = 10 из 1 в 0 равно 10.
cityDistances[1][1] = 0
cityDistances[1][2] = 20 из 1 в 2 равно 20.
cityDistances[2][0] = 15 из 2 в 0 равно 15.
cityDistances[2][1] = 20 из 2 в 1 равно 20.
cityDistances[2][2] = 0
 */

// Вызываем функцию travelingSalesman
const result = travelingSalesman(cityDistances);

// Выводим результат
console.log("Optimal Route:", result.optimalRoute);  // Optimal Route: [ 0, 1, 2 ]
console.log("Optimal Distance:", result.optimalDistance, "км");   // Optimal Distance: 45 км