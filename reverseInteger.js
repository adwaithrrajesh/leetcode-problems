/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isNegative = x<0
    const reversedString = Math.abs(x).toString().split('').reverse().join('')
    const num = parseInt(reversedString)
    if(num> 2**31 -1) return 0
    return isNegative? -num: num
};


const integer = -31419
console.log(reverse(integer));