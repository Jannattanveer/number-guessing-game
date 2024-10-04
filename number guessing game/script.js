// Get the user input element
const userInput = document.getElementById('userinput');

// Get the submit button element
const submitButton = document.getElementById('btn');

// Get the result element
const resultElement = document.getElementById('result');

// Set the result number to 15
const resultNumber = 15;

// Initialize the number of attempts
let attempts = 0;

// Add an event listener to the submit button
submitButton.addEventListener('click', () => {
    // Get the user's guess
    const userGuess = parseInt(userInput.value);

    // Check if the user's guess is a number
    if (isNaN(userGuess)) {
        resultElement.innerText = 'Please enter a number!';
    } else {
        // Increment the number of attempts
        attempts++;

        // Check if the user's guess is correct
        if (userGuess === resultNumber) {
            resultElement.innerText = `Congratulations! You guessed the number ${resultNumber} in ${attempts} attempts.`;
            submitButton.disabled = true;
        } else if (userGuess < resultNumber) {
            resultElement.innerText = `Too low! The number is higher than ${userGuess}. Try again.`;
        } else {
            resultElement.innerText = `Too high! The number is lower than ${userGuess}. Try again.`;
        }
    }
});