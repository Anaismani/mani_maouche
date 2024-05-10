
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000); // Change d'image toutes les 3 secondes

let title = document.getElementsByClassName("Res");

if (window.location.href.indexOf("index.html") === -1) {
    title[0].addEventListener("click", () => {
        window.location.href = "../index.html";
    })
}else {
    title[0].addEventListener("click", () => {
        window.location.reload();
    })
}
