let slideIndex = 0; // Start at 0 for easier math

function plusSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    slideIndex += n;

    // Loop back logic
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    updateSlideshow();
}

function currentSlide(n) {
    slideIndex = n - 1;
    updateSlideshow();
}

function updateSlideshow() {
    const wrapper = document.getElementById("slidesWrapper");
    const dots = document.getElementsByClassName("dot");

    // Move the wrapper by -100% for each slide
    wrapper.style.transform = `translateX(${-slideIndex * 100}%)`;

    // Update Dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
}