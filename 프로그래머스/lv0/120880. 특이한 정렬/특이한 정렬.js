function solution(numlist, n) {
    numlist.sort((a,b) => b-a)
    let result = []
    let arr = numlist.map(a => Math.abs(a-n))

    for(let i=0; i<arr.length; i++){
        let minIndex = -1
        minIndex = arr.indexOf(Math.min(...arr))
        result.push(numlist[minIndex])
        arr[minIndex] = Infinity
    }
    return result
}