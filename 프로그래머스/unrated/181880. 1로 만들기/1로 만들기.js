function solution(num_list) {
    let result = 0
    for(a of num_list){
        while(a>1){
            if(a%2 === 0){
                a = a/2
                result += 1
            }else{
                a = (a-1)/2
                result += 1
            }
        }
    }
    return result
}