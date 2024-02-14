function solution(num_list, n) {
    let zero = 0
    for(a of num_list){
        if(a === n)
            return 1
    }
    return zero
}