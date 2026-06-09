class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const need ={}
        for(let c of t) need[c] = (need[c]||0)+1;

        let left = 0;
        let minStr = "";
        let satisfied = 0
        let total = Object.keys(need).length
        for(let right=0;right<s.length;right++){
        if(s[right] in need) {
            need[s[right]]--
            if(need[s[right]] === 0) satisfied++  // one char fully satisfied!
        }
        
     while(satisfied === total) {
            // update minimum
            const window = s.slice(left, right+1)
            if(minStr === "" || window.length < minStr.length) {
                minStr = window
            }
            // remove left char
            if(s[left] in need) {
                need[s[left]]++
                if(need[s[left]] === 1) satisfied--  // lost a needed char!
            }
            left++
        }
        }
return minStr
    }
}
