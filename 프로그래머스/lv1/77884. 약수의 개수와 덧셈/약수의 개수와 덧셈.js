function solution(left, right) {
  let count = 0;
  for (let i = left; i <= right; i++) {
    let a = 0;
    for (let j = 1; j <= i; j++) {
      if (j * j === i) {
        count -= i;
        a++;
      }
    }
    if (!a) {
      count += i;
    }
  }
  return count;
}