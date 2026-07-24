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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
mergeTwoLists(list1, list2) {
    const dummy = new ListNode(0)  // dummy head
    let curr = dummy               // pointer to build list

    while(list1 && list2) {
        if(list1.val <= list2.val) {
            curr.next = list1      // attach smaller node
            list1 = list1.next     // move list1 forward
        } else {
            curr.next = list2      // attach smaller node
            list2 = list2.next     // move list2 forward
        }
        curr = curr.next           // move curr forward
    }

    // attach remaining nodes
    curr.next = list1 || list2

    return dummy.next  // skip dummy head
}
}
