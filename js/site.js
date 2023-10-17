// get the text input from the page
function getValues() {

    let message = document.getElementById('userInput').value;

    if (message.length == 0) {
        Swal.fire ({
            icon: 'error',
            backdrop: false,
            title: 'Oops!',
            text: 'Please enter a message to check for a palindrome'
        });
    } else {
        let isPalindrome = checkForPalindrome(message);

        displayResults(isPalindrome);
    }
}

// reverse the message
function reverseMessage(userInput) { // if input = hello

    let output = ''; // output = ['h', 'e', 'l', 'l', 'o']

    for (let i = userInput.length-1; i >= 0; i--) {

        output += userInput[i]
    }

    return output;
}

function checkForPalindrome(input) {
    let regex = /[^a-zA-Z0-9]/g;

    input = input.replace(regex, '');
    input = input.toLowerCase();

    let reversed = reverseMessage(input)

    if (reversed === input) {
        return true;
    } else {
        return false;
    }
}

// display the reverse message
function displayResults(isPalindrome) {
    document.getElementById('alert').classList.remove('invisible', 'alert-danger', 'alert-success');

    if (isPalindrome == true) {
        document.getElementById('msg').textContent = `Nice Job, that's a palindrome`;
        document.getElementById('alert').classList.add('alert-success');
    } else {
        document.getElementById('msg').textContent = `Oh no, that's not a palindrome`;
        document.getElementById('alert').classList.add('alert-danger');
    }
}

