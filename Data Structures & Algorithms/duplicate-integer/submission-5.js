class Solution {
    hasDuplicate(nums) {
        const obj = {};

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] in obj) {
                return true;
            }

            obj[nums[i]] = true;
        }

        return false;
    }
}