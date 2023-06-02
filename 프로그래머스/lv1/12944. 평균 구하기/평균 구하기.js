function solution(arr) {
    let sum = 0;
    arr.map(n => sum += n)
    return sum/arr.length;
}