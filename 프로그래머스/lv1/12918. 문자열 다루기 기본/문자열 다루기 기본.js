function solution(s) {
        if(s.length===4 || s.length===6){
        const result = s.replace(/[^0-9]/g, "");
        return result.length === s.length ? true : false;
        }else{
            return false
        }
    
}