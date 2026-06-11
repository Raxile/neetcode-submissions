class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
       const obj={")":"(","}":"{","]":"["};
       const str = [];
       let out = true;
        for(let i =0;i<s.length;i++){
           if(s[i] in obj){
             if(str[str.length-1]===obj[s[i]]){
                str.pop()
             }else{
                str.push(s[i]);
                break;
             }
           }
            else {
                str.push(s[i]);
             }
        }
        return !str?.length
    }
}
