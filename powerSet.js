/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let list = [];
    backTrack(list,[] ,0,nums);
    let resArray = [];
    console.log(list);

    return list;
}

function backTrack (list,tempList,start,nums){
    list.push( JSON.parse(JSON.stringify(nums)));
    for(let i =start;i<nums.length;i++){
        tempList.push(nums[i]);
         backTrack(list,tempList,i+1,nums);
        tempList.pop();
    }
}

var subsetsWithDup  = function(nums) {
    let list = [];
    nums = nums.sort();
    backTrack(list,[] ,0,nums);
    return list;
}

function backTrack (list,tempList,start,nums){
    list.push( JSON.parse(JSON.stringify(tempList))); //native JSON implementation
    for(let i =start;i<nums.length;i++){
        if(nums[i]==nums[i-1]&&i>start){continue;}
        tempList.push(nums[i]);
         backTrack(list,tempList,i+1,nums);
        tempList.pop();
    }
}

console.log(subsets([1,2,3]));
console.log(subsetsWithDup([1,2,2]));

