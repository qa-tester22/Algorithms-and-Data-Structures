// 1680 * 640 Найти наибольший общий делитель участка ~ gcd
// Алгоритм Евклида - наибольший общий делитель gcd

let rectangleA = 456;    // 9;  // 1680;
let rectangleB = 6;
let rectangleC = 73;      // 7;  // 73; // gcd простого числа
// 1680 - 73 = 

function nod(rectangleA, rectangleB) {
    while (rectangleA != rectangleB) {
        if (rectangleA > rectangleB) {
            rectangleA -= rectangleB
            console.log("rectangleA = " + rectangleA);
        } else {
            rectangleB -= rectangleA
console.log("rectangleB = " + rectangleB);

        }
    }
    return rectangleA;
}

const NOD = nod(rectangleA, rectangleB);
console.log(`nod ${rectangleA} and ${rectangleB} is ${NOD}`);

const NOD1 = nod(rectangleA, rectangleC);
console.log(`nod ${rectangleA} and ${rectangleC} is ${NOD1}`)