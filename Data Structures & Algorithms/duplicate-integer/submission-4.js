class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const obj = {}
        let isDuplicate = false;
        for(let i =0;i<nums.length;i++){
            if(nums[i] in obj){
                isDuplicate = true;  
                break;
            }
            obj[nums[i]] = obj[nums[i]]?  obj[nums[i]] +1 :1
        }

        return isDuplicate
    }
}
