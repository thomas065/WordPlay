function getValues() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();

    if (message.length === 0) {
        displayResults('Uh oh!', `I'm not sure how to read this!`, 'error');
    } else {
        const isPalindrome = checkForPalindrome(message);

        if (isPalindrome) {
            displayResults(
                'Success!',
                `${message} read forward and backward is a palindrome.`,
                'success'
            );
            setAlertClass('alert-success');
        } else {
            displayResults('Oops!', `${message} is not a palindrome!`, 'error');
            setAlertClass('alert-danger');
        }
    }
}

function checkForPalindrome(word) {
    word = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = word.length - 1;

    while (left < right) {
        if (word[left] !== word[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function displayResults(title, text, icon) {
    Swal.fire({
        icon: icon,
        backdrop: false,
        title: title,
        text: text,
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
    });
}

function setAlertClass(alertClass) {
    // Set the alert class in the 'alert' element
    const alertElement = document.getElementById('alert');
    alertElement.classList.remove('invisible');
    alertElement.classList.add(alertClass);
}
