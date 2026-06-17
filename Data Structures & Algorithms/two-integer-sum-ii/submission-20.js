class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const obj ={};
        let left = 1;
        let right = numbers.length;
        while(left<=right){
          const lValue = numbers[left-1];
        const tarValue = target - lValue;
          if(tarValue in obj){
            return [left,obj[tarValue]].sort();
          }else{
           obj[lValue] = left;    
          }
         const rValue = numbers[right-1];
        const tarValueR = target - rValue;
          if(tarValueR in obj){
            return [right,obj[tarValueR]].sort();
          }else{
           obj[rValue] = right;    
          }

          left++;
          right--;
        }
    }
}
