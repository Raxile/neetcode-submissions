class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
            let left = 0        // start of window
    let maxLen = 0      // answer
    const seen = new Set()  // characters in current window

    for(let right = 0; right < s.length; right++) {
        // right = new character entering window

        // STEP 1: is new character already in window?
        while(seen.has(s[right])) {
            // YES → remove leftmost character
            seen.delete(s[left])
            left++  // shrink window from left
        }

        // STEP 2: add new character to window
        seen.add(s[right])

        // STEP 3: update max length
        // window size = right - left + 1
        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen
    }
}
