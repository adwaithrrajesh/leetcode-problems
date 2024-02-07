function palidrome (word){
    word = word.toString()
    let reversedWord = ''
    for(let i=word.length-1;i>=0;i--){
        reversedWord += word[i]
    }
    if(reversedWord == word) return true
    else return false
}

const word = 121
console.log(palidrome(word))