"use strict!";

var coverIndex = 0;
showSlideshow();

function showSlideshow() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
//Math.floor(Math.random() * 4);
  coverIndex++;
  if (coverIndex > slides.length) {coverIndex =1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[coverIndex-1].style.display = "block";  
  console.log(coverIndex);
  dots[coverIndex-1].className += " active";
  setTimeout(showSlideshow, 3000);
  //document.addEventListener(type,reset)
}