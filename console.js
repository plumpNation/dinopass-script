/**
 * Copy and paste this into the console
 */

var passwordCount = 60;

// dinopass has jquery in the page
var input = $('#password-input');
var newBtn = $('#simple-button');

var passwords = [];

var interval;

var getNewPassword = function () {
    password = input.val();

    if (passwords.indexOf(password) < 0) {
        passwords.push(password);
    }

    if (passwords.length >= passwordCount) {
        window.clearInterval(interval);
        console.log(passwords);
    }

    newBtn.click();
};

interval = window.setInterval(getNewPassword, 500);

// Copy and paste the array out of the console and format it how you like in a text editor.
