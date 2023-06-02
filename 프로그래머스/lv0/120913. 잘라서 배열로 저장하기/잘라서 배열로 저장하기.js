function solution(my_str, n) {
  let a = my_str.split("");
  let result = [];
  while (a.length > 0) {
    result.push(a.splice(0, n).join(""));
  }
  return result
}