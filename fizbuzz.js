const fizzbuzz = (input) =>{
    const array = [];
    for(let i=0;i<=input;i++){
        array[array.length] = i
    }
    for(let i=1;i<=array.length;i++){
        if(array[i]%3==0){
            console.log(array[i])
            console.log('fizz')
        }
        if(array[i]%5 == 0){
            console.log(array[i])
            console.log('buzz')
        }
        if(array[i]%3==0 && array[i]%5==0){
            console.log(array[i])
            console.log('fizzbuzz')
        }
    }
}

fizzbuzz(20)