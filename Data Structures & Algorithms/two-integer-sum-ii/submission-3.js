class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
 const obj = {}
    for(let i = 0; i < numbers.length; i++) {
        const leftPartner = target - numbers[i]
        const rightPartner = target - numbers[numbers.length-1-i]
        
        if(leftPartner in obj&&obj[leftPartner]+1 !==i+1) {           
            return [obj[leftPartner]+1, i+1].sort()  
        }
        if(rightPartner in obj&&obj[rightPartner]+1 !==numbers.length-i){
            return [obj[rightPartner]+1, numbers.length-i].sort()  
        }
        obj[numbers[i]] = i  
        obj[numbers[numbers.length-1-i]] = numbers.length-1-i
    }
    return []
    }
}

