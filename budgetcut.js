

function findCap(arr,budget){
   let sum = 0 ;
   let c = 0;
   //edge case
   while(sum<=budget){
     c=c +1;
      sum = addArray(c,arr);

   }

   return c-1 ;
}

function addArray (c,arr){
  let sum =0;
   for(let i =0;i<arr.length;i++){
         if(arr[i]>c){
           // arr[i] = c;
            sum= sum + c;//arr[i]
         }
      else{
          sum=sum +arr[i];
      }
    }
      return sum;
      }
console.log(findCap([3,7,4],2));
