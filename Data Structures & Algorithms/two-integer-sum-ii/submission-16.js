class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const obj={};
        for(let left=0;left<numbers.length;left++){
            const right = numbers.length -1 - left;
            const leftPartner = target - numbers[left];
            const rightPartner = target - numbers[right];

            if(leftPartner in obj&& obj[leftPartner] !==left){
                return [obj[leftPartner]+1,left+1].sort()
            }
             if(rightPartner in obj&&obj[rightPartner] !==right){
                return [obj[rightPartner]+1,right+1].sort()
            }
            obj[numbers[left]] = left;
            obj[numbers[right]] = right
        }
    }
}
