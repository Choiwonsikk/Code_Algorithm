function solution(id_pw, db) {
    let result = "fail"
    for(c of db){
        if(c[0] === id_pw[0]){
            result = "wrong pw"
            if(c[1] === id_pw[1]){
                result = "login"
            }
        }
    }
    return result 
}
// 1. id_pw[0]과 db[n][0]이 같지 않을 때 "fail"
// 2. id_pw[0]과 db[n][0]이 같고 id_pw[1]과 db[n][1]이 같지 않을 때 "wrong pw"
// 3. id_pw과 db[n]이 같을 때 "login"

// db