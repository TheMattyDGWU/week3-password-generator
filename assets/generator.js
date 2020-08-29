// assign variables by Element ID
var _length = document.getElementById("length");
var _lowercase = document.getElementById("lowercase");
var _uppercase = document.getElementById("uppercase");
var _number = document.getElementById("number");
var _symbol = document.getElementById("symbol");
var copy = document.getElementById("copy");
var generateButton = document.getElementById("generate");

// assign string variables for those input fields
const key_strings = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: '!"#$%&()*+,-./:;<=>?@][^_`{|}~'
};

// check to see if user has actually checked any of the boxes and/or a length value
copy.addEventListener("click", () => {
    var _password = document.querySelector('input[type="text"]');
    if (_password.value != "" && _password.value != "Please choose a lenth and option(s)!") {
        _password.select();
        document.execCommand('copy');
        alert("Password copied to clipboard!");
    }
});

// Checks to see if the user chooses a correct length, and if not sends an alert
// This includes an in-elegant if/else loop to stop processing if length is not correct, but it works.
generateButton.addEventListener("click", () => {
    var length = +_length.value;
    // error handling if length value is not between 8 - 128
    if (length < 8 || length > 128) {
        alert("Please choose a length between 8 - 128!");
        document.getElementById("returnedText").value = "Please pick a number between 8 - 128";
        document.getElementById("length").value = null;
    }
    // length requirements are met, so activate options from checked boxes
    else {
        var activeLower = _lowercase.checked;
        var activeUpper = _uppercase.checked;
        var activeNumber = _number.checked;
        var activeSymbol = _symbol.checked;
    }
    // If a checkbox is active, then it gets passed to the Password Generator
    generateRandomPassword(activeLower, activeUpper, activeNumber, activeSymbol, length);
});


// Clear out any previous data and starts generation from scratch
function generateRandomPassword(lower, upper, num, sym, length) {
    let MAIN_STRING = "";
    let PASSWORD = "";

    const options = {
        lowercase: lower,
        uppercase: upper,
        number: num,
        symbol: sym
    };
    // Determines from length how long to make the password
    for (i = 0; i < Object.keys(options).length; i++) {
        MAIN_STRING += (Object.values(options)[i]) ? key_strings[Object.keys(options)[i]] : "";
    }
    // CREATE THE PASSWORD!
    if (MAIN_STRING != "" && length > 0) {
        for (i = 0; i < length; i++) {
            PASSWORD += MAIN_STRING[Math.floor(Math.random() * MAIN_STRING.length)];
            // returns the generated password
            document.getElementById("returnedText").value = PASSWORD;
        }
        // error handling if no options were selected but valid length WAS selected
    } else {
        document.getElementById("returnedText").value = "Please choose options!";
        document.getElementById("lowercase").checked = false;
        document.getElementById("uppercase").checked = false;
        document.getElementById("number").checked = false;
        document.getElementById("symbol").checked = false;
    }

}