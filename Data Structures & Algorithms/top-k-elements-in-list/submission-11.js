class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj ={}
        nums.map((val)=>{
            obj[val] =(obj[val]? obj[val]:0)+1
        })
        const result =  Object.entries(obj).sort((a,b)=>b[1]-a[1])
        return result.map(([a,b])=>a).splice(0,k)
    }
}
