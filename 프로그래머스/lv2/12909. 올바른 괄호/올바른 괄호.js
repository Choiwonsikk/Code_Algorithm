function solution(s){
    let arr = []
    s.split("").map( a => {
        if(a === ")" && arr[arr.length-1] === "("){
            arr.pop()
        }else{
        arr.push(a)
        }
    }) 
    return arr.length === 0
}