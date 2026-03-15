function bfs(graph, start, end) {
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

    return false;
}