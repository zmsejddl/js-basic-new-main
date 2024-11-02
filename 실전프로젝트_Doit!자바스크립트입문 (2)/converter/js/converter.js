var sUnit = document.querySelector("#s-unit");
var tUnit = document.querySelector("#t-unit");
var cToF = true;

var source = document.querySelector("#s-value");
var target = document.querySelector("#t-value");

function exUnit() {
  source.value = "";
  target.value = "";

  if (cToF) {
    cToF = false;
    sUnit.innerHTML = "&#8457";
    tUnit.innerHTML = "&#8451";
  } else {
    cToF = true;
    sUnit.innerHTML = "&#8451";
    tUnit.innerHTML = "&#8457";
  }
}
