function solution(numbers, n) {
    let result = 0
    for(a of numbers){
        result += a
        if(result > n)
            return result
    }
}