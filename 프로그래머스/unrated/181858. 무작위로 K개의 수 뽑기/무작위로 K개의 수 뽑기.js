function solution(arr, k) {
    let result = [arr[0]]
    for(let i=1; i<arr.length; i++){
        if(!(compare(arr[i], result)) && result.length < k){
          result.push(arr[i])
        }
    }
    while(result.length < k){
        result.push(-1)
    }
    return result
}

function compare (arr, result){
    for(a of result){
        if(a === arr)
            return true
    }
  return false
}