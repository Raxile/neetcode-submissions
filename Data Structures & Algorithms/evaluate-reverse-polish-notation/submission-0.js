class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
const stack = []
    const ops = new Set(['+','-','*','/'])

    for(let token of tokens) {
        if(ops.has(token)) {
            const b = stack.pop()
            const a = stack.pop()
            if(token === '+') stack.push(a + b)
            if(token === '-') stack.push(a - b)
            if(token === '*') stack.push(a * b)
            if(token === '/') stack.push(Math.trunc(a / b))
        } else {
            stack.push(Number(token))  // convert string to number!
        }
    }
    return stack[0]

    }
}
