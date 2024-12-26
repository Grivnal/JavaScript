function submitLogin() {
    const login = document.getElementById("login").value;
    const rememberMe = document.getElementById("rememberMe").checked;
    const message = Привіт, ${login}! Я тебе ${rememberMe ? "запам’ятав" : "не запам’ятав"}.;
    document.getElementById("message").textContent = message;
}