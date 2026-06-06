class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let maxL = 0;
        for(let left = 0;left<s?.length;left++){
          const obj ={};
        let maxF = 0;
        for(let right=left;right<s?.length;right++){
            obj[s[right]] = (obj[s[right]]||0) +1
            maxF = Math.max(maxF,obj[s[right]])
            let changes = (right - left +1 )-maxF;
            if(changes<=k){
maxL = Math.max(maxL,right-left+1)
            }
            else break;
        }
          
        }
        return maxL;
    }
}
