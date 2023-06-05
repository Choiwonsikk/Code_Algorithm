function solution(order) {
    let result = 0
for(a of order){
  a.search("cafelatte")>=0 ? result += 5000 : result += 4500
}
    return result
}