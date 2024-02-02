var chunk = function(arr, size) {
    if (arr.length === 0 || size <= 0) return [];
    const newArray = [];
    const partitionNumber = Math.ceil(arr.length / size);
    for (let i = 0; i < partitionNumber; i++) {
        const chunk = [];
        for (let j = i * size; j < (i + 1) * size && j < arr.length; j++) {
            chunk.push(arr[j]);
        }
        newArray.push(chunk);
    }
    return newArray;
};

const array = [1, 2, 2, 4, 1];
const size = 2;
console.log(chunk(array, size));
