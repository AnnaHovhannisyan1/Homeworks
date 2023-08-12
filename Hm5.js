//Map
function newMap(callback){
    let res = [];
    for(let i = 0;i<this.length;i++){
        res.push(callback(this[i]))
    }
    return res
}

//Find

function newFind(callback){
    for(let i = 0;i<this.length;i++){
        if(callback(this[i])){
            return arr[i]
        }
    }
}

//FindIndex

function newFIndIndex(callback){
    for(let i = 0;i<this.length;i++){
        if(callback(this[i])){
            return i
        }
    }
    return -1
}
//Filter

function newFilter(callback){
    let res = [];
    for(let i = 0;i<this.length;i++){
        if(callback(this[i])){
            res.push(arr[i])
        }
    }
    return res
}
