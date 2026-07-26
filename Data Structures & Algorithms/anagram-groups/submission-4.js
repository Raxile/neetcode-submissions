class Solution {
    groupAnagrams(strs) {
        const map = {};
        for (const str of strs) {
            const key = [...str].sort().join("");
            if (key in map) {
                map[key].push(str);       // push instead of [...arr, val]
            } else {
                map[key] = [str];
            }
        }
        return Object.values(map);
    }
}