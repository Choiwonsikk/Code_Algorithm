function solution(sizes) {
  let maxW = 0; // 가로 최대 길이
  let maxH = 0; // 세로 최대 길이
  for (let [w, h] of sizes) {
    // 가로, 세로 중 큰 값을 최대 길이로 업데이트
    if (w < h) [w, h] = [h, w]; // w가 큰 값을 가리키도록 조정
    maxW = Math.max(maxW, w);
    maxH = Math.max(maxH, h);
  }
  return maxW * maxH;
}