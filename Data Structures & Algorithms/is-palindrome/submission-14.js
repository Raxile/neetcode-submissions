class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
javascript
isPalindrome(s) {
    function isAlphaNum(c) {
    return /[a-z0-9]/i.test(c)
}
    let left = 0
    let right = s.length - 1

    while(left < right) {
        // skip non-alphanumeric from left
        while(left < right && !isAlphaNum(s[left])) left++
        // skip non-alphanumeric from right
        while(left < right && !isAlphaNum(s[right])) right--

        if(s[left].toLowerCase() !== s[right].toLowerCase()) return false
        left++
        right--
    }
    return true
}
}
