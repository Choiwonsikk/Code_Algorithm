function solution(a, b) {
  const DAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const START = [5, 1, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
    
  return DAY[(b - 1 + START[a - 1]) % 7]
}