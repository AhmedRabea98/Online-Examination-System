    function setCookie(key, value, date) {
        var date = new Date(date);
        document.cookie = key + "=" + value + "; expires = " + date;
    }

    function getCookie(key) {
        var date = document.cookie;
        var res = "not found";
        var arr = date.split("; ");
        arr.forEach(function(element){
            var keyAndValue = element.split("=");
            if(keyAndValue[0] === key) {
                res = keyAndValue[1];
            }
        })
        return res;
    }


    function deleteCookie(key) {
        setCookie(key, "asd", "1 / 1 / 1900");
    }

    function checkCookie(key) {
        if(!key) {
            throw "error";
        }

        var message = false;
        var checked = getCookie(key);
        if(checked !== "not found") {
            message = true;
            return message;
        }
    }

    function allCookie() {
        var data = document.cookie;
        var arr = data.split("; ");
        arr.forEach(function(element) {
            var keyAndValue = element.split("=");
           
        })
    }

    allCookie();


    // check log in
    function login(e){
        e.preventDefault();
        var emailValue2 = document.getElementById('e1').value;
        var passwordValue2 = document.getElementById('p1').value;
        // var i = emailArray.indexOf(emailValue2);

        if (emailValue2 == ""){
            spa2.textContent = "email required";
            spa2.style.display = "inline";
            spa2.style.color="red";
            
        }

       else  if(emailValue2 !== getCookie("email")){
            spa2.textContent = "Email does not exist.";
            spa2.style.color="red";
            spa2.style.fontSize="20px"
        }
 
        else if(passwordValue2 ==""){
            spa3.textContent = "required";
            spa3.style.color="red";
            spa3.style.fontSize="20px"
        }
        else if(passwordValue2 !== getCookie("password")){
            spa3.textContent = "password does not match";
            spa3.style.color="red";
            spa3.style.fontSize="20px"
        }
        
        else if(emailValue2 == getCookie("email") && passwordValue2 == getCookie("password")){
            window.location.replace("information.html");
        }
      
    }
    
