const  DFSSearch= require('./DFS');
const BFS = require('./BFS');
/**
 * @description: outputs a new graph , in form of adjancency list 
 * inspired from https://medium.freecodecamp.com/a-gentle-introduction-to-data-structures-how-graphs-work-a223d9ef8837#.4voil9gg6 
 */
let makeGraphs = () => {
    let graph = {};
    
    //add vertex 
    graph.addVertex = (node) => {
        graph[node] = { edges: {} };
        graph[node].isVisited = false;
        graph[node].value = node; 
    }
    //addedges 
    graph.addEdge = (startNode, endNode) => {
        if (graph.contains(startNode) && graph.contains(endNode)) {

            graph[startNode].edges[endNode] = true;
            graph[endNode].edges[startNode] = true;
        }
    }

    //check if it contains the node
    graph.contains = (node) => {
        if (graph[node]) {
            return true;
        }
        else {
            return false;
        }
    }
    graph.removeEdge = (startNode, endNode) => {
        if (graph.contains(startNode) && graph.contains(endNode)) {
            delete graph[startNode].edges[endNode];
            delete graph[endNode].edges[startNode];
        }
    }
    graph.removeVertex = (node) => {
        if (graph.contains(node)) {
            for (connectedNodes in graph[node].edges) {
                graph.removeEdge(node,connectedNodes);
            }
        }
        delete graph[node];
    }
return graph;
}

let dfsGraph = makeGraphs();
dfsGraph.addVertex(1);
dfsGraph.addVertex(2);
dfsGraph.addVertex(3);
dfsGraph.addVertex(4);
dfsGraph.addVertex(5);
dfsGraph.addEdge(1,2);
dfsGraph.addEdge(1,3);
dfsGraph.addEdge(2,4);
dfsGraph.addEdge(2,5);
BFS(dfsGraph,2);
module.exports= makeGraphs();