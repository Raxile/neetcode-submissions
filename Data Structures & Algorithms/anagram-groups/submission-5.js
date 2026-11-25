class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    getKey(val){ return val.split("").sort().join()}
    groupAnagrams(strs) {
        const keys ={}
        for(let i =0;i<strs.length;i++){
          const key = this.getKey(strs[i])
          keys[key] = keys[key]? [...keys[key],strs[i]] : [strs[i]];
        }

        return Object.values(keys)
    }
}
