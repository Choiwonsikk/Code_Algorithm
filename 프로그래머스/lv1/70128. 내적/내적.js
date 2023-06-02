function solution(a, b) {
    sum = 0
    for(let i=0;i<a.length;i++){
        sum += a[i]*b[i]
    }
    return sum
}