class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {}
        for(let elem of strs){
            let s = elem.split("").sort().join("");
            if(s in obj){
                obj[s] = [...obj[s],elem]
            }
            else obj[s] = [elem];
        }
     return Object.values(obj)
    }
}
