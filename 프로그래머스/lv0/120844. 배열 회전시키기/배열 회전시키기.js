function solution(numbers, direction) {
    if(direction === "left"){
        const a = numbers.shift()
        numbers.push(a)
    }else{
        const a = numbers.pop()
        numbers.unshift(a)
    }
    return numbers
}