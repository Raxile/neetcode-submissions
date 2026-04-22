class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
const seen = {};

    for (let i = 0; i < nums.length; i++) {
        const partner = target - nums[i]

        if(partner in seen) {
            return [seen[partner],i]
        }

        seen[nums[i]] = i
    }
        
    }
}


