function solution(n) {
    let result = 6
    while(n>0){
        if(result % n === 0)
            return result/6
        result += 6
    }
}