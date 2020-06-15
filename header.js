var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  console.log(n);
  var i;
  var slides = document.getElementsByClassName("mySlideshow");
  if (n > slides.length) {slideIndex = 0}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 1; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
 
}

