/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        this.kthValue = 0
        this.counter = 0
        
        this.traversal(root,k)
    
      return this.kthValue




    }
    traversal(root,k,counter=0){
        if(root===null) return counter
        let newcounter = 1+this.traversal(root.left,k,counter)
        
        if(k===newcounter){
            this.kthValue = root.val
        }

      
      newcounter = this.traversal(root.right,k,newcounter)
       return newcounter

    }

}
