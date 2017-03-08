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

