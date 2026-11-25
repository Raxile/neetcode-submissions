class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let isDuplicate =false
        const dup_num = {}

        nums.map((num)=>{
                   dup_num[num] = dup_num[num]?dup_num[num]+1:1 
            if(dup_num[num]>1){
                isDuplicate = true
            }
        })

return isDuplicate
    }
}
