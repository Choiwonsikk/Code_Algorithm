function solution(n, slicer, num_list) {
    const [a, b, c] = slicer
    let result
    switch(n) {
        case 1: {
            result = num_list.slice(0, b+1)
            break
        }
        case 2: {
            result = num_list.slice(a, num_list.length)
            break
        }
        case 3: {
            result = num_list.slice(a, b+1)
            break
        }
        case 4: {
            const curStr = num_list.slice(a, b+1)
            result = curStr.filter((_, i) => i%c === 0 )
            break
        }
        default: {
            break
        }
    }
    
    return result
}
// function solution(n, slicer, num_list) {
//     if(n === 1){
//         return num_list.slice(0,slicer[1]);
//     }else if(n === 2){
//         return num_list.splice(slicer[0],num_list.length-1);
//     }else if(n === 3){
//         return num_list.splice(slicer[0],slicer[1]);
//     }else if(n === 4){
//         let arr = num_list.splice(slicer[0],slicer[1])
//         let result=[]
//         for(let i=0;i<arr.length;i+=slicer[2]){
//             result.push(arr[i])
//         }
//         return result
//     } 
// }