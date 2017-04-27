/**
Array Problems
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    let sum = 0;
    var mapOfsum = new Map();
    let max = 0;

    for(var i =0; i< nums.length;i++){
      sum = sum + nums[i];

        if(sum ===k){
            max= i+1; // when we find the sum , from start =0 to i

        }

        else if(mapOfsum.has(sum-k)){

            max = Math.max(max,(i-mapOfsum.get(sum-k)));

        }
        if(mapOfsum.has(sum)===false){
            mapOfsum.set(sum,i);
        }
    }
   return max;
};

let removeDups = function(arr){
  if(arr.length>1){
    let prev = arr[0];
    let len = arr.length;
    let lastFoundIdx = 0;
  for(let i =1;i<len;i++)
  {
    if(arr[i] ===arr[i-1]){
      arr[i] = arr[++i];
      arr[]
    }
  }
}
return arr;
}
console.log(removeDups([1,2,2,3]));
