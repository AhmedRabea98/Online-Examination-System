var userName = document.getElementById("userName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById('password2');
var reg1 = /^[a-zA-Z]*$/;
var reg2 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
var reg3 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


var emailArray=[];
var passwordArray=[];
var nameArray = [];

var spa1 = document.getElementById("spa1");
var spa2 = document.getElementById("spa2");
var spa3 = document.getElementById("spa3");
var spa4 = document.getElementById("spa4");

function validation(e) {
   e.preventDefault();
    var nameValue = userName.value;
    var emailValue = email.value;
    var passwordValue = password.value;
    var password2Value = password2.value;
  
    if (nameValue === "") {
        spa1.textContent = " required";
        spa1.style.display = "inline";
        spa1.style.color="red";
        
    }
    else if (!reg1.test(nameValue)) {
        spa1.textContent = "must be string";
        spa1.style.display = "inline";
        spa1.style.color="red";
    }

    else {
        spa1.style.display = "none";
        
    }
  
    if (emailValue === "") {
        spa2.textContent = "email required";
        spa2.style.display = "inline";
        spa2.style.color="red";
    }
    else if (!reg3.test(emailValue)) {
        spa2.textContent = "must be email";
        spa2.style.display = "inline";
        spa2.style.color="red";
    }

    else {
        spa2.style.display = "none";
        
    }
    if (passwordValue === "") {
        spa3.textContent = " required";
        spa3.style.display = "inline";
        spa3.style.color="red";
    }
    else if (!reg2.test(passwordValue)) {
        spa3.textContent = "Contain at least[ 8 characters -  1 number - 1 lowercase character (a-z) -1 uppercase character (A-Z)] ";
        spa3.style.display = "inline";
        spa3.style.color="red";
    }
 
    else {
        spa3.style.display = "none";
    }

    
    if (password2Value == ""){
        spa4.textContent = " required";
        spa4.style.display = "inline";
        spa4.style.color="red";
    }
    else if(passwordValue != password2Value){
        spa4.textContent = "Password don't match retype your Password.";
        spa4.style.display ="inline";
        spa4.style.color ="red";
    }
    else{
        spa4.style.display = "none";
        window.location.replace("login.html");
        setCookie("userName", nameValue, "10/10/2022");
        setCookie("email", emailValue, "10/10/2022");
        setCookie("password", passwordValue, "10/10/2022");
        setCookie("password2", password2Value, "10/10/2022");
        
    }

}






