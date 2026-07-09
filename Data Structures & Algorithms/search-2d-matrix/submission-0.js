class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
    let result = false;
     
     for(let i =0;i<matrix.length;i++){
        const innerArr = matrix[i]
        if(target>innerArr[innerArr.length-1]|| target<innerArr[0]){continue;}

        let left =0;
        let right=innerArr.length-1;
        while(left<=right){
        let mid = Math.floor((left + right) / 2)
        if (innerArr[mid]===target){
            result =  true;
             break;
            }else if(innerArr[mid]<target){
left = mid + 1
            }else right = mid - 1;

        }
     }
     return result;

    }
}
