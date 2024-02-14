function solution(a, b) {
    let A = Number(String(a)+String(b))
    let B = Number(String(b)+String(a))
    return A>B ? A:B
}