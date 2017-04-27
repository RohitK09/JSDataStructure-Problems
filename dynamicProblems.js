const countNoOfSteps = function(n){
  let arr = new Array(n+1);
  for(let i =0;i<n+1;i++){
    arr[i] =0;
  }
  return _countNoOfSteps(n,arr);
}

function _countNoOfSteps(n,arr){
  if(n<0){
    return 0;
  }
  if(n==0 ){
    return 1 ;
  }

  if(arr[n]==0 ){
    arr[n] = _countNoOfSteps(n-1,arr)+_countNoOfSteps(n-2,arr)+_countNoOfSteps(n-3,arr);
  }
  return arr[n];
}

var numDecodings = function(s) {
   return  _numOfDecodings(s,s.length);
};

let _numOfDecodings = function(str,n){
    let sumOfdecoding = [0];
    for(let j =0;j<n;j++){
      sumOfdecoding[j]=0;
    }
    if(n===0) return 0;
    sumOfdecoding[n] = 1;
    sumOfdecoding[n-1] = str.charAt(n-1)!=='0'?1:0


    for(let i =n-2;i>=0;i--){
        if(str.charAt(i)==='0')
        {
            continue;
        }
        else{

            if(parseInt(str.substring(i,i+2))<=26)
            {
              sumOfdecoding[i] =  sumOfdecoding[i+1]+sumOfdecoding[i+2];
            }
            else{
             sumOfdecoding[i]= sumOfdecoding[i+1];
            }
    }}
    return sumOfdecoding[0];
}

function string_recurse(active, rest) {
    if (rest.length == 0) {
        console.log(active);
    } else {
        string_recurse(active + rest.charAt(0), rest.substring(1, rest.length));
        string_recurse(active, rest.substring(1, rest.length));
    }
}
string_recurse("", "abc");
console.log(countNoOfSteps(48));
console.log(_numOfDecodings('00','00'.length));
