function solution(nums) {
  let arr = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        arr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  let count = arr.length;
  for (let l = 0; l < arr.length; l++) {
    for (let a = 2; a <= arr[l] / 2; a++) {
      if (arr[l] % a === 0) {
        count--;
        break;
      }
    }
  }
  return count
}