const slider = document.querySelector(".slider__inner");
const slides = document.querySelectorAll(".slider__contents");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {

    slider.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {
        currentSlide = index;
        showSlide(currentSlide);
    });

});

function nextSlide() {

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

setInterval(nextSlide, 4000);