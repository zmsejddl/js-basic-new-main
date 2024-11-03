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
