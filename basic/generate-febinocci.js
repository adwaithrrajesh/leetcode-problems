/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let a =0
    let b = 1
    while(true){
        yield a;
        [a,b] = [b,a+b]
    }
};


const gen = fibGenerator()
const limit = 5
const array = []
for(let i=0;i<limit;i++){
    array.push(gen.next().value)
}
console.log(array)