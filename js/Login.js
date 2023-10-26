/* validation email */
const email = document.querySelector(".email");
const emailPattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
const error = document.querySelector(".errorEmail");
console.log(error);
email.addEventListener("input", function () {
  if (email.value.match(emailPattern)) {
    email.classList.remove("redBorder");
    email.classList.add("greenBorder");
    error.textContent = "";
  } else {
    document.getElementById("loginBtn").setAttribute("type", "button");

    email.classList.add("redBorder");
    email.classList.remove("greenBorder");
    error.textContent = "Invalid email address";
    console.log(error);
  }
});

/* validation password */

const password = document.querySelector(".password");
const errorPassword = document.querySelector(".errorPassword");

password.addEventListener("input", function () {
  if (password.value.lenght <= 8) {
    password.classList.remove("redBorder");
    password.classList.add("greenBorder");
    errorPassword.textContent = "";
  } else {
    document.getElementById("loginBtn").setAttribute("type", "button");

    password.classList.add("redBorder");
    password.classList.remove("greenBorder");
    errorPassword.textContent = "Invalid email address";

    console.log(errorPassword);
  }
});
