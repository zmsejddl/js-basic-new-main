var min, sec;
var timer;

function startTimer() {
  min = document.querySelector("#startMin").value;
  if (min == "") {
    min = 0;
  }
  sec = document.querySelector("#startSec").value;
  if (sec == "") {
    sec = 0;
  }
  timer = setInterval(countTimer, 1000);
}

function countTimer() {
  if (sec != 0) {
    sec--;
    document.querySelector("#display").innerText =
      min + "분 " + sec + "초 남았습니다.";
  } else {
    if (min != 0) {
      min--;
      sec = 59;
    } else {
      clearInterval(timer);
      document.querySelector("#display").innerText = "타이머 종료";
      document.querySelector("#startMin").value = "";
      document.querySelector("#startSec").value = "";
    }
  }
}
