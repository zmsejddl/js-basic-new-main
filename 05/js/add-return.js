var num1 = parseInt(prompt("첫 번째 숫자 : "));
var num2 = parseInt(prompt("두 번째 숫자 : "));
var result = addNumber(num1, num2);
alert("두 수를 더한 값은 " + result + "입니다.");

function addNumber(a, b) {
  var sum = a + b;
  return sum;
}

/*
1. num1 변수와 num2 변수에 값을 저장합니다.
2. num1과 num2 값을 가지고 addNumber() 함수를 호출합니다.
3. 함수 선언부로 넘어와 함수를 실행하는데, num1 값은 a 변수로, num2 값은 b 변수로 넘겨집니다.
4. a 값과 b 값을 더해 sum 변수에 저장합니다.
5. 결과값 sum을 반환합니다.
6. 반환된 값을 변수 result에 저장합니다.
7. result 변수값을 화면에 표시합니다.
*/
