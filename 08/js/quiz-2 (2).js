var checks = document.querySelectorAll(".check");
for (let i = 0; i < checks.length; i++) {
  checks[i].addEventListener("click", function () {
    this.parentNode.style.color = "#ccc";
  });
}
