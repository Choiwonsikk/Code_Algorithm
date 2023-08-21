function solution(s, n) {
    return s.split("").map(char => {
        const code = char.charCodeAt()
        if(96<code && code<123){
          return String.fromCharCode((code+n - 97) % 26 + 97)
        }
        if(64<code && code<91){
          return String.fromCharCode((code+n - 65) % 26 + 65)
        }
        
        return " "
    }).join("")
}
//대문자 A ~ Z는 아스키코드로 65 ~ 90
//소문자 a ~ z는 아스키코드로 97 ~ 122
//s의 문자열에 각 문자를 아스키코드로 치환하고 n만큼 더해서 다시 문자로 변환한다.
//대문자는 대문자로만, 소문자는 소문자로만 변환이 된다.
//아스키코드로 치환하고 n만큼 더하는 과정에서 범위를 넘어선다면 대,소문자의 첫 번째 순서로 돌아가서 다시 더한다
