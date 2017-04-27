function getMaxSubArray(arr){
  let max_so_far = arr[0];
  let start = 0 ;
  let end = 0;
  let max = Number.NEGATIVE_INFINITY;
  let len = arr.length;
  for(let i =1; i< len;i++ ){
    max_so_far = Math.max(arr[i],max_so_far+arr[i]);
    if(max<max_so_far){
      max = max_so_far;
      end = i;
    }else{
      tempstart
    }
    //max = Math.max(max,max_so_far); //O(n) algo
  }
  console.log(start, end);
  return max;
}
console.log(getMaxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
