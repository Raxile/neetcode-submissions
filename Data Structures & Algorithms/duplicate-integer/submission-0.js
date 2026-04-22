class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const seen = {};

    for (let num of nums) {
if(seen?.[num]||seen?.[num]===0) return true 
seen[num] = num
    }
    console.log(seen)
return false
    }
}






