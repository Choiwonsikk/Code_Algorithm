function solution(myString, pat) {
    if(myString.length >= pat.length){
        if(myString.toLowerCase().search(pat.toLowerCase())>=0){
            return 1
        }else{
            return 0
        }
    }else{
        return 0
    }
    
}