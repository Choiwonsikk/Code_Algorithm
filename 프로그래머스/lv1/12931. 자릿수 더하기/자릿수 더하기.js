function solution(n) {
  let a = n.toString().split("");
  let sum = 0;
  a.map((n) => (sum += Number(n)));
  return sum;
}