/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const reversed = str => str.split("").reverse().join("");
        let str1 = "";
        let str2 ="";

        let curr = l1
        while(curr!==null){
            str1 +=curr.val;
            if(curr.next===null){break}
            curr = curr.next
        }

        curr = l2
        while(curr!==null){
            str2 +=curr.val;
            if(curr.next===null){break}
            curr = curr.next
        }

        let resultNode = new ListNode(0)
        curr = resultNode
        const result = BigInt(reversed(str1)) + BigInt(reversed(str2))
         const data = [...reversed(String(result))]
        data.forEach((val)=>{
        curr.next = new ListNode(val);
        curr = curr.next;
        })
    return resultNode.next
    }
}
