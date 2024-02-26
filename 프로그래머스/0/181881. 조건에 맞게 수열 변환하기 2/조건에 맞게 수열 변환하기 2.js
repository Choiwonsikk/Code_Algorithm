function solution(arr) {
    let count = 0;
    let pre = [...arr]
    while(true)
    {
        let next = pre.map((a)=>{
            if(a >= 50 && a%2 === 0){
                return a /= 2
            }else if(a < 50 && a%2 === 1){
                return a = a*2+1
            }
            return a
        } )
        // for(let i=0; i<arr.length; i++){
        //     if(arr[i] >= 50 && arr[i]%2 === 0){
        //         arr[i] /= 2
        //     }else if(arr[i] < 50 && arr[i]%2 === 1){
        //         arr[i] = arr[i]*2+1
        //     }
        // }
        
        // for문 대신에 map을 쓰는 이유
        // ==> 변경한 배열과 이전 배열이 다를 때, 변경한 배열을 그대로 pre배열에 초기화 해야하는데
        // 이때 전역 변수에 저장을 해버리면 얕은 복사가 일어나 값을 공유하는 두 개의 배열이 생겨버리므로
        // map함수를 이용하여 매 반복마다 새로운 배열을 만들어 변경 값을 저장해준다.
        
        let equal = next.every((element, index) => element === pre[index])
        
        if(equal)
            break;
        pre = next
        count ++
    }
    return count
    
    // 반복 조건 - 배열 원소값이 다를 때
    //배열 각 원소 값을 확인하여
    //50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱하고 다시 1을 더합니다
}