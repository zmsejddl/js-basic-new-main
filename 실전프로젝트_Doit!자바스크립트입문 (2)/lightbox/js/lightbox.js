var pics = document.querySelectorAll(".pic");
var lightbox = document.querySelector("#lightbox");
var lightboxImage = document.querySelector("#lightboxImage");

for (var i = 0; i < pics.length; i++) {
  pics[i].addEventListener("click", showLightbox);
}

function showLightbox() {
  var bigLocation = this.getAttribute("data-src");
  lightboxImage.setAttribute("src", bigLocation);
  lightbox.style.display = "block";
}

lightbox.onclick = function () {
  lightbox.style.display = "none";
};
