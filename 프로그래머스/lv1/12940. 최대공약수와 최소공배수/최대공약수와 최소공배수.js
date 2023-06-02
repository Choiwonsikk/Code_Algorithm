function solution(n, m) {
    let GCD = 0
    let LCM = 0
    let min = 0
    let max = 0
    if(n<m){
        min = n
        max = m 
    }else{
        min = m
        max = n   
    }
    for(let i=1;i<=min;i++){
        if(n%i===0 && m%i===0){
            GCD = i
        }
    }
    if(GCD === 1){
        return [GCD, n*m]
    }else if(GCD === min){
        return [GCD, max]
    }else{
        for(let j=1;j<min;j++){
            LCM = max * j
            if(LCM % min === 0){
                return [GCD, LCM]
            }
        }
    }    
}