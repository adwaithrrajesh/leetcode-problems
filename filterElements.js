/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const store = []
    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i],i)) store.push(arr[i])
    }

    return store
};


const array1 = [1, 2, 3, 4, 5];
const fn1 = function greaterThan20(n) { return n > 20; };
console.log(filter(array1, fn1));

// Example 2: Using fn2 to find elements at index 1 (fixed the function)
const array2 = [1, 2, 4, 5, 1];
const fn2 = function atIndex1(n, index) { return index === 1; };
console.log(filter(array2, fn2));