function solution(a, b, n) {
    let answer = 0;
   while (n >= a) { //보유중인 병의 개수가 교환 가능한 최소 개수인 a보다 작을 때 반복문 종료
       const trade = Math.floor(n / a) * b; 
       // 교환하고 받은 병의 개수
       const rest = n % a;
       // 교환 못하고 남은 병의 개수
       n = rest + trade;
       answer += trade;
  }
   return answer;
}