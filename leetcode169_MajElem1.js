/**
 * find element that occurs > n/2
 */

function majElement(arr) {
  mapOfElem = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (majElement.has(arr[i])) {
      let val = majElement.get(arr[i]);
      val = val + 1;
      if (val > len / 2) {
        return arr[i];
      }
      majElement.set(arr[i], val);
    }
    else {
      majElement.set(arr[i], 1);
    }
  }

  return -1;
}



/*O(n) and O(1) space*/

function findMap(arr){
  let majElem = arr[0];
  count = 0;
  let len = arr.length;
  let maxOccur = len/2;
  for(let j =1;j<len; j++ ){
    if(majElem==arr[j]){
      count++;
    }
    else if(count ==0) {
      majElem = arr[i];
      count = 1;
    }
    else{
      count --;
    }
  }
  return majElem;
}

/**
 * > n/3
 */
var majorityElement = function(arr) {
    let majElem = [];
    let len = arr.length;
    let cnt1 =0 ,cnt2 = 0;
    for(let i =1; i<len; i++ ){
        if(majElem[0] == arr[i]){
            console.log(cnt1,"inside");
            cnt1 = cnt1 + 1;
        }
        else if(cnt1 === 0){
            majElem[0] = arr[i];
            cnt1 =1 ;
        }
        else if(majElem[1]=== arr[i]){
            cnt2 = cnt2 + 1;
        }
        else if(cnt2 === 0){
            majElem[1] = arr[i];
            cnt2 = 1;
        }
        else{
            cnt2 = cnt2--;
            cnt1 = cnt1--;
        }
    }

    function checkMajority(majElemArr){
        let countOFMaj =0;
        let len = arr.length;
        let newArr = [];
        for(let i =0; i<2; i++){
              for(let j =0;j<len; j++){
            if(arr[j]===majElemArr[i]){
                countOFMaj = countOFMaj +1;
            }
            }
           if(countOFMaj >len/3){
               newArr.push(majElemArr[i]);
           }
        }
        return newArr;
    }
    return checkMajority(majElem);
};
