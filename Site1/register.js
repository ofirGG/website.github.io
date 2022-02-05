function check() {
    var res = true;
    res = user() && res;
    res = mail() && res;
    res = pass() && res;
    res = confirmPass() && res;
    res = phone() && res;
    res = private() && res;
    res = last() && res;
    return res;
}
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/;
var spacialChar = /[!@#$%^&*()-+]/;
var allSigns = /^[0-9a-zA-Z\!\#\$\%\<\>\(\)\*\+\-_\,\.\;\:\/\\\+\=\[\]\@]+$/;
var hebrew = /[\u0590-\u05FF]/;
var checkNumber = /^0{1}(2|3|4|6|8|9|5[2-8]|73)-[1-9]\d{6}$/;
var checkMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
function user() {
    var user = document.getElementById("username");
    var msg = document.getElementById("usernamemessage");
    if (!(user.value[0].match(lowerCaseLetters) || user.value[0].match(upperCaseLetters))) {
        msg.innerHTML = "you need to start with english letter";
        return false;
    }
    if (user.value.length < 6) {
        msg.innerHTML = "you need above 6 chracters";
        return false;
    }
    if (!user.value.match(allSigns)) {
        msg.innerHTML = "only english letters and special chars";
        return false;
    }
    msg.innerHTML = "";
    return true;
}
function pass() {
    var psw = document.getElementById("password");
    var msgPsw = document.getElementById("passwordmessage");
    if (psw.value.length < 6) {
        msgPsw.innerHTML = "you need above 6 chracters";
        return false;
    }
    if (psw.value.length > 12) {
        msgPsw.innerHTML = "you need below 12 chracters";
        return false;
    }
    if (!numbers.test(psw.value)) {
        msgPsw.innerHTML = "must contain number";
        return false;
    }
    if (!lowerCaseLetters.test(psw.value)) {
        msgPsw.innerHTML = "must contain lower case letter";
        return false;
    }
    if (!upperCaseLetters.test(psw.value)) {
        msgPsw.innerHTML = "must contain capital letter";
        return false;
    }
    if (!psw.value.match(allSigns)) {
        msgPsw.innerHTML = "only english letters and special chars";
        return false;
    }
    for (i = 0; i < psw.value.lenght - 2; i++) {
        if (psw.value[i]==psw.value[i + 1] && psw.value[i]==psw.value[i + 2]) {
            msgPsw.innerHTML = "no 3 same chars in row";
            return false;
        }
    }
    msgPsw.innerHTML = "";
    return true;
}
function confirmPass() {
    var psw = document.getElementById("password");
    var confirm = document.getElementById("confirm");
    var msgConfirm = document.getElementById("confirmmessage");
    if (psw.value.length != confirm.value.length) {
        msgConfirm.innerHTML = "both password does not match";
        return false;
    }
        for (i = 0; i < psw.value.lenght; i++) {
            if (psw.value[i]==psw.value[i]) {
                msgConfirm.innerHTML = "both password does not match";
                return false;
            }
        }
    msgPsw.innerHTML = "";
    return true;
}
function private() {
    var private = document.getElementById("name");
    var msg = document.getElementById("namemessage");
    if (private.value.length < 2) {
        msg.innerHTML = "at least 2 characters";
        return false;
    }
    if ((lowerCaseLetters.test(private.value) || upperCaseLetters.test(private.value)) && (hebrew.test(private.value))) {
        msg.innerHTML = "only english or hebrew";
        return false;
    }
    msg.innerHTML = "";
    return true;
}
function last() {
    var last = document.getElementById("last");
    var msg = document.getElementById("lastmessage");
    if (last.value.length < 2) {
        msg.innerHTML = "at least 2 characters";
        return false;
    }
    if ((lowerCaseLetters.test(last.value) || upperCaseLetters.test(last.value)) && (hebrew.test(last.value))) {
        msg.innerHTML = "only english or hebrew";
        return false;
    }
    msg.innerHTML = "";
    return true;
}
function phone() {
    var phone = document.getElementById("phone");
    var msg = document.getElementById("phonemessage");
    if (!checkNumber.test(phone.value)) {
        msg.innerHTML = "phone number is illegal";
        return false;
    }
    msg.innerHTML = "";
    return true;
}
function mail() {
    var mail = document.getElementById("mail");
    var msg = document.getElementById("mailmessage");
    if (!checkMail.test(mail.value)) {
        msg.innerHTML = "email is illegal";
        return false;
    }
    msg.innerHTML = "";
    return true;
}