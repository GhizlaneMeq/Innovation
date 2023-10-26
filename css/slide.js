const form = document.querySelector("#account-form");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const pass = document.querySelector("#password");
const co_pass = document.querySelector("#confirm");
const msg1 = document.querySelector(".err-msg");


form.addEventListener('submit' , (event) =>{
    
    validateForm();
    if(isFormValid() == true){
        form.submit();
        
    }
    else{
        event.preventDefault();
    }
});


function isFormValid(){
    const input = form.querySelectorAll(".form");
    let res = true;
    input.forEach((container)=>{
        if(container.classList.contains('error')){
            res = false;
        }
    });

    return res;
}

function validateForm() {
    //username
    if(username.value.trim()==''){
        setError(username);
        username.nextElementSibling.textContent = "name can't be empty";
    }
    else if(username.value.trim().length < 5 || username.value.trim().length > 15 ){
        setError(username);
        username.nextElementSibling.textContent = "name can't be less than 5 characters";
    }
    else{
        setSuccess(username);
        save();
    }

    //email
    if(email.value.trim()==''){
        setError(email);
        email.nextElementSibling.textContent = "email can't be empty";
    }
    else if(isEmailValid(email.value)){
        setSuccess(email);
        saveEmail();
    }
    else{
        setError(email);
        email.nextElementSibling.textContent = "entre a valid email";
    }

    //password
    if(pass.value.trim()==''){
        setError(pass);
        pass.nextElementSibling.textContent = "password can't be empty";
    }
    else if(pass.value.trim().length < 6 || pass.value.trim().length > 25 ){
        setError(pass);
        pass.nextElementSibling.textContent = "password can't be less than 6 characters";
    }
    else{
        setSuccess(pass);
        savePass();
    }

    // //co-password

    if(co_pass.value.trim()==''){
        setError(co_pass);
        co_pass.nextElementSibling.textContent = "confirm password can't be empty";

    }
    else if(co_pass.value !== pass.value){
        setError(co_pass);
        co_pass.nextElementSibling.textContent = "not muching";

    }
    else{
        setSuccess(co_pass);
    }
}

function setError(element){

    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');


}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email){
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(email);
}



function save(){
    localStorage.setItem("data",username.value);
}

function saveEmail(){
    localStorage.setItem("dataemail" , email.value);
}

function savePass(){
    localStorage.setItem("datapass" , pass.value);
}



