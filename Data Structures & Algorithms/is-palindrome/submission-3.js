class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
            const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    let palandrome = true;
    let left = 0
    let right = cleaned.length - 1
   while(left<right){
       if(cleaned[left]!==cleaned[right]) {palandrome = false};
       left+=1;
       right-=1;
   }
    
    return palandrome
    }
}
