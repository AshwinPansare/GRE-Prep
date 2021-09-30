window.onload = function(){
const login = document.getElementById("login");
const signup = document.getElementById("sign-up");
document.querySelector("#login .form-change").onclick = function(){
    login.classList.add("hide");
    signup.classList.remove("hide");
}
document.querySelector("#sign-up .form-change").onclick = function(){
    signup.classList.add("hide");
    login.classList.remove("hide");
}
const fname = document.getElementById("fname");
const email = document.getElementById("s_email");
const pass = document.getElementById("s_pass");
const cpass = document.getElementById("s_cpass");
const reg = document.getElementById("register");
var errors=0;
var perr=0;
var err = document.querySelectorAll("#sign-up .error");
reg.onclick=function(){
    checkname();
    checkemail();
    checkpass();
    if(perr==0){
    confirmpass();
    }
    if(errors==0){
        alert("Registered Successfully");
    }
}

function checkname(){
    if(fname.value.trim()=="")
    {
        err[0].innerHTML = "First name can't be empty";
        err[0].classList.remove("hide");
        document.querySelector("#n .fail").classList.remove("hide");
        errors+=1;
    }
    else{
        document.querySelector("#n .fail").classList.add("hide");
        document.querySelector("#n .success").classList.remove("hide");
        err[0].classList.add("hide");
    }
}
function checkemail(){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        document.querySelector("#e .fail").classList.add("hide");
        document.querySelector("#e .success").classList.remove("hide");
        err[1].classList.add("hide");
    }
    else{
        let err = document.querySelectorAll("#sign-up .error");
        err[1].innerHTML = "Invalid Email-id";
        err[1].classList.remove("hide");
        document.querySelector("#e .fail").classList.remove("hide");
        errors+=1;
    }
}
function checkpass(){
    let password = pass.value.trim();
    if(password.length<6){
        let err = document.querySelectorAll("#sign-up .error");
        err[2].innerHTML = "Password cannot be less than 6 characters";
        err[2].classList.remove("hide");
        document.querySelector("#p .fail").classList.remove("hide");
        errors+=1;
        perr+=1;
    }
    else{
        document.querySelector("#p .fail").classList.add("hide");
        document.querySelector("#p .success").classList.remove("hide");
        err[2].classList.add("hide");
    }
}
function confirmpass(){
    let password = pass.value.trim();
    let npassword = cpass.value.trim();
    if(password!=npassword){
        let err = document.querySelectorAll("#sign-up .error");
        err[3].innerHTML = "Passwords do not match";
        err[3].classList.remove("hide");
        document.querySelector("#cp .fail").classList.remove("hide");
        errors+=1;
    }
    else{
        document.querySelector("#cp .fail").classList.add("hide");
        document.querySelector("#cp .success").classList.remove("hide");
        err[3].classList.add("hide");
    }
}
}