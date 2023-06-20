function solution(A, B) {
    if(A === B) return 0
    for(let i=A.length;i>0;i--){
        if((A.slice(i) + A.slice(0,i)) === B){
            return A.length-i
        }
    }
    return -1
}