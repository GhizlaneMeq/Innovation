const slides = document.querySelectorAll(".slide");
const autoBtns = document.querySelectorAll(".auto-btn");
let currentSlide = 0;

function slide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = "block";
            autoBtns[i].classList.add("active");
        } else {
            slide.style.display = "none";
            autoBtns[i].classList.remove("active");
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    slide(currentSlide);
}

function autoSlide() {
    setInterval(nextSlide, 3000);
}
autoSlide();
slide(currentSlide);

const questions = document.querySelectorAll(".whyUs .question");
const ansewrs = document.querySelectorAll(".whyUs .answer");
const next= document.getElementById('next');
const prev =document.getElementById('prev');

questions.forEach((el) => {
  el.addEventListener("click", () => {
    questions.forEach((it) => {
      it.classList.remove("active");
    });
    el.classList.add("active");
    ansewrs.forEach((item) => {
      item.classList.remove("show");
    });
    const idQuestion = el.getAttribute("id");
    document.querySelector(`#answer${idQuestion}`).classList.add("show");
  });

  


});
