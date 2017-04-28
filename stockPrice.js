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
console.log(maxProfit([3,2,1]));
