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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    
    mergeKLists(lists) {
    if(lists.length === 0) return null

    while(lists.length > 1) {
        const merged = []

        // pair up lists and merge
        for(let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i]
            const l2 = i+1 < lists.length ? lists[i+1] : null
            merged.push(this.mergeTwoLinkedList(l1, l2))
        }

        lists = merged  // replace with merged results
    }

    return lists[0]
}

    mergeTwoLinkedList(list1,list2){
     let head = new ListNode(0)
     let curr = head;

     while(list1!==null&&list2!==null){
        let first = list1.val;
        let second = list2.val;

        if(first<=second){
         const node = new ListNode(first)
         list1 = list1.next
         curr.next = node
         curr = curr.next
        }else{
        const node = new ListNode(second)
         list2 = list2.next
         curr.next = node
         curr = curr.next
        }
     }
      curr.next = list1||list2
      return head.next

    }
}
