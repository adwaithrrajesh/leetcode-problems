function singleNumber(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
    return result;
}

const array = [1,2,4,5,1,2]
const answer = singleNumber(array)
console.log(answer);