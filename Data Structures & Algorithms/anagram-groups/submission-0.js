class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
            const obj ={}
    strs.forEach((elem)=>{
        const key = elem.split("").sort().join("");
        obj[key] = obj[key] || [];
        obj[key].push(elem)

    })
    return Object.values(obj);
    }
}
