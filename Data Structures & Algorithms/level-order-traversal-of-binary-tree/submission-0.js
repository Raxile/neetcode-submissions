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
      constructor() {
        this.result=[]
     }
    levelOrder(root,level=0) {
      if(root===null) return [];

      const currL  = this.result[level]??[]

      this.result[level] = [...currL,root.val]

    this.levelOrder(root.left,level+1)
    this.levelOrder(root.right,level+1)

    return this.result

      
    }
}
