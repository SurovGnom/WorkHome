function sum(startNumber) {
  let count = startNumber;
  return function (number){
      count += number ;
      return count;
  }
}
const sumValue = sum(0);

console.log(sumValue(4)); // 4

console.log(sumValue(6)); // 10

console.log(sumValue(10)); // 20

console.log(sumValue(7)); // 27