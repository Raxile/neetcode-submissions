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
    constructor(){
        this.count = 0;
        this.result= 0;
    }
    kthSmallest(root, k) {
    if(root===null) return;

       this.kthSmallest(root.left,k)
     
    this.count++;
    if(this.count === k){
        this.result = root.val
      
    }

    this.kthSmallest(root.right,k)
      return this.result

    }

 
}
