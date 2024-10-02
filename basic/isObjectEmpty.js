/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(Object.keys(obj).length == 0) return true
    else false
};

const obj = {}
console.log(isEmpty(obj))