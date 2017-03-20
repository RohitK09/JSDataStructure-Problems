var findAnagrams = function(s, p) {
    let locs =[];//to save locations of the anagrams
    let start = 0,end =0;
    let pat = new Array(26);
if(p.length>s.length){
  return locs;
}
   for(var i =0;i<p.length;i++){

        if(pat[p[i]])
        {
            pat[p[i]]++;
        }else{
            pat[p[i]] =1;
        }

   }
   start = 0; end = p.length;
   while (end<=s.length){
       let curr = new Array(26);
       for(let j =start ; j<end; j++){
        if(curr[s[j]])
        {
            curr[s[j]]++;
        }else{
            curr[s[j]] =1;
        }
       }
       if(_isValid(curr,pat)){
           locs.push(start);
       }
       start++;
       end++;
    }

    function _isValid(curr,pat){

        if(JSON.stringify(curr)!==JSON.stringify(pat)){
          return false;

      }
      return true;
    }
return locs;
};

console.log(findAnagrams("abab","ab"));
console.log(findAnagrams("cbaebabacd","abc"));
