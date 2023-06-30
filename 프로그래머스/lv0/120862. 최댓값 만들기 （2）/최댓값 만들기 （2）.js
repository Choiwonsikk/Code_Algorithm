function solution(numbers) {
    let len = numbers.length
    numbers.sort(function(a, b)  {
        return a - b;
    })
    if(numbers[0] * numbers[1] < (numbers[len-2] * numbers[len-1])){
        return (numbers[len-2] * numbers[len-1])
    }else
        return numbers[0] * numbers[1]
}