function solution(n) {
    let result = []
    for(let i=2; i<=n; i++){
        if(n%i === 0){
            result.push(i)
            while(n%i === 0){
                n/=i
            }
        }
    }
    return result
}