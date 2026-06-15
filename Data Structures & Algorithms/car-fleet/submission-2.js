class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = [];
        const cars = position
        .map((p,i) => [p, speed[i]])
        .sort((a,b) => b[0] - a[0])
        for(let [pos, spd] of cars){
        const t = (target-pos)/spd;
        if(!stack.length||t>stack[stack.length-1]){
            stack.push(t)
        }
        }
        return stack.length
    }
}
