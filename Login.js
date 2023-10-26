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

/* Validation password */
let password = document.querySelector(".password");
let passwordError = document.querySelector(".errorPassword");

password.addEventListener("input", function () {
  const trimmedValue = password.value.trim();
  let hasUpperCase = /[A-Z]/.test(trimmedValue);
  let hasLowerCase = /[a-z]/.test(trimmedValue);
  let hasNumber = /\d/.test(trimmedValue);
  let hasSpecialChar = /[^A-Za-z0-9]/.test(trimmedValue);

  if (trimmedValue.length >= 8 && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
    password.classList.remove("redBorder");
    password.classList.add("greenBorder");
    passwordError.textContent = "";
  } else if (trimmedValue.length === 0) {
    password.classList.remove("redBorder");
    password.classList.remove("greenBorder");
    passwordError.textContent = "You didn't enter any password.";
    isValid = false;
  } else {
    password.classList.add("redBorder");
    password.classList.remove("greenBorder");
    let errorMessage = "Password must meet the following criteria:<br/>";
    isValid = false;
    if (trimmedValue.length < 8) {
      errorMessage += " - At least 8 characters long<br/>";
    }
    if (!hasUpperCase) {
      errorMessage += " - At least one uppercase letter<br/>";
    }
    if (!hasLowerCase) {
      errorMessage += " - At least one lowercase letter<br/>";
    }
    if (!hasNumber) {
      errorMessage += " - At least one number<br/>";
    }
    if (!hasSpecialChar) {
      errorMessage += " - At least one special character<br/>";
    }
    passwordError.innerHTML = errorMessage;
  }
});




/* on submit */
    function validateForm() {
      let isValid = true;
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

    
      const trimmedPassword = password.value.trim();
      if (trimmedPassword.length === 0) {
        isValid = false;
        password.classList.add("redBorder");
        password.classList.remove("greenBorder");
        passwordError.textContent = "You didn't enter any password.";
      } else {
        let hasUpperCase = /[A-Z]/.test(trimmedPassword);
        let hasLowerCase = /[a-z]/.test(trimmedPassword);
        let hasNumber = /\d/.test(trimmedPassword);
        let hasSpecialChar = /[^A-Za-z0-9]/.test(trimmedPassword);

        if (trimmedPassword.length < 8 || !hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
          isValid = false;
          password.classList.add("redBorder");
          password.classList.remove("greenBorder");
          let errorMessage = "Password must meet the following criteria:<br/>";
          if (trimmedPassword.length < 8) {
            errorMessage += " - At least 8 characters long<br/>";
          }
          if (!hasUpperCase) {
            errorMessage += " - At least one uppercase letter<br/>";
          }
          if (!hasLowerCase) {
            errorMessage += " - At least one lowercase letter<br/>";
          }
          if (!hasNumber) {
            errorMessage += " - At least one number<br/>";
          }
          if (!hasSpecialChar) {
            errorMessage += " - At least one special character<br/>";
          }
          passwordError.innerHTML = errorMessage;
        }
      }
      if (!isValid) {
        
        event.preventDefault();
      }
    }

    let loginBtn=document.querySelector('#loginBtn')
    loginBtn.addEventListener('click', validateForm);