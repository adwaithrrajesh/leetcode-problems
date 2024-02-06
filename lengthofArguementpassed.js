/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length
};

const array = [1,2,3,5]
console.log(argumentsLength(array))