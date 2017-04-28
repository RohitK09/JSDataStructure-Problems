/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(arr) {
    let max1 =null;
    let max2 = null;
    let max3 = null;
    let len  = arr.length;

    for(let i =0;i<len; i++){
        if(max1===arr[i]||max2===arr[i]||max3===arr[i]){
            continue ;
        }
       else if(arr[i]>max1 || max1 === null){
           max3 = max2 ;
           max2 = max1 ;
           max1 = arr[i];
        console.log('max1',arr[i]);
       }else if(arr[i]>max2 || max2===null){
           console.log('caught',max3);
           max3 = max2;
           max2 = arr[i];
       }
       else if(arr[i]>max3 ||max3 ===null){
           console.log('caught inside');
           max3 = arr[i];
           console.log(max3);
       }
    }
   if (max3===null){
       console.log('max3 is null')
       return max1;
   }
   else{
       return max3;
   }
};
console.log(thirdMax([5,2,2]));
