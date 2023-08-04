function solution(s) {
    let result = []
    let arr = s.split(" ").sort((a,b) => (a - b))
    result.push(arr[0])
    result.push(arr[arr.length-1])
    return result.join(' ')
}