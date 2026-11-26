// ===============================
// LOGIN FUNCTION
// ===============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");
        const button = loginForm.querySelector(".login-btn");

        message.textContent = "Checking login...";
        button.disabled = true;

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const result = await response.json().catch(() => ({}));

            if (response.ok) {
                message.textContent = result.message || "Login successful!";
                message.style.color = "green";

                window.location.href = "/dashboard.html";

            } else {
                message.textContent = result.message || "Invalid email or password.";
                message.style.color = "red";
            }

        } catch (error) {
            console.error("Login error:", error);
            message.textContent = "Cannot connect to server.";
            message.style.color = "red";

        } finally {
            button.disabled = false;
        }

    });
}


// ===============================
// SIGNUP FUNCTION
// ===============================

const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        const message = document.getElementById("message");
        const button = signupForm.querySelector(".login-btn");

        if (password !== confirmPassword) {
            message.textContent = "Passwords do not match.";
            message.style.color = "red";
            return;
        }

        message.textContent = "Creating your account...";
        button.disabled = true;

        try {
            const response = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            });

            const result = await response.json().catch(() => ({}));

            if (response.ok) {
                message.textContent = result.message || "Account created successfully!";
                message.style.color = "green";

                signupForm.reset();

            } else {
                message.textContent = result.message || "Signup failed.";
                message.style.color = "red";
            }

        } catch (error) {
            console.error("Signup error:", error);
            message.textContent = "Cannot connect to server.";

        } finally {
            button.disabled = false;
        }

    });
}
