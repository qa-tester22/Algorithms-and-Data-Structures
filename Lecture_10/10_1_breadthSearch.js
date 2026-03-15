const friends = {
   you: ['alice', 'bob', 'claire'],
    alice: ['peggy'],
    bob: ['peggy', 'anuj'],
    claire: ['tom', 'john'],
    peggy: [],
    anuj: [],
    john: [],
    tom: [],
    you: ['alice', 'bob', 'claire', 'anna'],
    anuj: ['anna'],
    anna: ['tom'],
}

function bfs (graph, start, end) {
    if (start === end) return true;

    const queue = [start];
    const visited = new Set([start]);

    while (queue.length > 0) {
        const current = queue.shift();
        const neighbors = graph[current] || [];

        for (const neighbor of neighbors) {
            if (neighbor === end) return true;

            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }        
    }

    return false 
}

console.log(bfs(friends, 'you', 'tom'))
console.log(bfs(friends, 'you', 'anna'))
console.log(bfs(friends, 'anna', 'tom'))
 console.log(bfs(friends, 'alice', 'john'))


// Можно реализовать через массив
const friendsArray = [
    ['you', ['alice', 'bob', 'claire']],
    ['alice', ['peggy']],
    ['bob', ['peggy', 'anuj']],
    ['claire', ['tom', 'john']],
    ['peggy', []],
    ['anuj', []],
    ['john', []],
    ['tom', []],
];

console.log("friendsArray[0] = ", friendsArray[0]); // [ 'you', [ 'alice', 'bob', 'claire' ] ]
console.log(friendsArray.length); // 8

const peggyFromAlice = friendsArray[1][1];
console.log({peggyFromAlice}); // [peggy]

const peggyFromAliceName = friendsArray[1][1][0];
console.log({peggyFromAliceName}); // peggy

const peggyFromBob = friendsArray[2][1][0];
console.log({peggyFromBob}); // peggy

function getNeighbors(graph, person) {
    const node = graph.find(item => item[0] === person);
    return node ? node[1] : [];
}

function bfsArray(graph, start, end) {
    if (start === end) return true;

    const queue = [start];
    const visited = new Set([start]);

    while (queue.length > 0) {
        const current = queue.shift();
        const neighbors = getNeighbors(graph, current);

        for (const neighbor of neighbors) {
            if (neighbor === end) return true;

            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return false;
}

console.log("from array: ", bfsArray(friendsArray, 'you', 'tom'));