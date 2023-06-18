function solution(array, n) {
   let result = array[0]
   let sub = Math.abs(array[0]-n)
    for(let i=1; i<array.length;i++){
        if(sub > Math.abs(array[i]-n)){
            sub = Math.abs(array[i]-n)
            result = array[i]
        }else if(sub === Math.abs(array[i]-n)){
            if(result > array[i]) {result = array[i]}
        }
    }
    return result
}