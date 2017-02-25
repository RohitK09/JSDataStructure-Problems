

function mergeSort(arr) {
  let n = arr.length;
  let middle = parseInt(n / 2);
//console.log(middle);
  if (n < 2) {
    return arr;
  }
  else {
    let left = arr.slice(0, middle);
    let right  = arr.slice(middle, n);
    console.log("middle : ", middle);
console.log("left : ", left);
console.log("right : ", right);
    return _merge(mergeSort(left), (mergeSort(right)));
  }

}

function _merge(a, b) {
  //third array to save merged array
  let c = [];
  while (a.length !== 0 && b.length !== 0) {
    if (a[0] > b[0]) {
      c.push(b.shift());

    }
    else {
      c.push(a.shift());
    }
  }
  //if a and b are of unequal length
  while (a.length !== 0) {
    c.push(a.shift());
  }
  while (b.length != 0) {
    c.push(b.shift());
  }
  console.log(JSON.stringify(c));
  return c;
}
module.exports = mergeSort;

let arr = [7, 0, 1, 3, 2, 10, 9];
console.log(mergeSort(arr));
