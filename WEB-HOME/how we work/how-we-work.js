const track = document.getElementById("sliderTrack");
const dots = document.querySelectorAll(".adot");

let currentIndex = 0;

function updateSlider() {

    track.style.transform = `translateX(-${currentIndex * 25}%)`;

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[currentIndex].classList.add("active");
}

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentIndex = index;

        updateSlider();

    });

});