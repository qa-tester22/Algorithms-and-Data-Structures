// Двумя основными алгоритмами обхода графа являются поиск в глубину (Depth-First Search, DFS)
// и поиск в ширину (Breadth-First Search, BFS).
// создается объект, поля которого -это вершины,
// и каждое поле равняется массиву вершин, в которые есть путь

const graph = {
    you: ['alice', 'bob', 'claire'],
    bob: ['anuj', 'peggy'],
    alice: ['peggy'],
    claire: ['tom', 'john'],
    anuj: [],
    peggy: [],
    tom: [],
    john: []
}
// push shift
const isSeller = name => name.includes('m');

// поиск в ширину BFS (breadthFirstSearch)
function searchSeller (graph, start, predicate) {
    // инициализируем очередь
    const queue = [...(graph[start] || [])];
    // добавляем начальную вершину в очередь
    
    // помечаем start как посещенную вершину 
    // во избежание повторного добавления в очередь
    const visited = new Set([start]);

    while (queue.length > 0) {
// удаляем первый элемент из очереди
    const person = queue.shift();
    //если сосед посещался
    //добавляем его в посещённые
    if (visited.has(person)) continue;
    visited.add(person);

// если сосед является пунктом назначения, цель достигнута 
        if (predicate(person)) return person;

        queue.push(...(graph[person] || []));    
    }
//если seller не найден, его достичь невозможно
return null;
}

console.log(searchSeller(graph, 'you', isSeller));


// variant из точки А в точку В можем дойти или нет
function hasPath(graph, start, end) {
    if (start === end) return true;
    // очередь - FIFO First In First Out
    const queue = [];
    // наполняем очередь - сразу добавляем стартовую вершину
    queue.push(start);

    const visited = new Set([start]);

    // создаем цикл - будем крутиться пока в очереди есть хоть 1 элемент
    while (queue.length > 0) {
        // из начала очереди достаем первый элемент
        const current = queue.shift();
        // если по текущей вершине в графе ничего не находится,
        // из этой вершины никуда пути нет = [пустой массив по этой вершине]
        for (const neighbor of graph[current] || []) {
    // если в графе по текущей вершине массив содержит конечную точку - 
        // мы завершаем обход графа и возвращаем true
        if (neighbor === end) return true;
// если условие не отработало, то добавляем в очередь новые вершины
        if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
        }
    }
            // по текущей вершине 
            // цикл будет крутиться пока очередь не пустая
      
    }
    // когда дойдем до финальной точки - цикл остановится
    return false;
}

console.log(hasPath(graph, 'you', 'tom'))
console.log(hasPath(graph, 'you', 'john'))
console.log(hasPath(graph, 'you', 'ann'))
// поиск в ширину решает задачу поиска пути в графе
// существует ли такой путь или нет
// и он находит путь за минимальное количество шагов