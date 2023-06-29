function solution(num_list, n) {
    let b = num_list.splice(n)
    return b.concat(num_list)
}