function _IterativebinarySearch(arr, elem,start,end) {
  // let start = 0;
  // let end = arr.length-1;

  while (start <= end) {
    let mid =Math.floor( (end+start) / 2);
    if (arr[mid] === elem) {
      console.log("elem found");
      return mid;
    }
    else if (arr[mid] > elem) {
      end = mid - 1;
    }
    else {
      start = mid + 1;
    }
  }
  return -1;
}

console.log(_IterativebinarySearch([1,2,3,4,5], 3,0,4));
//0(Log(n) but in one pass)
let _searchRotatedArray = function(arr,start,end,num){

  while(start<=end ){
  let mid =Math.floor((start+end)/2);
  if(arr[mid]==num){
    return mid;
  }
   if(arr[start]<= arr[mid]){
     if( num < arr[mid] && num >=arr[start]){
        end = mid -1;
      }else {
      start = mid+1;
    }
  }

  else {

    if( num >arr[mid]&& num<=arr[end] ){
          start = mid+1;
      }else{
         end = mid-1;
      }

     }
  }
  return -1;
}
///Not complete
let _searchRotatedArraywithDups = function(arr,start,end,num){

  while(start<=end ){
  let mid =Math.floor((start+end)/2);
  if(arr[mid]==num){
    return mid;
  }
   if(arr[mid]> arr[end]){ //left half sorted
     if( arr[mid] >num && arr[start]<=num){
        end = mid -1;
      }else {
      start = mid+1;
    }
  }
   else if(arr[mid]<arr[end]) { //right sorted
    if( num >arr[mid]&& num<=arr[end] ){
          start = mid+1;
      }else{
         end = mid -1;
      }
     }
  else{
 end--;
  }
}
  return -1;
}

let rotArr =[1,2,3,4,5,6];
console.log(_searchRotatedArray(rotArr,0,rotArr.length-1,2));
let rotArrDups =[2, 2, 2, 2, 2, 2, 2, 2, 0, 2];
console.log(_searchRotatedArraywithDups(rotArrDups,0,rotArrDups.length-1,0));

