class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj={};
        for(let i=0;i<nums.length;i++){
            const tar = target - nums[i]
            if(tar in obj){
              
            return [i,obj[tar]];
            break;
            } 
            else {
                obj[nums[i]] = i;
            }
        }
    }
}