function findObjectSum(obj){
    let addedAmount = 0
    for(key in obj){
        addedAmount += obj[key]
    }
    return addedAmount
}
const object={
    amount1:1000,
    amount2:2000,
    amount3:4000
}
const objectSum = findObjectSum(object)
console.log(objectSum);