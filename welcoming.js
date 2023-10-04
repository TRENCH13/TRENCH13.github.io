const correctPassword = "iWantToOpenTheVault"; // The password

// Function to handle button click
function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;
    if (passwordInput === correctPassword) {
        window.location.href = "message.html"; // The next page
    } else {
        alert("Incorrect password. Please try again.");
    }
}

// Add click event listener to the button
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", checkPassword);
