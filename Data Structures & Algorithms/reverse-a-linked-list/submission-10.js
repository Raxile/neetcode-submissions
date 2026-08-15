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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let last =null
        let curr = head

        while(curr!==null){
            const next = curr.next;
            curr.next = last;
            last = curr
            curr = next
        }
        return last
    }
}
