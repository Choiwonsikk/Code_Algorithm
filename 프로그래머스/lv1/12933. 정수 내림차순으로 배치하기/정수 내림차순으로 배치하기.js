function solution(n) {
    const arr = n.toString().split("")
    for(let j=1;j<arr.length;j++){
        for(let i=0;i<arr.length-j;i++){
            if(arr[i]<arr[i+1]){
                let tmp = arr[i+1]
                arr[i+1] = arr[i]
                arr[i] = tmp
            }
        }
    }
    return Number(arr.join(""))
}