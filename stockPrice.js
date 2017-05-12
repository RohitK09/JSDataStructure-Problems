var maxProfit = function(prices) {
    let max = 0;
    let min = Number.POSITIVE_INFINITY;
  for(let i =0; i< prices.length;i++){
      if(prices[i]<min){
            min = prices[i];
        }else if(prices[i]-min> max)
        {
            max = prices[i]-min;
        }

    }

  return max;

};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function(arr) {
    let i =0;
    let j =1;
    let min = Number.POSITIVE_INFINITY;
    let max = 0;
    let max_so_far = 0;
    let len = arr.length ;
    let res = 0;
    let maxElem = 0;
   for(let i =0;i<len;i++){

        if (arr[i]<maxElem){
            let partMax = maxElem - min ;
            res = res + partMax;

            maxElem = 0;
            min = Number.POSITIVE_INFINITY;


        }
        if(arr[i]<min ){
            min = arr[i];

        }
        if(arr[i]>=maxElem){

            maxElem = arr[i];

            if(i === len-1){

                res = res+ (maxElem - min);
            }
        }

    }
    return res;
};
console.log(maxProfit([3,2,1]));


/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) { //Disjoined sets and union find
    let arrOfEdges = [];
    let len = edges.length;
    for(let i =0; i<n;i++){
        arrOfEdges[i] = -1;

    }
    for(let j =0; j<len;j++){
        let x = find(arrOfEdges,edges[j][0]);
        let y = find(arrOfEdges,edges[j][1]);
        if(x==y){
            return false;
        }
        arrOfEdges[x] = y;//union
    }
    return n-1 == edges.length;
};

 function find(nums,i){
        if(nums[i]==-1)return i;
        else{
            return find(nums,nums[i]);
        }
    }
console.log(validTree(5,[[0,1],[0,2],[2,3],[3,0]]));
