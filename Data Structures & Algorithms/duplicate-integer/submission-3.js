class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
     const obj ={}
     let i = 0
     let isDuplicate = false
while(i<=nums.length){
    if(obj?.[nums[i]]){
        isDuplicate= true
   break;
    }else{
        obj[nums[i]] = 1
        i++;
    }

}
 return isDuplicate
    }
}
