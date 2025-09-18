const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

const btnAvancar = document.querySelector(".avancar");
const btnVoltar = document.querySelector(".voltar");

let currentIndex = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

btnAvancar.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
});

btnVoltar.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
});
