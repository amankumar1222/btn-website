console.log('AASAN HAI || Responsible');

let burger = document.getElementById('burger')
let closeI = document.getElementById('close')
let  navlist = document.getElementById('navlist')

burger.addEventListener('click', ()=> {
  navlist.style.display = 'block';
  burger.style.display = 'none';
  closeI.style.display = 'block';
})
closeI.addEventListener('click', ()=>{
  closeI.style.display = 'none';
  navlist.style.display = 'none';
  burger.style.display = 'block';
   
})


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("container");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}













let testIndex = 0;
testSlides();
function testSlides() {
  let i;
  let slides = document.getElementsByClassName("myTest");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  testIndex++;
  if (testIndex > slides.length) {testIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(testSlides, 2000); // Change image every 2 seconds
}



