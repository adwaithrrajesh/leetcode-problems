/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    const lastElement = arr[arr.length-1]
    if(this.length==0) return -1
    return lastElement
};

const arr = [1, 2, 3];
arr.last();