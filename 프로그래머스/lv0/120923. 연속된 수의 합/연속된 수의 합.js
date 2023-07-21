function solution(num, total) {
    let answer = []
    let fac = 0
    for(let i=1; i<num; i++){
        fac += i
    }
    let start = (total - fac)/num
    for(let j=0; j<num; j++){
        answer.push(start)
        start ++
    }
    return answer
}
