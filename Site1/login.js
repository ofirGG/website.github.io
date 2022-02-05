function check() {
    var res = true;
    res = user() && res;
    res = pass() && res;
    return res;
}
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/;
var spacialChar = /[!@#$%^&*()-+]/;
var allSigns = /^[0-9a-zA-Z\!\#\$\%\<\>\(\)\*\+\-_\,\.\;\:\/\\\+\=\[\]\@]+$/;
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
    for (let i = 0; i < psw.value.lenght - 2; i++) {
        if (psw.value[i] == psw.value[i + 1] && psw.value[i] == psw.value[i + 2]) {
            msgPsw.innerHTML = "no 3 same chars in row";
            return false;
        }
    }
    msgPsw.innerHTML = "";
    return true;
}
function reset() {
    var psw = document.getElementById("password");
    var msgPsw = document.getElementById("passwordmessage");
    var user = document.getElementById("username");
    var msg = document.getElementById("usernamemessage");
    psw.innerHTML = "";
    msg.innerHTML = "";
    user.innerHTML = "";
    msgPsw.innerHTML = "";
}