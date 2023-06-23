function solution(n) {
    let a = 1
    let result = a
    while(a > 0){
        result *= a
        if(result === n){
            return a
        }else if(result > n){
            return a-1
        }
        a++
    }
}