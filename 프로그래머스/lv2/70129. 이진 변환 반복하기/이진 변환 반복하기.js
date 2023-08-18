function solution(s) {
    let zero = 0 // 0을 뺀 갯수 총 값
    let binaryCount = 1

    zero = s.split("").sort().indexOf("1")
    let oneCount = s.length - zero // 0제거 후 길이

    while(oneCount > 1){
        const binary = oneCount.toString(2).split("").sort()  // 이진변환
        zero += binary.indexOf("1")
        binaryCount ++
        oneCount = binary.length - binary.indexOf("1")
    }
    return [binaryCount, zero]
}
// 0을 뺀 개수 총 값을 저장할 변수
// 이진 변환을 한 횟수를 저장할 변수
//1. 문자열 s의 전체 길이와 0의 개수를 각각 담기
//2. 전체 길이와 0의 개수를 뺀 값이 1이 아닐경우
//2-1. 이진 변환 한다.
//2-2. 1~2 반복
//3. 전체 길이와 0의 개수를 뺀 값이 1일경우 