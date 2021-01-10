let emailError = "Enter e-mail";
let passError = "Enter password";
let wrongEmailError = "Your email does not match our records";
let wrongPassError = "Enter Correct Password ";

let userEmail = "xyz@random.com";
let userPass = 12345678;

function emailCheck(){
    let email = document.getElementById('email').value;
    
    if (email == ""){
        document.querySelector('#errorEmail').innerHTML = emailError;
        document.querySelector('input').style.borderColor = "red";
        return false;
    }

    else if( email == userEmail){
        return true;
    }

    else if( email != userEmail){
        document.querySelector('#errorEmail').innerHTML = wrongEmailError;
        document.querySelector('input').style.borderColor = "red";
        return false;
    }

    else {
        return true;
    }
}


function passCheck(){
    let password = document.getElementById('password').value;

    if ( password == ""){
        document.querySelector('#errorPassword').innerHTML = passError;
        document.querySelector('input').style.borderColor = "red";
        return false;
    }

    else if( password == userPass){
        return true;
    }

    else if( password != userPass){
        document.querySelector('#errorPassword').innerHTML = wrongPassError;
        document.querySelector('input').style.borderColor = "red";
        return false;
    }

    else {
        return true;
    }
}