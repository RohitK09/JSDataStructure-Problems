

/**
 * Implementaion to find if a number can be expressed as x^y
 * x is assumed to be >=0
 */

var canBeExpressedAsXraisedToY = function (n) {
    for (var i = 0; i <= Math.sqrt(n); i++) {
        var prod = i * i;
        if (prod === n ) {
            return true ;
            break;
        }
    }
    return false ;
}

var hammingDistance = function(x, y) {


    let result = x^y;
    let resultStr =  result.toString(2);
    let count =0;
    for(var i = 0; i<resultStr.length;i++){
        if(resultStr.charAt(i) === '1'){
            count++;
        }
        else {}

    }
     return count;
};

console.log(canBeExpressedAsXraisedToY(4));
console.log(canBeExpressedAsXraisedToY(67));
console.log(canBeExpressedAsXraisedToY(64));
console.log(canBeExpressedAsXraisedToY(81));
console.log(hammingDistance(97,63));

