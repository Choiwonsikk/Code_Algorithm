function solution(nums) {
  let obj = {};
  for (let a of nums) {
    obj[a] = 1;
  }
  return nums.length/2 <= Object.keys(obj).length ? nums.length/2 : Object.keys(obj).length
}