//navbar hide background
const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.style.background = "rgb(255 255 255 / 90%)";
        navbar.style.boxShadow = "0 1px 5px rgb(0 0 0 / 20%)";
    } else {
        navbar.style.background = "rgb(255 0 0 / 0%)";
        navbar.style.boxShadow = "0 0 0 rgb(255 0 0 / 0%)";
    }
})

//navbar link
let mainNavLinks = document.querySelectorAll("nav .nav_list nav_item a");
let mainSections = document.querySelectorAll(".container .content article");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

//slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}