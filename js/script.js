document.getElementById("button").onclick = function (e) {
    let len = window.prompt("please enter the length of password (8 to 128 chars)", "");
    len = Number(len);
    while(len && (len < 8 || len > 128)) {
        console.error("Invalid given length");
        window.alert("Please input a value between 8 and 128");
        len = window.prompt("please enter the length of password (8 to 128 chars)", "");
    }
    let type = "";
    len ? type = window.prompt("what type of chars you want in the password?\n( uppercase, lowercase, numeric, specialCharacter )", "") : type = null;
    while(type && (type.search("uppercase") === -1 && type.search("lowercase") === -1 && type.search("numeric") === -1 && type.search("specialCharacter") === -1)) {
        console.error("Invalid given Password Type");
        window.alert("Please input at least one valid password type");
        type = window.prompt("what type of chars you want in the password?\n( uppercase, lowercase, numeric, specialCharacter )", "");
    }
    (type && !(type.search("uppercase") === -1 && type.search("lowercase") === -1 && type.search("numeric") === -1 && type.search("specialCharacter") === -1)) ? generatePassword(len, type) : null;
};

function generatePassword (len, type){
    let passwordPatt = passWordPatt(type);
    let pass = "";
    let index;
    for (let i=0; i<len; i++) {
        index = Math.floor(Math.random() * passwordPatt.length);
        pass += passwordPatt[index];
    }
    document.getElementById("password").innerHTML = pass;
}

function passWordPatt(type) {
    const specials = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    let passwordPatt = "";
    if(type.search("uppercase") !== -1) {
        passwordPatt += uppercase;
    }
    if(type.search("lowercase") !== -1) {
        passwordPatt += lowercase;
    }
    if(type.search("numeric") !== -1) {
        passwordPatt += numbers;
    }
    if(type.search("specialCharacter") !== -1) {
        passwordPatt += specials;
    }

    return passwordPatt;
}