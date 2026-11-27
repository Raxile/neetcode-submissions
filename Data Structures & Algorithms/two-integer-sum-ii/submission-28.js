class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const obj={}

        for(let i =0;i<numbers.length;i++){
            const valueI = numbers[i];
            const targetI = target - numbers[i]
            if(targetI in  obj){
                return [obj[targetI]+1,i+1]
            }
                     obj[valueI] = i
        } 
    }
}
