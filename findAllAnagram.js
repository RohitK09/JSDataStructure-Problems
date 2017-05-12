/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let mapOfChar = new Map();
    let len = p.length;
    for(let i =0; i<len; i++ ){
        if(!mapOfChar.has(p[i])){
            mapOfChar.set(p[i],1);
        }
        else{
            mapOfChar.set(p[i],mapOfChar.get(p[i])+1);
        }
    }
    let count = mapOfChar.size;
    let left = 0;
    let right = 0;
    let end = s.length;
    let result =[];
    while(right<end){
      if(mapOfChar.has(s[right])){
          mapOfChar.set(s[right],mapOfChar.get(s[right])-1);
          if(mapOfChar.get(s[right])===0){
              count = count -1;
          }
      }
      right = right+1;
      while(count ===0){
          let tempb = s[left];
          if(mapOfChar.has(tempb)===true){
            mapOfChar.set(tempb,mapOfChar.get(tempb)+1);
            if(mapOfChar.get(tempb)>0){
              count++;
            }
          }
        if(right-left ===p.length) {
            result.push(left);
        }
        left++;
      }
    }
    return result;
};
console.log(findAnagrams('aabaab', 'aab'));
