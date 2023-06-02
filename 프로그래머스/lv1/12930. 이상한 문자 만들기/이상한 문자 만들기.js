function solution(s) {
  const a = s.split("");
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === " ") {
      count = 0;
      continue;
    } else {
      count++;
      console.log(count % 2);
      count % 2 === 0
        ? (a[i] = a[i].toLowerCase())
        : (a[i] = a[i].toUpperCase());
    }
  }
  // 인덱스를 짝수 홀수로 판단하는 것은 안된다
  // 공백을 기준으로 단어를 나누고 단어의 첫 인덱스를 기준으로 잡음
  // for문으로 반복을 시키고 공백이면 count를 0으로 초기화 시키고 continue, 단어면 count++ 해서 count 기준으로 대문자 소문자로 바꾼다.
  return a.join("")
}