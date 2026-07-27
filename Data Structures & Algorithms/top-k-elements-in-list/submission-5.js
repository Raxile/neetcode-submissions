class Solution {
    topKFrequent(nums, k) {
        const freq = {};

        // Step 1: count frequencies
        for (const num of nums) {
            freq[num] = (freq[num] || 0) + 1;
        }

        // Step 2: sort by frequency descending, take top k
        return Object.keys(freq)
            .sort((a, b) => freq[b] - freq[a])
            .slice(0, k)
            .map(Number); // keys are strings, convert back to numbers
    }
}