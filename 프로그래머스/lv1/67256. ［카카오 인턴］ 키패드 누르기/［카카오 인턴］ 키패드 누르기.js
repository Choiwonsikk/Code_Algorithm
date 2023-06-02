function solution(numbers, hand) {
  const keypad = [
    [1, 3],
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [0, 2],
    [1, 2],
    [2, 2],
    [0, 3],
    [2, 3],
  ];
  // console.log();
  let answer = "";
  let L = 10;
  let R = 11;
  for (let a of numbers) {
    if (a === 1 || a === 4 || a === 7) {
      //눌러야 하는 번호가 1,4,7 일 때 L추가하고 L에 값 지정
      answer += "L";
      L = a;
    } else if (a === 3 || a === 6 || a === 9) {
      //눌러야 하는 번호가 3,6,9 일 때 R추가하고 R에 값 지정
      answer += "R";
      R = a;
    } else if (
      Math.abs(keypad[a][0] - keypad[L][0]) +
        Math.abs(keypad[a][1] - keypad[L][1]) ===
      Math.abs(keypad[a][0] - keypad[R][0]) +
        Math.abs(keypad[a][1] - keypad[R][1])
    ) {
      hand === "right"
        ? ((answer += "R"), (R = a))
        : ((answer += "L"), (L = a));
    } else {
      Math.abs(keypad[a][0] - keypad[L][0]) +
        Math.abs(keypad[a][1] - keypad[L][1]) >
      Math.abs(keypad[a][0] - keypad[R][0]) +
        Math.abs(keypad[a][1] - keypad[R][1])
        ? ((answer += "R"), (R = a))
        : ((answer += "L"), (L = a));
    }
  }
  return answer
}