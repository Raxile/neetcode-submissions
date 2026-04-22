class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
            const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "")

    const length = Math.floor(cleaned.length/2)-1;
    let palandrome = true;
    for(let i =0;i<=length;i++){
        if(cleaned[i]!==cleaned[cleaned.length-1-i]){ palandrome = false; break;}
    }
    return palandrome
    }
}
