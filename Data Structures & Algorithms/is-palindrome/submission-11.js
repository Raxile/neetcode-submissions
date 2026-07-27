class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let IsPalandrome = true;
        let left = 0;
        let right = str.length -1;
        while(left<right){
         if(str[left]===str[right]){
            left++;
            right--;
         }else{
            IsPalandrome = false;
            break;
         }
        }
        return IsPalandrome
        

    }
}
