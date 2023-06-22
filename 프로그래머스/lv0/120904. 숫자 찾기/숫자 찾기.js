function solution(num, k) {
    let result = String(num).split("").indexOf(String(k))
    if(result >= 0){
        return result + 1
    }
    return result
    
}