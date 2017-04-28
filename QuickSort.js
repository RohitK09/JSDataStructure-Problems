

module.exports = quickSort;

function quickSort(arr, start, end) {
  let leftIdx = partitition(arr, start, end);
  if (start < leftIdx - 1) {
    quickSort(arr, start, leftIdx - 1);
  }
  if (leftIdx < end) {
    quickSort(arr, leftIdx, end);
  }
return arr;
}
function partitition(arr, left, right) {
  let start = left;
  let end = right;
  let pivot = parseInt((start + end) / 2);
  while (start < end) {
    while (arr[start] < arr[pivot] && arr[end] > arr[pivot]) {
      start++;
      end--;
    }
    while (arr[start] < arr[pivot]) {
      start++;
    }
    while (arr[end] > arr[pivot]) {
      end--;
    }
while (start <= end) {
    swap(start, end);
    start++;
    end--;
  }
  }

  function swap(i, j) {

    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;

  }
  return start;
}

console.log(quickSort([3,0,2,-1],0,3));
