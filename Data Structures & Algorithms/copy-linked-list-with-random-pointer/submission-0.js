// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
copyRandomList(head) {
    const map = new Map()
    map.set(null, null)  // handle null case!

    // pass 1: create all copies
    let curr = head
    while(curr) {
        map.set(curr, new Node(curr.val))  // node→copy
        curr = curr.next
    }

    // pass 2: set next and random
    curr = head
    while(curr) {
        map.get(curr).next = map.get(curr.next)      // ✅
        map.get(curr).random = map.get(curr.random)  // ✅
        curr = curr.next
    }

    return map.get(head)
}
}
