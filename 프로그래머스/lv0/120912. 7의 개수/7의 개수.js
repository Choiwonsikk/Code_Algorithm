function solution(array) {
    if(array.join("").match(/7/g) === null){
        return 0
    }else
        return array.join("").match(/7/g).length
}