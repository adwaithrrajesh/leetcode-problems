/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const validParnthisis = {
        '(':')',
        '[':']',
        '{':'}'
    }
    const stack = []
    for(let char of s){
        if(Object.keys(validParnthisis).includes(char)){
            stack.push(char)
        }
        else if(Object.values(validParnthisis).includes(char)){
            if(stack.length === 0 || validParnthisis[stack.pop()] !== char) return false
        }
    }
     return stack.length == 0 
};


const paranthisis = "()"
console.log(isValid(paranthisis));