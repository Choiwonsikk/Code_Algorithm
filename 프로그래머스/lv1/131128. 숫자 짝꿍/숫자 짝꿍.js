function solution(X, Y) {
  const arr1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const arr2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let result = "";
  for (a of X.split("")) {
    arr1[a]++;
  }
  for (b of Y.split("")) {
    arr2[b]++;
  }
  for (let i = 9; i >= 0; i--) {
    while (!(arr1[i] === 0 || arr2[i] === 0)) {
      result += i;
      arr1[i]--;
      arr2[i]--;
    }
  }
  if (result === "") {
    return "-1";
  } else if (Number(result) === 0) {
    return "0";
  }
  return result;
}