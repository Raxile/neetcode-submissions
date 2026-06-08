class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const str1 = s1.split("").sort().join("");
        let left=0;
        let right = s1?.length -1 ;
        let isValid = false;
        while(right<s2?.length){
         const str2 = s2.slice(left,right+1).split("").sort().join("");
         if(str2.includes(str1)){
            isValid = true;
            break;
         }else {
            left++;
            right++;
         }
        }

        return isValid;
    }
}
