const email = document.querySelector(".email");
const emailPattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
const error = document.querySelector('.errorEmail')
console.log(error)
email.addEventListener("input", function () {
  if (email.value.match(emailPattern)) {
    email.nextElementSibling.textContent = '';
    email.classList.remove("redBorder");
    email.classList.add("greenBorder");
    error.textContent = "";



  } else {
    document.getElementById("loginBtn").setAttribute("type", "button");

    email.classList.add("redBorder");
    email.classList.remove("greenBorder");
    error.textContent = "Invalid email address";
    console.log(error)
  }
});