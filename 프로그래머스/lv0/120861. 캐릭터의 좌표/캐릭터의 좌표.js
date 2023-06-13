function solution(keyinput, board) {
    let width = 0
    let height = 0
    let wMax = (board[0]-1)/2
    let hMax = (board[1]-1)/2
    for(let i=0; i<keyinput.length; i++){
        if(keyinput[i] === "up"){
            if(height < hMax){
                height += 1
            }
        }else if(keyinput[i] === "down"){
            if(height > -hMax){
                height -= 1
            }
        }
        if(keyinput[i] === "right"){
            if(width < wMax){
                width += 1
            }
        }else if(keyinput[i] === "left"){
            if(width > -wMax){
                width -= 1
            }
        }
    }
    return [width, height]
}
// board가 [n, m] 일 때 result는 [+- n-1/2, +- m-1/2] 의 범위까지 가능

// 풀이 - width, height 변수 선언 후 
// left일 때 width -= 1 right일 때 width += 1
// up일 때 height += 1 down일 때 height -= 1
// 총 합을 계산한 뒤 board 크기에 적합한 지 확인하고 
// 크기가 같거나 벗어난다면 최대크기로 출력하고 작다면 그대로 출력