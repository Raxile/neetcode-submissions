class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const obj ={}

        if(s.length!==t.length) return false;

        for(let i =0;i<s.length;i++){
            obj[s[i]] = obj[s[i]]? obj[s[i]]+1:1
            obj[t[i]] = obj[t[i]]? obj[t[i]] - 1 : -1;

        }

        return !Object.entries(obj).filter(([key,val])=>val!==0).length
    }
}
