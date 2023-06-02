function solution(num) {
    let count = 0;
    while(num > 1 || count <500){
        if(num === 1){
            return count
        }else if(num % 2 === 0){
            num /= 2
            count ++
        }else if(num % 2 === 1){
            num = num * 3 + 1
            count ++
        }
    }
    return -1
}