function EmailValidation() {
    let email = document.getElementById('email');
    let emailPattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

    if (email.value.match(emailPattern)) {
        email.classList.add('greenBorder');
        email.classList.remove('redBorder');
        console.log(email);
    }
    else {
        document.getElementById('loginBtn').setAttribute('type', 'button')
        email.classList.add('redBorder');
        email.classList.remove('greenBorder');
        document.getElementById('errorEmail').style.display = "block";

    }
}

function PasswordValidation() {
    let password = document.getElementById('password');
    let passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ .%^&*-]).{8,}$/;

    if (password.value.match(passwordPattern)) {
        password.classList.add("greenBorder");
        password.classList.remove("redBorder");
    }
    else {
        password.classList.add("redBorder");
        password.classList.remove("greenBorder");
        document.getElementById('errorPassword').style.display = "block";


    }
}

function NameValidation() {
    let name = document.getElementById('name');
    let namePattern = /^[a-z0-9_-]{3,15}$/;
    if (name.value.match(namePattern)) {
        name.classList.add('greenBorder');
        name.classList.remove('redBorder');
    }
    else {
        document.getElementById('loginBtn').setAttribute('type', 'button')
        name.classList.add('redBorder');
        name.classList.remove('greenBorder');
        document.getElementById('errorEmail').style.display = "block";
    }
}