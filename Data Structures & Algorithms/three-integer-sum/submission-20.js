class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
threeSum(nums) {
    const numbers = [...nums].sort((a,b)=>a-b)
    const results = [];

    for(let i =0;i<numbers.length;i++){
    if(i > 0 && numbers[i] === numbers[i-1]) continue
      let left = i+1;
      let right = numbers.length -1;
      while(left<right){
        const sum = numbers[i] + numbers[left]+numbers[right];
        if(sum ===0){
            results.push([numbers[i],numbers[left],numbers[right]])
            while(left<right&&numbers[left]===numbers[left+1]) left++;
            while(left<right&&numbers[right]===numbers[right-1]) right--;
            left++;
            right--;
        }
        else if(sum>0){
            right--;
        }else left ++
      }

    }
    return results

}
}
