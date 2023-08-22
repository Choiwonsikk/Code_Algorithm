function solution(box, n) {
    let result = 0;
    for(let i=0; i<box.length; i++){
        if(i === 0){
            result += parseInt(box[i]/n)
            continue
        }
        result *= parseInt(box[i]/n)
    }
    return result
}