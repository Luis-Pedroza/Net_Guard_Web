document.addEventListener("DOMContentLoaded", function() {
    const slide = document.querySelector(".slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentPosition = 0;
    const slideInterval = 5000;
    const numSlides = 5;

    function moveToNextSlide() {
        currentPosition -= 100;
        if (currentPosition < -100 * (numSlides - 1)) {
            currentPosition = 0;
        }
        slide.style.transform = `translateX(${currentPosition}%)`;
    }

    function moveToPreviousSlide() {
        currentPosition += 100;
        if (currentPosition > 0) {
            currentPosition = -100 * (numSlides - 1);
        }
        slide.style.transform = `translateX(${currentPosition}%)`;
    }

    setInterval(moveToNextSlide, slideInterval);

    prevButton.addEventListener("click", moveToPreviousSlide);
    nextButton.addEventListener("click", moveToNextSlide);
});
