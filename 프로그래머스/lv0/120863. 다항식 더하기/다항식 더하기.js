function solution(polynomial) {
    let variable = 0
    let constant = 0
    let arr = polynomial.split(" ")
    arr[0].slice(0,2)
    for(let i=0; i<arr.length; i+=2){
    if(arr[i].indexOf('x') === -1){
        constant += Number(arr[i])
    }else if(arr[i].indexOf('x') === 0){
        variable += 1
    }else{
        variable += Number(arr[i].slice(0,arr[i].indexOf('x')))
     }
    }
    if(variable === 1){
        variable = 'x'
    }else if(variable > 1){
        variable += 'x'
    }

    if(constant === 0){
        return variable
    }else if(variable === 0){
        return constant+''
    }else{
        return `${variable} + ${constant}`
    }
}