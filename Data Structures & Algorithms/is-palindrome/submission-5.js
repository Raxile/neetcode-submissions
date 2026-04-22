class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
             const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    let left = 0
    let right = cleaned.length - 1

    while(left < right) {
        if(cleaned[left] !== cleaned[right]) return false  // ⚡ early return
        left++
        right--
    }
    return true  // no need for palindrome variable at all!
   
   }
    
}
