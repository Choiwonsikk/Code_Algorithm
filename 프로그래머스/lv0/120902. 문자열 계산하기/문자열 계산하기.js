function solution(my_string) {
  let oper;
  let a = my_string.split(" ");
  let result = Number(a[0]);
  for (let i = 1; i < a.length; i++) {
    if (i % 2 === 0) {
      if (oper === "+") {
        result += Number(a[i]);
      } else {
        result -= Number(a[i]);
      }
    } else {
      oper = a[i];
    }
  }
    return result
}