class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
       const seen = {}
    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i]
        if (need in seen) return [seen[need], i]
        seen[nums[i]] = i
    }
    return []

        
    }
}
