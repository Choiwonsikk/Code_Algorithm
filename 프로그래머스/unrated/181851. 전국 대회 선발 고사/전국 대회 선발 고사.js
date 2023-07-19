function solution(rank, attendance) {
    let arr = new Map()

    for(let i=0; i<attendance.length; i++){
        if(attendance[i] === true){
        arr.set(i, rank[i])
        }
    }

    let result = [...arr].sort((a,b) => a[1]-b[1])
    return result[0][0]*10000 + result[1][0]*100 + result[2][0]
}