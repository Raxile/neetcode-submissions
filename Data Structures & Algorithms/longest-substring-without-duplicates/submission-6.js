class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
    let left = 0
    let maxChar = 0

    for(let right = 0; right < s.length; right++) {
        const str = s.slice(left, right)
        const ind = str.indexOf(s[right])

        if(ind !== -1) {          // ✅ duplicate found!
            left = left + ind + 1 // ✅ move left past duplicate
        }

        maxChar = Math.max(maxChar, right - left + 1)  // ✅
    }
    return maxChar
}
}
