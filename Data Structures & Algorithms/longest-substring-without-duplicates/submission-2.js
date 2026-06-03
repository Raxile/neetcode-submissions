class Solution {
    lengthOfLongestSubstring(s) {
        let max = 0, left = 0;
        const seen = new Map(); // char -> last index
        for (let right = 0; right < s.length; right++) {
            const c = s[right];
            if (seen.has(c) && seen.get(c) >= left) {
                left = seen.get(c) + 1;
            }
            seen.set(c, right);
            max = Math.max(max, right - left + 1);
        }
        return max;
    }
}

