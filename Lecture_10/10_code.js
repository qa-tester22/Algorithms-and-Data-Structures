const graph = {
    you: ['alice', 'bob', 'claire'],
    bob: ['anuj', 'peggy'],
    alice: ['peggy'],
    claire: ['tom', 'john'],
    anuj: [],
    peggy: [],
    tom: [],
    john: [],
}

const personIsSeller = name => name.includes('m')

function searchSeller(graph, start, predicate) {
    const queue = [...(graph[start] || [])]
    const visited = new Set([start])

    while (queue.length > 0) {
        const person = queue.shift()

        if (visited.has(person)) continue
        visited.add(person)

        if (predicate(person)) {
            return person
        }

        queue.push(...(graph[person] || []))
    }

    return null
}

function hasPath(graph, start, end) {
    if (start === end) return true

    const queue = [start]
    const visited = new Set([start])

    while (queue.length > 0) {
        const current = queue.shift()

        for (const neighbor of graph[current] || []) {
            if (neighbor === end) return true

            if (!visited.has(neighbor)) {
                visited.add(neighbor)
                queue.push(neighbor)
            }
        }
    }

    return false
}

const graphArray = [
    ['you', ['alice', 'bob', 'claire']],
    ['alice', ['peggy']],
    ['bob', ['peggy', 'anuj']],
    ['claire', ['tom', 'john']],
    ['peggy', []],
    ['anuj', []],
    ['john', []],
    ['tom', []],
]

function getNeighbors(graph, nodeName) {
    const node = graph.find(item => item[0] === nodeName)
    return node ? node[1] : []
}

function hasPathArray(graph, start, end) {
    if (start === end) return true

    const queue = [start]
    const visited = new Set([start])

    while (queue.length > 0) {
        const current = queue.shift()
        const neighbors = getNeighbors(graph, current)

        for (const neighbor of neighbors) {
            if (neighbor === end) return true

            if (!visited.has(neighbor)) {
                visited.add(neighbor)
                queue.push(neighbor)
            }
        }
    }

    return false
}

console.log(searchSeller(graph, 'you', personIsSeller))
console.log(hasPath(graph, 'you', 'tom'))
console.log(hasPath(graph, 'you', 'john'))
console.log(hasPath(graph, 'you', 'ann'))
console.log(graphArray[1][1][0])
console.log(hasPathArray(graphArray, 'you', 'tom'))
