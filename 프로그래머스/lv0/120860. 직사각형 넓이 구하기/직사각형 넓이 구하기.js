function solution(dots) {
    let w
    let h
    for(let i=1;i<dots.length; i++)
    {
        if(dots[0][0] === dots[i][0]){
        w = Math.abs(dots[0][1] - dots[i][1])
        }
        if(dots[0][1] === dots[i][1]){
        h = Math.abs(dots[0][0] - dots[i][0])
        }
    }
    return w*h
}