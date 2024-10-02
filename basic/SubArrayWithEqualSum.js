/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    const sumsSet = new Set();
    for (let i = 0; i < nums.length - 1; i++) {
        const sum = nums[i] + nums[i + 1];
        if (sumsSet.has(sum)) {
            return true;
        }
        sumsSet.add(sum);
    }
    return false
};

const array = [1,2,3,2,1]
console.log(findSubarrays(array))