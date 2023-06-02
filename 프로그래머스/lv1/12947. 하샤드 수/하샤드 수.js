function solution(x) {
    const a = x.toString().split("")
    let sum = 0
    a.map(n => sum += Number(n))
    if(x%sum === 0){
        return true
    }else{
        return false
    }
}