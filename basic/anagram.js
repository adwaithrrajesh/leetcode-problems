/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const existingChar = {}
    for(let char of s){
        existingChar[char] = (existingChar[char] || 0) + 1;
    }

    for(let char of t){
        if(!existingChar[char]) return false
        existingChar[char] --
    }
    return true
};

const word1 = 'abbcc';
const word2 = 'abcab';
console.log(isAnagram(word1, word2)); 