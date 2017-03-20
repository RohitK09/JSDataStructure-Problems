
var multiply = function (a, b) {
  var rowAlength = a.length;
  var colBLength = b[0].length;
  var rowBlength = b.length;
  var prod = [];

  for (var i = 0; i < a.length; i++) {
    prod[i] = [];

    for (var j = 0; j < b[0].length; j++) {
      var sum = 0;
      for (var k = 0; k < a[0].length; k++) {
        
          sum = sum + a[i][k] * b[k][j];

      }

      prod[i][j] = sum;
    }
  }
  return prod;
}


var m1 = [[ 1, 0, 0],[-1, 0, 3]];
var m2 = [[ 7, 0, 0 ],[ 0, 0, 0 ],[ 0, 0, 1 ]];

var mResult = multiply(m1, m2)

/*In Google Chrome and Firefox you can do:*/

console.log(mResult) /* it shows the matrix in a table */
