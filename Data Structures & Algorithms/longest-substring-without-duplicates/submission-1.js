class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
          let str = ""
  let maxLength =0
  
  for(let i =0;i<s.length ;i++){
      if(!str.includes(s[i])){
          str+=s[i];
      }
      else {
          str = str.slice(str.indexOf(s[i])+1) +s[i]
      }
      maxLength = Math.max(maxLength,str.length)
  }
  return maxLength
    }
}
