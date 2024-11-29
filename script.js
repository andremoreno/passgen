function generatePassword() {
    const useUppercase = document.getElementById('uppercase').checked;
    const useLowercase = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;
    const length = parseInt(document.getElementById('length').value, 10);

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?/";

    let allChars = "";
    if (useUppercase) allChars += uppercaseChars;
    if (useLowercase) allChars += lowercaseChars;
    if (useNumbers) allChars += numberChars;
    if (useSymbols) allChars += symbolChars;

    if (allChars === "") {
        alert("Please select at least one character set.");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    const passwordOutput = document.getElementById('passwordOutput');
    passwordOutput.textContent = password;
    passwordOutput.classList.remove('alert-secondary');
    passwordOutput.classList.add('alert-success');
}

function copyPassword() {
    const password = document.getElementById('passwordOutput').textContent;
    if (password === "Your password will appear here" || password.trim() === "") {
        alert("No password to copy!");
        return;
    }

    navigator.clipboard.writeText(password)
        .then(() => alert("Password copied to clipboard!"))
        .catch(err => alert("Failed to copy password: " + err));
}
