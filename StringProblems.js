
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

    for (var i = 0; i < s.length; i++) {

      if (list.indexOf(s[i]) !== -1) {

        list = list.slice(list.indexOf(s[i]) + 1); //getting the index of first occurence of repeating character
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
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let carry = 0;
  let sum = '';
  lenA = a.length;
  lenB = b.length;
  if (lenA > lenB) {
    for (let i = lenB; i < lenA; i++) {
      b = '0'.concat(b);
    }
  } else if (lenB > lenA) {
    for (let i = lenA; i < lenB; i++) {
      a = '0'.concat(a);
    }
  }
  console.log("a,b", a.length, b.length);
  for (var i = lenA - 1; i > -1; i--) {
    console.log('sum', sum);
    sum = (a[i] ^ b[i] ^ carry).toString().concat(sum);
    console.log('sum', sum);
    carry = (parseInt(a[i]) & parseInt(b[i])) | (parseInt(b[i]) & carry) | (carry & parseInt(a[i]));
    console.log('carry inside', carry);

    lenA--;
  }
  console.log('carry', carry)
  if (carry == 1) {
    sum = '1' + sum;
  }
  return sum.toString();
};

var strStr = function (haystack, needle) {


  let start = 0;
  let lenH = haystack.length;
  let lenN = needle.length;
  if (lenN > lenH) {
    return -1;
  }
  let j = 0;
  while (start < lenN) {
    for (let i = start; i < lenH; i++) {
      if (j < lenN) {
        j = j++;
      }
      if (j == lenN) {
        return start;
      }
    }
  }
  return start;
};
/**
 * reverse words without using extr space.Reverse all words first and then reverse them again word by word.
*/
var reverseWords = function (str) {
  if (str.length !== 0) {
    let j = str.length - 1;
    let i = 0;
    let end = 1;
    _reverse(i, j);
    console.log('str', str);
    while (end <= j) {
      if (str[end] == ' ') {
        _reverse(i, end - 1);
        i = end + 1;
      }
      if (end == j) {
        _reverse(i, end);
      }

      end++;
    }

  }
  function _reverse(beg, end) {
    while (beg < end) {
      let temp = str[beg];
      str[beg] = str[end];
      str[end] = temp;
      beg++;
      end--;
    }
  }

};

function giveSquares(n) {
   let list = [];
    while (Math.floor(Math.sqrt(n)) > 0)
    { console.log(n);
      list.push(Math.pow(Math.floor(Math.sqrt(n)),2));
       n = n - (Math.floor(Math.sqrt(n)) * Math.floor(Math.sqrt(n)))
      }
  return list;
  };

let strProblem1 = new StringProblem(' ');


let testStr = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';


console.log(strProblem1.longestPalindromicSubstringDP(testStr));
console.log(strProblem1.stringHasUniqueCharsWithAdditonalDataStrutures('APLE'));
console.log(strProblem1.lengthOfLongestSubstring("abcabcbb"));
console.log(strProblem1.lengthOfLongestSubstring("pwwkew"));
console.log(strProblem1.lengthOfLongestSubstring("dvdf"));
console.log(strProblem1.lengthOfLongestSubstring("ohvhjdml"));
console.log(strProblem1.lengthOfLongestSubstring("bbbbb"));
console.log(addBinary("011", "1"));
//console.log(strStr("hycghcy","cy"));
let strReverse = ''.split('');
reverseWords(strReverse);
console.log('strReverse', strReverse);
giveSquares(19);
