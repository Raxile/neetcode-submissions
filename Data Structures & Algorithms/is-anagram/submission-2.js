class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const obj = {}
        for(let i =0;(i<s.length||i<t.length);i++){
        obj[s[i]] =(obj[s[i]]||0) +1; 
        obj[t[i]] =(obj[t[i]]||0) -1; 
        }
       const val =  Object.entries(obj).find(([_,elem])=>elem !==0)
       if(val) return false
return true
    }
}
