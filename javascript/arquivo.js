function showSlides(slideContainerId) {
    let slideIndex = 0;
    const slides = document.querySelectorAll(`#${slideContainerId} .slide`);
    function displaySlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(displaySlides, 5000); // Muda a cada 5 segundos
    }
    displaySlides();
}

showSlides('slide1');
showSlides('slide2');
showSlides('slide3');
