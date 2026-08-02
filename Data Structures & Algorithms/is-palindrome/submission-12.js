class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        let left=0;
        let right = str.length-1;
        let isPalendrome = true

         while(left<=right){
                        console.log(str[left],str[right])
            if(str[left]!==str[right]){
                isPalendrome = false;
                break;
            }

            left++;
            right--;
         }


        return isPalendrome
    }
}
