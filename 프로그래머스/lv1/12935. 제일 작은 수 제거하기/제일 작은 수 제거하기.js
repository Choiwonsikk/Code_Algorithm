function solution(arr) {
    if(arr.length === 1)
        return [-1]
    let min = arr[0]
    let index
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i]
            index = i
        }
    }
    arr.splice(index, 1)
    return arr
}