// 1단계 click 이벤트 처리하기
var coverImage = document.querySelector("#cover");
coverImage.onclick = function () {
  alert("눌렀습니다.");
};

// 2단계 mouseover, mouseout 이벤트 처리하기
coverImage.onmouseover = function () {
  coverImage.style.border = "5px black solid";
};

coverImage.onmouseout = function () {
  coverImage.style.border = "";
};
