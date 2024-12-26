const slides = document.querySelector('.slides');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let index = 0;

function showSlide(i) {
    index = i;
    if (index >= slides.children.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.children.length - 1;
    }
    slides.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener('click', () => showSlide(index + 1));
prev.addEventListener('click', () => showSlide(index - 1));
