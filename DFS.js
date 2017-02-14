

/**
 * Depth First Search iterative implementation
 * @param: graph to traverse and the starting node
 * @return 
 */
let DfsSearch = function(graph,startNode){
        let stack =  [];
        stack.push(startNode);
        
        while(stack.length >0){
            let node = stack.pop();
             console.log('visiting node',graph[node].value);
            if(graph[node].isVisited == false){
                  
               graph[node].isVisited = true;
                for(currentNode in graph[node].edges){
                    stack.push(graph[currentNode].value); 
                }
            }
        
        }

}


module.exports = DfsSearch;