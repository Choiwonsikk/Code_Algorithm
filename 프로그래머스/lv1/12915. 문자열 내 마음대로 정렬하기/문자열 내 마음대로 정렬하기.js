function solution(strings, n) {
  let tmp;
  for (let i = 0; i < strings.length - 1; i++) {
    for (let j = i + 1; j < strings.length; j++) {
      if (strings[i][n] > strings[j][n]) {
        tmp = strings[i];
        strings[i] = strings[j];
        strings[j] = tmp;
      } else if (strings[i][n] === strings[j][n]) {
        if (strings[i] > strings[j]) {
          tmp = strings[i];
          strings[i] = strings[j];
          strings[j] = tmp;
        }
      }
    }
  }
    return strings
}