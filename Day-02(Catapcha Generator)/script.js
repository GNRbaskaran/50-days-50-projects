// Function to generate random CAPTCHA
function generateCaptcha() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters.charAt(randomIndex);
    }
    return captcha;
}

// Function to display CAPTCHA in the container
function displayCaptcha() {
    const captchaContainer = document.getElementById("captcha-container");
    const captcha = generateCaptcha();
    captchaContainer.textContent = captcha;

    // Store the generated CAPTCHA in a hidden input field for validation
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.id = "hiddenCaptcha";
    hiddenInput.value = captcha;
    captchaContainer.appendChild(hiddenInput);
}

// Function to validate CAPTCHA
function validateCaptcha() {
    const enteredCaptcha = document.getElementById("captchaInput").value;
    const hiddenCaptcha = document.getElementById("hiddenCaptcha").value;

    if (enteredCaptcha === hiddenCaptcha) {
        alert("CAPTCHA is correct. Login successful!");
    } else {
        alert("CAPTCHA is incorrect. Please try again.");
        displayCaptcha(); // Refresh CAPTCHA on incorrect entry
    }
}

// Display CAPTCHA on page load
displayCaptcha();