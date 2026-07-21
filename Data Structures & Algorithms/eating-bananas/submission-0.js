class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let result = right;
       while(left <= right) {
        const mid = Math.floor((left + right) / 2)
        
        // calculate total hours at speed mid
        const hours = piles.reduce((acc, p) => acc + Math.ceil(p/mid), 0)
        
        if(hours <= h) {
            result = mid   // valid speed! try slower
            right = mid-1   // search left for minimum
        } else {
            left = mid+1    // too slow! search right
        }
    }
    return result

       
    }
}
