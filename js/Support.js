/* Validation name */
let username = document.querySelector('.name');
const nameError = document.querySelector('.errorName');
var isValid = true;
username.addEventListener('input', function () {
  const trimmedValue = username.value.trim();
  if (trimmedValue.length >= 3 && trimmedValue.length <= 30) {
    username.classList.remove("redBorder");
    username.classList.add("greenBorder");
    nameError.textContent = "";
  } else if (trimmedValue.length === 0) {
    username.classList.add("redBorder");
    username.classList.remove("greenBorder");
    nameError.textContent = "You didn't enter any value.";
    isValid = false;
  } else {
    username.classList.add("redBorder");
    username.classList.remove("greenBorder");
    nameError.textContent = "Name must be between 3 and 30 characters.";
    isValid = false;
  }
});

/* Validation email */
let email = document.querySelector(".email");
const emailPattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
const emailError = document.querySelector(".errorEmail");

email.addEventListener("input", function () {
  if (email.value.match(emailPattern)) {
    email.classList.remove("redBorder");
    email.classList.add("greenBorder");
    emailError.textContent = "";
  } else if (email.value.length === 0) {
    email.classList.remove("redBorder");
    email.classList.remove("greenBorder");
    emailError.textContent = "You didn't enter any email address.";
    isValid = false;
  } else {
    email.classList.add("redBorder");
    email.classList.remove("greenBorder");
    emailError.textContent = "Invalid email address";
    isValid = false;
  }
});




/* on submit */
    function validateForm() {
      let isValid = true;

      const trimmedName = username.value.trim();
      if (trimmedName.length === 0) {
        isValid = false;
        username.classList.add("redBorder");
        username.classList.remove("greenBorder");
        nameError.textContent = "You didn't enter any value.";
      } else if (trimmedName.length < 3 || trimmedName.length > 30) {
        isValid = false;
        username.classList.add("redBorder");
        username.classList.remove("greenBorder");
        nameError.textContent = "Name must be between 3 and 30 characters.";
      }

    
      const trimmedEmail = email.value.trim();
      if (trimmedEmail.length === 0) {
        isValid = false;
        email.classList.add("redBorder");
        email.classList.remove("greenBorder");
        emailError.textContent = "You didn't enter any email address.";
      } else if (!email.value.match(emailPattern)) {
        isValid = false;
        email.classList.add("redBorder");
        email.classList.remove("greenBorder");
        emailError.textContent = "Invalid email address.";
      }
      if (!isValid) {
        
        event.preventDefault();
      }
    }

    let cntctBtn=document.querySelector('#cntctBtn')
    cntctBtn.addEventListener('click', validateForm);