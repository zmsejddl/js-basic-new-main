var price = 24000;

var side = document.querySelectorAll(".checkbx");
var total = document.querySelector("#total");
total.value = price + "원";

for (var i = 0; i < side.length; i++) {
  side[i].onclick = function () {
    if (this.checked == true) {
      price += parseInt(this.value);
    } else {
      price -= parseInt(this.value);
    }
    total.value = price + "원";
  };
}
