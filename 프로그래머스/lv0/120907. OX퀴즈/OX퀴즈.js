function solution(quiz) {
    var answer = [];
    for(let i=0; i<quiz.length; i++){
        const a = quiz[i].split(" ")
        Number(a[0]) + (a[1] === '-' ? -1 : 1) * Number(a[2]) === Number(a[4]) ? answer.push("O") : answer.push("X")
    }
    return answer;
}