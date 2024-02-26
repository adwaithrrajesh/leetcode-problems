function majorityElement(nums) {
    let count = 0;
    let candidate = null;
    
    for (let num of nums) {
        // console.log(num)
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate ? 1 : -1);
    }
    
    return candidate;
}


const nums1 = [3, 2, 3];
const nums2 = [2, 2, 1, 1, 1, 2, 3];
// console.log(majorityElement(nums1)); 
console.log(majorityElement(nums2)); 
