function submitRegistration() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeatPassword").value;

    if (password !== repeatPassword) {
        alert("Passwords do not match!");
        return;
    }

    document.getElementById("message").textContent = message;
}