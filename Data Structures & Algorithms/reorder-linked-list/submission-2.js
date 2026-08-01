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
     * @return {void}
     */
reorderList(head) {
    // 1. Find middle
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Reverse second half (in-place, no new nodes)
    let prev = null, curr = slow.next;
    slow.next = null; // cut the list
    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    // 3. Merge two halves in-place
    let first = head, second = prev;
    while (second !== null) {
        const tmp1 = first.next;
        const tmp2 = second.next;
        first.next = second;
        second.next = tmp1;
        first = tmp1;
        second = tmp2;
    }
    // No return needed — head is mutated
}
}
