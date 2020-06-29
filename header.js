var slideIndex = 1;
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
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
 
}

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlideshow");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setInterval(showSlides, 3000); // Change image every 2 seconds
// }

//Get the button:
mybutton = document.getElementById("myBtn");

// show button after user scrolls down page
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the page
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
