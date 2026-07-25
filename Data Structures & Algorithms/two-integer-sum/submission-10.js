class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj ={}
        for(let i=0;i<nums.length ;i++){
            console.log(i)
            const tar = target - nums[i]
            if(tar in obj){
                return [i,obj[tar]]
            }
            else{
                obj[nums[i]] = i
            }

            const tar2 = target - nums[nums.length-1-i]
            if(tar2 in obj){
                return [obj[tar2],nums.length-1-i].sort()
            }
            else{
                obj[nums[nums.length-1-i]] = nums.length-1-i
            }
        }
    }
}
