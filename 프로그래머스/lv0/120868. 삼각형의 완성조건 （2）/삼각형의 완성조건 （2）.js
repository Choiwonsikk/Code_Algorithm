function solution(sides) {
    return sides.sort((a,b) => {return a-b})[0] * 2 -1
}
// sides의 한 변이 가장 긴 길이 일 때 
// long < short + x --> x > long - short
// 나머지 한 변이 가장 긴 길이 일 때
// x < long + short
// 그렇다면 x 의 범위는
// long - short < x < long + short 이므로
// x의 개수는 (long + short) - (long - short) - 1 개 이므로
// x 는 2*short - 1이다.