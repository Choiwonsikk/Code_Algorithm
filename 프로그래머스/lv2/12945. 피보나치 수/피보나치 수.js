function solution(n) {
    let first = 0
    let second = 1
    let sum = 0
    for(let i=2; i<=n; i++){
        sum = (first + second)% 1234567
        first = second
        second = sum
    }
    return sum 
}