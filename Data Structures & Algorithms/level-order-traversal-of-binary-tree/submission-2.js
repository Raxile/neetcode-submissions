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
     * @return {number[][]}
     */
    
    levelOrder(root) {
     this.result = []
     this.traverselOrder(root,0)
     return this.result
    }

    traverselOrder(root,level){
        if(root === null) return null

         const elem = this.result[level]??[]
         elem.push(root.val);
        this.result[level] = elem

         this.traverselOrder(root.left,level+1)

                  this.traverselOrder(root.right,level+1)

    }
}
