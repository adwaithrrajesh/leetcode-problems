var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false
    const store = {}
    var c = 'a'

    for(let i=0;i<s.length;i++){
        if(store.hasOwnProperty(s[i])){
            c = store[s[i]]
            if(c !== t[i]) return false
        }
        else if(!Object.values(store).includes(t[i])){
            store[s[i]] = t[i]
        }else{
            return false
        }
    }
    return true
};
const t = 'paper'
const s = 'title'
console.log(isIsomorphic(s,t))