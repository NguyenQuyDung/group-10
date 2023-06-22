var header = document.querySelector("header");
//console.log(header);
var vitri = 0;
window.addEventListener("scroll", function () {
  //
  // var Xpos = document.body.scrollTop;
  // console.log(Ypos);
  // if (Xpos) {
  //   header.classList.remove("site-header-none");
  // } else{
  //   header.classList.add("site-header-none");
  // }

  //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //   if (scrollTop > vitri) {
  //     header.style.top = "-80px";
  //   } else {
  //     header.style.top = "0";
  //   }
  //   vitri = scrollTop;
  var Ypos = window.scrollY;
  if (Ypos > vitri) {
    header.style.top = "-80px";
    //header.classList.add("site-header-none");
  } else {
    header.style.top = "0";
    //header.classList.remove("site-header-none");
  }
  vitri = Ypos;
});

// xu ly js
var slide_index = 1;
slidesDisplay(slide_index);
function nextSlide(n) {
  slidesDisplay(slide_index += n);
}
function currentSlide(n) {
  slidesDisplay(slide_index = n);
}
function slidesDisplay(n) {
  var slides = document.getElementsByClassName("slideshow");

  if (n > slides.length) {
    slide_index = 1;
  } else if (n < 1) {
    slide_index = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
}

