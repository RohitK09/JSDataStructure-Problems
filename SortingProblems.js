



// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// Note: You may assume that nums1 has enough space
// (size that is greater or equal to m + n) to
// hold additional elements from nums2. The number of elements initialized
// in nums1 and nums2 are m and n respectively.

var merge = function merge (num1,m,num2,n){
    let indexA = m -1;
    let indexB = n-1;
    let indexMerged = m+ n -1  ;
    while (indexB >= 0){
        if(num1[indexA]>=num2[indexB]&&indexA>=0){
            num1[indexMerged] = num1[indexA];
            indexA--;
        }
        else{
            num1[indexMerged] = num2[indexB];
            indexB --;
        }
        indexMerged --;
    }

}
arrA = [2,4,5,8,10];
arrB =[3,6,7,13]
console.log(merge(arrA,5,arrB,4));
