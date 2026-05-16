class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
                const obj = {};
        for(let n of nums){
obj[n]  = (obj[n]||0) +1 
        }
        
           const arr =Object.fromEntries(
          Object.entries(obj).sort((a,b)=>b[1]-a[1]).splice(0,k)
          )
     return Object.keys(arr).map(val=>Number(val))

    }
}
