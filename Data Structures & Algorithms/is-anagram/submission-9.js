class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false
        const s_dup = s.split("").sort().join("")
        const t_dup = t.split("").sort().join("")
        let isValid = true

         for(let i =0; i<s_dup.length;i++){
           if( s_dup[i]!==t_dup[i]) isValid = false
         }

        return isValid
    }
}