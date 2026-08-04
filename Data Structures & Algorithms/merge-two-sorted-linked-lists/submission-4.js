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
        let result = new ListNode(0)
        let curr = result;

        while(list1!==null&&list2!==null){
            if(list1.val<= list2.val){
                curr.next = new ListNode(list1.val)
                curr = curr.next
                list1 = list1.next
            }else{
                curr.next = new ListNode(list2.val)
                curr = curr.next
                list2 = list2.next
            }
        }
        curr.next = list1||list2

        return result.next
    }
}
