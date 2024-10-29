var r = prompt("원의 반지름은? (cm)");
function Circle(r) {
  var radius = r;
  this.circumference = function () {
    return 2 * Math.PI * radius;
  };
  this.area = function () {
    return Math.PI * radius ** 2;
  };
}
var circle = new Circle(r);

document.write("<p>반지름이 " + r + "cm일 때</p>");
document.write("<p>원의 둘레 : 약 " + circle.circumference() + "cm</p>");
document.write("<p>원의 넓이 : 약 " + circle.area() + "cm2</p>");
