/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islandCount = 0;
    var m = grid.length;
    var n = grid[0].length;
    let visited = new Array(grid.length);
    for(let i=0;i<m;i++){
         var arrayOf =[];
        for(var j=0;j<n;j++){
          arrayOf.push(false);
        }
        visited[i]= arrayOf;
    }
    for(let i=0; i<m;i++){
        for(j=0;j<n;j++){
            if(grid[i][j]==='1'&& visited[i][j]!==true){
                console.log('found it');
                DFSMarking(grid,visited,i,j);
                ++islandCount;
            }
        }
    }
return islandCount;
};
function DFSMarking(grid,visited,i,j){
    console.log(i,j);

    if(i<0||i>(grid.length-1)||j<0||j>(grid[0].length-1)||grid[i][j]!=='1'||visited[i][j]===true )
    {

        return;

    }
    visited[i][j]= true;
    console.log(visited)
    DFSMarking(grid,visited,i+1,j);
    DFSMarking(grid,visited,i-1,j);
    DFSMarking(grid,visited,i,j-1);
    DFSMarking(grid,visited,i,j+1);
}console.log(numIslands(["11110","11010","11000","00000"]));
