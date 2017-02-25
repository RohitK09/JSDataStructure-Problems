
class StringProblem {
  constructor(_stringToTest) {
    this._stringToTest = _stringToTest;
  }
  stringHasUniqueCharsWithAdditonalDataStrutures(str) {
    let setOfChars = new Set();
    for (let i = 0; i < str.length; i++) {
      if (setOfChars.has(str[i]) === false) {
        setOfChars.add(str[i]);
      }
      else {
        return false;
      }
    }
    return true;

  }

  longestPalindromicSubstringDP(stringToTest) {

    let n = stringToTest.length;
    if (stringToTest.length == 0) {
      return null;
    }
    else if (stringToTest.length == 1) {
      return stringToTest;
    }

    let palindromeTable = new Array(1000);
    for (let i = 0; i < n; i++) {
      palindromeTable[i] = [];
    }
    let maxLen = 1;
    let longestBegin = 0;
    //single alphabhets are palindrome
    for (let i = 0; i < n; i++) {
      palindromeTable[i][i] = true;
    }
    //size of 2 alphabet
    for (let i = 0; i < n - 1; i++) {
      if (stringToTest[i] == stringToTest[i + 1]) {
        palindromeTable[i][i + 1] = true;

        longestBegin = i;
        maxLen = 2;
      }

    }

    //size of three alphabet
    for (let len = 3; len <= n; len++) {
      for (let i = 0; i < n - len + 1; i++) {
        let j = i + len - 1; // end of the seq 0,2
        if (stringToTest[i] == stringToTest[j] && palindromeTable[i + 1][j - 1]) {
          palindromeTable[i][j] = true;
          longestBegin = i;
          maxLen = len;
        }
      }
    }
    return stringToTest.substr(longestBegin, maxLen);
  }

  //(O(n^3 ))
  longestPalindromicSubstring() {
    //edge case
    if (this._stringToTest.length == 0) {
      return null;
    }
    else if (this._stringToTest.length == 1) {
      return this._stringToTest;
    }
    else if (this._isPalindrome(this._stringToTest) == true) {
      return this._stringToTest;
    }
    else {
      let listOfSubstring = this._findAllSubstring(this._stringToTest);
      let maxLen = 0;
      let LargestPalindrome = '';
      for (let i of listOfSubstring) {

        if (i.length > maxLen) {
          maxLen = i.length;
          LargestPalindrome = i;

        }
      }
      return LargestPalindrome;
    }
  }
  _findAllSubstring(str) {
    let unique = new Set();
    const len = str.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (this._isPalindrome(str.substr(i, j))) {
          unique.add(str.substr(i, j));
        }

      }
    }
    return unique;
  }
  _isPalindrome(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
  }
  /*** Given a string, find the length of the longest substring without repeating characters.
   * Examples:Given "abcabcbb", the answer is "abc", which the length is 3.
   * Given "bbbbb", the answer is "b", with the length of 1.
   * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
  ***/
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let list = [];
    let max = 0;

    if (s === null) return null;

    for (var i = 0 ;i < s.length;i++) {

      if (list.indexOf(s[i]) !==-1 ) {

       list = list.slice(list.indexOf(s[i]) + 1);
        list.push(s[i]);
        console.log("intermediate list : ", list);
      }
      else {
        list.push(s[i]);
            console.log("intermediate list : ", list);
      }
      if (list.length > max) {
        max = list.length;
      }

    }


    return max;
  };

}


let strProblem1 = new StringProblem(' ');


let testStr = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';


console.log(strProblem1.longestPalindromicSubstringDP(testStr));
console.log(strProblem1.stringHasUniqueCharsWithAdditonalDataStrutures('APLE'));
console.log(strProblem1.lengthOfLongestSubstring("abcabcbb"));
console.log(strProblem1.lengthOfLongestSubstring("pwwkew"));
 console.log(strProblem1.lengthOfLongestSubstring("dvdf"));
 console.log(strProblem1.lengthOfLongestSubstring("ohvhjdml"));
console.log(strProblem1.lengthOfLongestSubstring("bbbbb"));

