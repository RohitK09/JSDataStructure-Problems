function _IterativebinarySearch(arr, elem) {
  let start = 0;
  let end = arr.length-1;

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

console.log(_binarySearch([1, 2, 3, 4, 5], 7));
