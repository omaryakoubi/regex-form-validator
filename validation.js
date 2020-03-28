document.getElementById('username').addEventListener('blur', validateUsername);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('password1').addEventListener('blur', validatePassword);
document.getElementById('phoneNumber').addEventListener('blur', validatePhone);
document.getElementById('cardNumber').addEventListener('blur', validateCard);

function validateUsername() {
    const user = document.getElementById('username');
    const val = /^(([a-z])(?=.*[0-9])(?=.{4,12}))/;
    var text;
    if(!val.test(user.value)) {
        text = 'Must be aphanumeric and contains 5-12 characters. Ex: walid123'
    } else {
        text = ''
    }
     document.getElementById("errorUsername").innerHTML = text;
}

function validateEmail() {
    const email = document.getElementById('email');
    const val = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;
    var text;
    if(!val.test(email.value)) {
        text = 'Email must be a valid address, e.g. me@mydomain.com';
    } else {
      text = " "
    }
    document.getElementById("errorEmail").innerHTML = text;
}

function validatePassword() {
    const password = document.getElementById('password1');
    const val = /^(([a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{4,12}))/;
    var text;
    if(!val.test(password.value)) {
        text = 'Must be alphanumeric contain 5-12 characters,must have uppercase \n and lowercase ex: WAlid123';
    } else {
        text = ' '
    }
    document.getElementById("errorPassword").innerHTML = text;
}

function validatePhone() {
    const phone = document.getElementById('phoneNumber');
    const val = /^(00216)\d{8}$/;
    var text;
    if(!val.test(phone.value)) {
        text = 'Must be a valid Tunisia number (13 digit) ex:(0021620200200)'
    } else {
        text = ' '
    }
    document.getElementById("errorPhonenumber").innerHTML = text;
}

function validateCard() {
    const card = document.getElementById('cardNumber');
    const val = /^\(?\d{2}\)?[.-]?\d{2}[.-]?\d{2}$/;
    var text;
    if(!val.test(card.value)) {
        text = 'Must be numeric(6-digit) between every two digit (-) ex: 12-35-89'
    } else {
        text = ' '
    }
    document.getElementById("errorCardnumber").innerHTML = text;
}