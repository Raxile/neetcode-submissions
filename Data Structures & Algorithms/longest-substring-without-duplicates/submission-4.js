class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let str = "";
        let left = 0;
        for(let right =0;right<s?.length;right++){
            const newStr =s.slice(left,right)
          
          if(newStr.includes(s[right])){
    left = left + newStr.indexOf(s[right]) + 1
          }

                  if(right - left + 1 > str.length) {             // ✅ fix bug 2
            str = s.slice(left, right + 1)
        }

       

        }
        return str.length;
    }
}
