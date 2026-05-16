class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    const obj = {}
    for(let i = 0; i < nums.length; i++) {
        const partner = target - nums[i]
        if(partner in obj) {           
            return [obj[partner], i]  
        }
        obj[nums[i]] = i              
    }
    return []
}
}
