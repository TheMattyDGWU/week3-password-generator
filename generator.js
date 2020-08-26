// this doesn't work yet!!!!!!!!
function clear() {
    document.getElementById("lowercase").value = " "
}

// assign variables based upon the occurance of an input field w/ input 'name='
var _length = document.querySelector('input[name="length"]');
var _lowercase = document.querySelector('input[name="lowercase"]');
var _uppercase = document.querySelector('input[name="uppercase"]');
var _number = document.querySelector('input[name="number"]');
var _symbol = document.querySelector('input[name="symbol"]');
var copy = document.getElementById("copy");
var generateButton = document.querySelector('.interface button');

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
    if (_password.value != "" && _password.value != "Include any key string and define the length!") {
        _password.select();
        document.execCommand('copy');
        alert("Password copied to clipboard!");
    }
});

// Checks to see if the user chooses a correct length, and if not sends an alert
// This includes an in-elegant if/else loop to stop processing if length is not correct, but it works.
generateButton.addEventListener("click", () => {
    var length = +_length.value;
    if (length < 8 || length > 128) {
        alert("Please choose a length between 8 - 128!");
        clear(); // this function doesn't work yet!!!!
    }
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
        }
        // returns the generated password
        document.querySelector('input[type="text"]').value = PASSWORD;
        // if no options were chosen error message is returned to the password display input field
    } else {
        document.querySelector('input[type="text"]').value = "Please choose length AND options below!";
    }


}