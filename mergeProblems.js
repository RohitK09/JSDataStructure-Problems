/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let lenofnum1 = nums1.length;
    let lenofnum2 = nums2.length;
    let mergedLen = lenofnum1+lenofnum2;
    let mergedArray = [];
    let indexofmerged = (mergedLen/2);


    while(indexofmerged>=0&&(nums1.length!==0&&nums2.length!==0)){

    if(nums1[0]>= nums2[0] ){
        mergedArray.unshift(nums2.shift());
        indexofmerged--;
    }
    else if(nums2[0]> nums1[0]){

        mergedArray.unshift(nums1.shift());
        indexofmerged--;
    }



    }
    while(indexofmerged>=0){
     if(nums2.length!==0 &&nums1.length===0){
        mergedArray.unshift(nums2.shift());


    }
    if(nums2.length===0&&nums1.length!==0){
        mergedArray.unshift(nums1.shift());


    }
        indexofmerged--;
    }


if(mergedLen%2 ===0){
    return (mergedArray[0]+mergedArray[1])/2;

}
else {
    return mergedArray[0];
}
};

var arr1 = [1,2,3,4];
var arr2 = [5];

console.log(findMedianSortedArrays(arr1,arr2));
console.log(findMedianSortedArrays([],[1]));
console.log(findMedianSortedArrays([1,2],[1,2]));
console.log(findMedianSortedArrays([1,2,3,4],[0,200,300]));
console.log(findMedianSortedArrays([4],[1,2,3,5]));


