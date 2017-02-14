let BFS = function(graph,node){
    let queue = [];
    //enqueues the node
    queue.push(node);

    while(queue.length!=0){
        
        let currentNode = queue.shift();
        if(graph[currentNode].isVisited==false){
        graph[currentNode].isVisited = true;
        console.log('visiting node',graph[currentNode].value)
        
        for(adjNode in graph[currentNode].edges){
            queue.push(adjNode);
        }

    }
}
}

module.exports = BFS;