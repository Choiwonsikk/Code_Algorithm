let Upper = a => {return a.charAt(0).toUpperCase() + a.slice(1)}

function solution(s) {
    return s.toLowerCase().split(" ").map(a => Upper(a)).join(" ")
}

//소문자로 바꿔줌 toLowerCase()
//각 문자를 split으로 띄워줌
//map으로 각 문자 반복
//첫 문자를 대문자로 바꿔주는 함수 생성