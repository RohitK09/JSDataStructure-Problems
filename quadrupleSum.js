let quadrupleSum = (arr,sum)=> {
  arr = arr.sort(function(a,b){
    return a-b;
  });
  let n = arr.length;
  for(let i = 0; i< n-4; i++){
    for(let j =i+1;j<n-3;j++){
//// jianmin chen   julia coding blog
     // let r = sum -(arr[i]+arr[j]);
      let low = j+1 ;
      let high = n -1;
      while(low<high){
        if(arr[low]+arr[high] +(arr[i]+arr[j])===sum){

          console.log(i,j,low,high);
          break;
        }
        else if(arr[low]+arr[high] +(arr[i]+arr[j]>sum)){
          high--;
        }
        if(arr[low]+arr[high] +(arr[i]+arr[j]<sum)){
          low++;
        }
      }
    }
  }
}

 let arr = [2, 7, 4, 0, 9, 5, 1, 3]
 let s = 20;
quadrupleSum(arr,s);
