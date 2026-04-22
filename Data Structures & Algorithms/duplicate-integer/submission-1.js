class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

       const seen = {};
    for (let num of nums) {
        if(num in seen) return true;  // checks key existence, not value
        seen[num] = true;             // value doesn't matter, just mark it
    }
    return false;
    }
}






