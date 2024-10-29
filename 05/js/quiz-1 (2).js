function sumMulti(a, b) {
  var sum = 0;
  if (a == b) {
    sum = a * b;
  } else if (a != b) {
    sum = a + b;
  }
  return sum;
}
console.log(sumMulti(5, 10));
console.log(sumMulti(10, 10));
