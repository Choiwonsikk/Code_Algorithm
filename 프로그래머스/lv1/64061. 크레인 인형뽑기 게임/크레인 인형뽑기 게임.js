function solution(board, moves) {
  const basket = [];
  let result = 0;
  for (let moves_value of moves) {
    for (let board_value of board) {
      if (board_value[moves_value - 1]) {
        board_value[moves_value - 1] === basket[basket.length - 1]
          ? (basket.pop(), (board_value[moves_value - 1] = 0), (result += 2))
          : (basket.push(board_value[moves_value - 1]),
            (board_value[moves_value - 1] = 0));
        break;
      } else if ((board_value[moves_value - 1] = 0)) {
        continue;
      }
    }
  }
  return result
}
/*
board는 2차원 배열
board[n][m]에서 
n은 높이를 나타내는 index이고 m은 가로 index이다
4311324
moves[] 배열은 가로 index에서 가져감
moves[0]이 1일 때
1. board[0~n까지][1] 탐색
2. 0이 아닌 값이 들어가 있을 때, 바구니 배열 길이가 4 이하 일 때 조건을 만족하면 - 
    board[][1]의 값을 바구니 배열 제일 위의 값과 비교
2-1. 값이 같다면 바구니 배열 제일 위의 값을 제거, board[][1]에 값을 0으로 초기화
2-2. 값이 다르다면 바구니 배열에 추가
3. 만족하지 않는다면 Game Over

바구니 배열 선언해야함 바구니 배열 길이는 5이고 순서대로 들어감
*/