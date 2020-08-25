var _length = document.querySelector('input[name="length"]');
var _lowercase = document.querySelector('input[name="lowercase"]');
var _uppercase = document.querySelector('input[name="uppercase"]');
var _number = document.querySelector('input[name="number"]');
var _symbol = document.querySelector('input[name="symbol"]');
var copy = document.getElementById("copy");
var generateButton = document.querySelector('.interface button');

const key_strings = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: '*;<>()[]{}#$?!^|'
};


copy.addEventListener("click", () => {
    var _password = document.querySelector('input[type="text"]');
    // if (_length.value == "" || _password.value != "Wrong Length");
    else if (_password.value != "" && _password.value != "Include any key string and define the length!") {
        _password.select();
        document.execCommand('copy');
        alert("Password copied to clipboard!");
    }
});

generateButton.addEventListener("click", () => {
    var length = +_length.value;
    var activeLower = _lowercase.checked;
    var activeUpper = _uppercase.checked;
    var activeNumber = _number.checked;
    var activeSymbol = _symbol.checked;

    generateRandomPassword(activeLower, activeUpper, activeNumber, activeSymbol, length);


});



function generateRandomPassword(lower, upper, num, sym, length) {
    let MAIN_STRING = "";
    let PASSWORD = "";

    const options = {
        lowercase: lower,
        uppercase: upper,
        number: num,
        symbol: sym
    };

    for (i = 0; i < Object.keys(options).length; i++) {
        MAIN_STRING += (Object.values(options)[i]) ? key_strings[Object.keys(options)[i]] : "";
    }

    if (MAIN_STRING != "" && length > 0) {
        for (i = 0; i < length; i++) {
            PASSWORD += MAIN_STRING[Math.floor(Math.random() * MAIN_STRING.length)];
        }

        document.querySelector('input[type="text"]').value = PASSWORD;

    } else {
        document.querySelector('input[type="text"]').value = "Please choose length AND options below!";
    }


}