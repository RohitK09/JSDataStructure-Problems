var wordBreak = function (s, wordDict) {
  let i = 0; j = 0;
  let setOfDict = new Set(wordDict);
  let memo = [];
  memo[0] = true;
  let lenFound = 0;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if ((memo[j]) && setOfDict.has(s.substring(j, i))) {
        memo[i] = true;
        break;
      }
    }

  }
  return memo[s.length] === undefined ? false : true;

};

var wordBreak2 = function (s, wordDict) {
  let i = 0; j = 0;
  let setOfDict = new Set(wordDict);
  let memo = [];
  let res = [];
  memo[0] = true;
  let start = 0;
  let end = 0;
  getAllSolutions(s, setOfDict, start, end, res, memo);
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if ((memo[j]) && setOfDict.has(s.substring(j, i))) {
        memo[i] = true;
        break;
      }
    }

  }
  return memo[s.length] === undefined ? false : true;

};

function getAllSolutions(s, setOfDict, start, end, res) {


  for (let i = start; i < end; i++) {
    if (setOfDict.has(s.substring(i, i)) && memo[i] == true) {
          getAllSolutions(s.substring(i+1,j));
      }
    }

  }
}




console.log(wordBreak("leetcode", ["leet", "coe"]));
console.log(wordBreak("a", ["a"]));
//"aaaaaaa"

