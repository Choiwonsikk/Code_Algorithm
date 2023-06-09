function solution(M, N) {
    //M과 N의 길이를 비교해서 값이 작은 값부터 계산
    //1.result 값에 min-1을 넣음
    //2.그 다음 0부터 min-1까지 반복문을 돌려서 max-1 값을 result에 더함
    let min
    let max
    M < N ? (min = M, max = N) : (min = N, max = M)
    let result = min - 1
    for(let i=0;i<min;i++){result += max-1}
    return result 
}