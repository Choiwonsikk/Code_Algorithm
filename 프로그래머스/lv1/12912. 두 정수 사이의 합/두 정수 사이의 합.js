function solution(a, b) {
    let sum = 0;
    if(a === b){
        return a
    }else if(a>b){
        for(let i=0;i<=a-b;i++)
            sum += b+i
    }else if(a<b){
        for(let i=0;i<=b-a;i++)
            sum += a+i
    }
    return sum
}