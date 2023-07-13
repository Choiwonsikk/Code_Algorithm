function solution(array) {
   if(array.length === 1)
       return array[0]
   let obj = {}
    for(a of array){
        if(obj[a] === undefined){
            obj[a] = 1
        }else{
            obj[a] += 1
        }
    }

    let result = Object.entries(obj).sort((a, b) => b[1] - a[1])
    if(result.length === 1){
        return Number(result[0][0])
    }else if(result[0][1] === result[1][1]){
        return -1
    }
    return Number(result[0][0])
}