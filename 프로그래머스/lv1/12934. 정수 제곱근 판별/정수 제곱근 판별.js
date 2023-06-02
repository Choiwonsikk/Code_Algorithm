function solution(n) {
    for(let i=1;i<=n;i++){
        if(n === i*i){
            return (i+1)*(i+1)
        }else if(n < i*i){
            return -1
        }
    }
}