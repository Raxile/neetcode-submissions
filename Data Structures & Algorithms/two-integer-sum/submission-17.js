class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const keys={}
        let output = []

        nums.map((num,i)=>{
  
            
            const reqTar = target -num
            if(reqTar in keys){
                output = [keys[reqTar],i].sort()
            }
            keys[num]= i
        })

        return output
        
    }
}
