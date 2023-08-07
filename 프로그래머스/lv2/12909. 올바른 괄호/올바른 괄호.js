function solution(s){
    let arr = []
    for(a of s.split(""))
    {    
        if(a === ")" && arr[arr.length-1] === "("){
            arr.pop()
        }else{
        arr.push(a)
        }
    }
    return arr.length === 0
}