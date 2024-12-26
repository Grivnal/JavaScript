const appDiv = document.getElementById('app');

        function showLoginPage() {
            appDiv.innerHTML = `
                <h1>Login</h1>
                <form id="login-form">
                    <input type="email" id="login-email" placeholder="Email" required>
                    <input type="password" id="login-password" placeholder="Password" required>
                    <button type="submit">Login</button>
                </form>
                <a href="#" id="go-to-register">Don't have an account? Register</a>
                <div id="error-message" class="error"></div>
            `;

            document.getElementById('login-form').addEventListener('submit', handleLogin);
            document.getElementById('go-to-register').addEventListener('click', showRegisterPage);
        }

        function showRegisterPage() {
            appDiv.innerHTML = `
                <h1>Register</h1>
                <form id="register-form">
                    <input type="text" id="register-username" placeholder="Username" required>
                    <input type="email" id="register-email" placeholder="Email" required>
                    <input type="password" id="register-password" placeholder="Password" required>
                    <input type="password" id="register-confirm-password" placeholder="Confirm Password" required>
                    <input type="text" id="register-first-name" placeholder="First Name" required>
                    <input type="text" id="register-last-name" placeholder="Last Name" required>
                    <button type="submit">Register</button>
                </form>
                <a href="#" id="go-to-login">Already have an account? Login</a>
                <div id="error-message" class="error"></div>
            `;

            document.getElementById('register-form').addEventListener('submit', handleRegister);
            document.getElementById('go-to-login').addEventListener('click', showLoginPage);
        }

        function showHomePage(user) {
            appDiv.innerHTML = `
                <h1>Welcome</h1>
                <div id="user-info">
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Name:</strong> ${user.firstName} ${user.lastName}</p>
                </div>
                <button id="logout-button">Logout</button>
            `;

            document.getElementById('logout-button').addEventListener('click', () => {
                localStorage.removeItem('loggedInUser');
                showLoginPage();
            });
        }

        function handleLogin(event) {
            event.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                showHomePage(user);
            } else {
                document.getElementById('error-message').textContent = 'Invalid email or password';
            }
        }

        function handleRegister(event) {
            event.preventDefault();
            const username = document.getElementById('register-username').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;
            const firstName = document.getElementById('register-first-name').value;
            const lastName = document.getElementById('register-last-name').value;

            if (password !== confirmPassword) {
                document.getElementById('error-message').textContent = 'Passwords do not match';
                return;
            }

            const users = JSON.parse(localStorage.getItem('users')) || [];
            if (users.find(u => u.email === email)) {
                document.getElementById('error-message').textContent = 'Email is already registered';
                return;
            }

            const newUser = { username, email, password, firstName, lastName };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            showLoginPage();
        }

        function checkLoggedInUser() {
            const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
            if (loggedInUser) {
                showHomePage(loggedInUser);
            } else {
                showLoginPage();
            }
        }

        checkLoggedInUser();