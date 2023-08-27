function solution(strArr) {
    let answer = []
    for(let i=0; i<strArr.length; i++){
        if(strArr[i].includes("ad") === false)
            answer.push(strArr[i])
            // strArr.splice(i,1)
    }
    return answer
}