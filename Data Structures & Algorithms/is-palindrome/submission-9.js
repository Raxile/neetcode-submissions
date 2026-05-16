class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
        let isValid = true;
        for(let left =0;left<str.length;left++){
            if(str[left]!==str[str.length-1-left]){
                isValid = false
                break;
            }

        }
        return isValid
    }
}
