function solution(t, p) {
    let pl = p.length
    let result = 0
    for(let i=0; i<=t.length-pl; i++){
        if(Number(t.slice(i,i+pl)) <= Number(p)) 
    result++
    }
    return result
}