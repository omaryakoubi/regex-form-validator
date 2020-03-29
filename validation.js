document.getElementById("username").addEventListener('blur',checkUserName)
document.getElementById("email").addEventListener('blur',checkEmail)
document.getElementById("password").addEventListener('blur',checkPassword)
document.getElementById("phoneNumber").addEventListener('blur',checkPhone)
document.getElementById("cardNumber").addEventListener('blur',checkCardNumber)


function checkUserName(){
    var paragraph = document.getElementById("errorUsername")
    var user = document.getElementById('username');
    var nameRegex = /^[a-z0-9]{5,12}$/i;
    
    if(nameRegex.test(user.value)){
        user.style.border = " solid green";
        paragraph.style.visibility = "hidden";
    }else{
        user.style.border = "solid red";
        paragraph.style.visibility = "visible";
    }
};

function checkEmail(){
    var paragraph = document.getElementById("errorEmail")
    var email = document.getElementById('email');
    var emailRegex = /^[a-z\d_.]{2,}@[a-z]{3,}.[a-z]{2,3}$/;
    
    if(emailRegex.test(email.value)){
        email.style.border = " solid green"
        paragraph.Style.visibility = "hidden" 
    }else{
        email.style.border = "solid red"
        paragraph.Style.visibility = "visible" 
    }
};


function checkPassword(){
    var paragraph = document.getElementById("errorPassword")
    var password = document.getElementById('password');
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    if(passwordRegex.test(password.value)){
        password.style.border = " solid green"
        paragraph.Style.visibility = "hidden" 
    } else{
        password.style.border = "solid red"
        paragraph.Style.visibility = "visible" 
    }
} ;

function checkPhone(){
    var paragraph = document.getElementById("errorPhonenumber")
    var phone = document.getElementById("phoneNumber");
    var phoneRegex = /^00216[0-9]{8}$/;
    
    if(phoneRegex.test(phone.value)){
        phone.style.border = " solid green"
        paragraph.Style.visibility = "hidden" 
    } else {
        phone.style.border = "solid red"
        paragraph.Style.visibility = "visible" 
    }
};

function checkCardNumber(){
    var paragraph = document.getElementById("errorCardnumber")
    var cardNumber = document.getElementById('cardNumber');
    var cardNumberRegex = /^\d{2}\-\d{2}\-\d{2}$/;
    
    if(cardNumberRegex.test(cardNumber.value)){
        cardNumber.style.border = "solid green"
        paragraph.style.visibility = "hidden" 
    } else{ 
        cardNumber.style.border = "solid red"
        paragraph.style.visibility = "visible" 
    }
};

