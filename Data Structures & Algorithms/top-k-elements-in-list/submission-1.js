class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(s,t) {
        const obj = {}
    s.forEach((elem)=>{
obj[elem] = (obj[elem] || 0) + 1
    })
   const k =  Object.entries(obj).sort((a,b)=>b[1]-a[1]).slice(0,t)
    return k.map(elem=>Number(elem[0]))
    }
}
