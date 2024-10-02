/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const manipulatedArray = []
    for(let i=0;i<arr.length;i++){
        manipulatedArray.push(fn(arr[i],i))
    }
    return manipulatedArray
};

const array = [1,2,3,4,5]
const fn = function plusOne(n){return n+1}
console.log(map(array,fn))