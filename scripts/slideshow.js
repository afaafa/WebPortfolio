//slideshow
document.addEventListener("DOMContentLoaded", () => {

    let slides = document.querySelectorAll(".slider-container .slide");
    let currentSlide = 0;
    const nextButton = document.querySelector(".prev");
    const prevButton = document.querySelector(".next");
  
    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].className = 'slide showing';
    }
  
    function prevSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide - 1) % slides.length;
  
        if (currentSlide == -1) {
            currentSlide = slides.length - 1;
        }
        slides[currentSlide].className = 'slide showing';
    }
  
    nextButton.addEventListener("click", () => {
        nextSlide();
    });
    prevButton.addEventListener("click", () => {
        prevSlide();
    });
  });