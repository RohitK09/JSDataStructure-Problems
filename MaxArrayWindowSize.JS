/***
Given an array and an integer k, find the maximum for each and every contiguous subarray of size k.

Examples:

Input :
arr[] = {1, 2, 3, 1, 4, 5, 2, 3, 6}
k = 3
Output :
3 3 4 5 5 5 6

Input :
arr[] = {8, 5, 10, 7, 9, 4, 15, 12, 90, 13}
k = 4
Output :
10 10 10 15 15 90 90
***/

function numInArray(_position, _valuen) {
    this.position = _position;
    this.value = _value;
}
function findMaxArrayOfWindowSize(listOfnumbers, windowSize) {

    var q = [];
    var maxArray = [];
    if (listOfnumbers === null || undefined) {
        return null;
    }

    if(windowSize>listOfnumbers.length){
        return listOfnumbers;
    }
    //queuing the initial windowsize
    for (var i = 0; i < windowSize; i++) {
        while (q.length !== 0 && listOfnumbers[i] >= listOfnumbers[q[q.length - 1]]) {
            q.pop(); //js array pops from back of the array.
        }
        q.push(i);
    }
    for (var j = windowSize; j < listOfnumbers.length; j++) { //pop elements out when the curr element is greater than previous
        maxArray.push(listOfnumbers[q[0]]);
        while (q.length != 0 && listOfnumbers[j] > listOfnumbers[q[q.length - 1]]) {
            q.pop(); //remove from end of the array

        }
        while (q.length !== 0 && j - q[0] === windowSize) { // pop element out from beginning when , window size is exceeded.
            q.shift();
        }
        q.push(j);
        console.log('value of Q:', JSON.stringify(q));
    }
    console.log('before last push maxArray:', JSON.stringify(maxArray));
    if(q.length!==0){
        maxArray.push(listOfnumbers[q[0]])
    }
    return maxArray;
}

var arrToTest = [2, 3, 4, 2, 6, 2, 5, 1];

console.log(findMaxArrayOfWindowSize(arrToTest, 3));
console.log(findMaxArrayOfWindowSize([1,2,3,4,5,6,0], 2));
console.log(findMaxArrayOfWindowSize([9,11], 2));
console.log(findMaxArrayOfWindowSize([9,11,10], 3));
