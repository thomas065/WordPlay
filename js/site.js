function getValues() {
    let message = document.getElementById('userInput').value;

    if (message.length == 0 && (revMsg == message) ) {
        Swal.fire ({
            icon: 'error',
            backdrop: false,
            title: 'Uh oh!',
            text: `I'm not sure how to read this!`
        });
    } else {
        let revMsg = checkForPalindrome(message);
        displayResults(revMsg);
    }
}

function checkForPalindrome(input) {
    let output = '';
    const regEx = /[^A-Za-z0-9_]/g

    for (let i = input.length-1; i >= 0; i--) {
        output += input[i];
    }
    return output;
}

function displayResults(message) {
    document.getElementById('msg').textContent = `Your message read forward and backwards is: ${message}`;

    document.getElementById('alert').classList.remove('invisible');
}



