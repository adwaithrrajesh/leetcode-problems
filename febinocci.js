const febinocci = (inp) =>{
    const array = [0,1]
    for(let i=2;i<inp;i++){
        array.push(array[i-1]+array[i-2])
    }
    return array
}

console.log(febinocci(20))