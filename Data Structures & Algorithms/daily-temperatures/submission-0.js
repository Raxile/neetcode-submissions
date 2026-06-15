class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
dailyTemperatures(temperatures) {
    const stack = []   // stores INDICES
    const result = new Array(temperatures.length).fill(0)

    for(let i = 0; i < temperatures.length; i++) {
        // while stack not empty AND current temp > temp at stack top
        while(stack.length && temperatures[i] > temperatures[stack[stack.length-1]]) {
            const idx = stack.pop()
            result[idx] = i - idx;
        }
        stack.push(i)
    }
    return result
}
}