function solution(n) {
    let number = 1;
    let array = new Array(n).fill(0).map(() => new Array(n).fill(0));
    // 0으로 채워진 n x n 배열을 만듦 
    let val = 1 
    // 배열에 넣을 1~n**2 까지의 값 
    let incre = 0
    // 반복 1번마다 증가되는 값
    let middle =  parseInt(n/2) 
    
    if(n%2 !== 0){
        array[middle][middle] = n**2
    }
    // n이 홀수일 때 정중앙의 값을 지정해서 넣어준다.
    
    while(middle > 0)
    {
        for(let i=0+incre; i<n-incre; i++){
          array[0+incre][i] = val
          val += 1
        }
        for(let j=1+incre; j<n-incre; j++){
          array[j][n-1-incre] = val
          val += 1
        }
        for(let k=n-2-incre;k>=0+incre; k--){
        array[n-1-incre][k] = val
        val += 1
        }
        for(let l=n-2-incre;l>0+incre;l--){
          array[l][0+incre] = val
          val += 1
        }
        incre += 1
        middle -= 1
    }
    return array
}
/*
[0고정  , 0++   ] n번
[1 ++  , n-1고정] n-1번
[n-1고정, n-2 --] n-1번
[n-2 --, 0고정  ] n-2번

[0+1고정, 0+1 ++] n-2번
[1+1 ++, n-2고정] n-3번
[n-2고정, n-3 --] n-3번
[n-3 --, 0+1고정] n-4번

루틴 한 번에 1 증가하는 변수 생성
n이 홀수일 경우 
let middlePoint = parseInt(n/2) 
array[middlePoint][middlePoint] = n**2
*/