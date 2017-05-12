
/*input:  data = [ [1487799425, 14, 1],
                 [1487799425, 4,  0],
                 [1487799425, 2,  0],
                 [1487800378, 10, 1],
                 [1487801478, 18, 0],
                 [1487801478, 18, 1],
                 [1487901013, 1,  0],
                 [1487901211, 7,  1],
                 [1487901211, 7,  0] ]

output: 1487800378 # since the increase in the number of people
                   # in the mall is the highest at that point*/

let findBusiestTime = function(arr){
  let busiestTime =0;
  let maxCount = 0;
  for(let i =1;i<arr.length;i++){
    if(arr[i][0]===arr[i-1][0]){
      if(arr[i][2] === 1){
        let count =+ arr[i][1];
      }else{
        count =-arr[i][1];
      }
  }
  else{
   if(count>maxCount){
      busiestTime = arr[i-1][0];
      maxCount = count;
    }
    count = (arr[i][2]===1?+1:-1)*(arr[i][1]);

  }


}
 return busiestTime;
}

 let data = [ [1487799425, 14, 1],
                 [1487799425, 4,  0],
                 [1487799425, 2,  0],
                 [1487800378, 10, 1],
                 [1487801478, 18, 0],
                 [1487801478, 18, 1],
                 [1487901013, 1,  0],
                 [1487901211, 7,  1],
                 [1487901211, 7,  0] ];
console.log(findBusiestTime(data));
