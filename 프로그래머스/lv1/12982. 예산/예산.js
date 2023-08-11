function solution(d, budget) {
    let sum = 0
    let result = 0
    for(let a of d.sort((a,b) => a-b)){
        if(budget >= (a + sum)){
            sum += a
            result ++
        }
    }
    return result
}

// d에서 요소들의 합이 budget보다 크지 않은 최대한의 수를 구하는 것