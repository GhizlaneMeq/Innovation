/* nqv */

document.querySelector(".bars").addEventListener("click", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
    document.querySelector(".bars").classList.toggle("active");
});



/* footer */

const titleElements = document.querySelectorAll(".clmn h1, .bx h1");

titleElements.forEach((title) => {
    title.addEventListener("click", () => {
        const content = title.nextElementSibling;
        content.style.display =
            content.style.display === "block" ? "none" : "block";
    });
});