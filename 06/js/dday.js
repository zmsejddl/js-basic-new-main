// 1단계 며칠 만났는지 알아보기
var now = new Date(); // 오늘 날짜 정보를 Date 객체의 인스턴스 now 객체로 만듭니다.
var firstDay = new Date("2018-03-23"); // 처음 만난 날의 날짜 정보를 firstDay 객체로 만듭니다.
var toNow = now.getTime(); // 오늘 날짜를 밀리초로 바꿈
var toFirst = firstDay.getTime(); //처음 만난 날을 밀리초로 바꿈
var passedTime = toNow - toFirst; //처음 만난 날과 오늘 사이의 차이 (밀리초 값)
var passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24)); //밀리초를 날짜 수로 변환한 후 반올림
document.querySelector("#accent").innerHTML = passedDay + "일"; // #accent 영역에 표시

// 2단계 100일 후 날짜 계산하기
// var future = toFirst + 100 * (1000 * 60 * 60 * 24); // 처음 만난 날에 100일을 더합니다.
// var someday = new Date(future); // future 값을 사용해 Date 객체의 인스턴스를 만듭니다.
// var year = someday.getFullYear(); // '연도'를 가져와 year 변수에 저장합니다.
// var month = someday.getMonth() + 1; // '월'을 가져와 month 변수에 저장합니다.
// var date = someday.getDate(); // '일'을 가져와 date 변수에 저장합니다.
// document.querySelector("#date100").innerText =
//   year + "년 " + month + "월 " + date + "일";
// future = toFirst + 200 * (1000 * 60 * 60 * 24);
// var someday = new Date(future);
// var year = someday.getFullYear();
// var month = someday.getMonth() + 1;
// var date = someday.getDate();
// document.querySelector("#date200").innerText =
//   year + "년 " + month + "월 " + date + "일";

// 3단계 calcDate() 함수 선언하기
function calcDate(days) {
  var future = toFirst + days * (1000 * 60 * 60 * 24);
  var someday = new Date(future);
  var year = someday.getFullYear();
  var month = someday.getMonth() + 1;
  var date = someday.getDate();
  document.querySelector("#date" + days).innerText =
    year + "년 " + month + "월 " + date + "일";
  future = toFirst + 200 * (1000 * 60 * 60 * 24);
}

calcDate(100); // 100일 기념일을 계산해서 표시합니다.
calcDate(200); // 200일 기념일을 계산해서 표시합니다.
calcDate(365); // 1년 기념일을 계산해서 표시합니다.
calcDate(500); // 500일 기념일을 계산해서 표시합니다.
