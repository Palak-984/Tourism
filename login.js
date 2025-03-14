// Toggle between Login and Signup
document.getElementById('show-signup').addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', () => {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Handle Login Form submission
document.getElementById('login-form-id').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        alert('Login successful');
        // Logic for login can be added here
        // For example, check if email and password match stored data
    } else {
        alert('Please fill in both fields');
    }
});

// Handle Signup Form submission
document.getElementById('signup-form-id').addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (username && email && password) {
        alert('Signup successful');
        // Logic for signup can be added here
        // Example: Save new account data
    } else {
        alert('Please fill in all fields');
    }
});
// Handle Login Form submission
document.getElementById('login-form-id').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email && password) {
        // Send login request to the server
        fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Login successful') {
                    // Store the login state in localStorage or redirect user
                    localStorage.setItem("userLoggedIn", "true");
                    window.location.href = "packages.html"; // Redirect after successful login
                } else {
                    alert('Login failed: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        alert('Please fill in both fields');
    }
});
// Simulating user login after a successful login attempt
// Simulating user login after a successful login attempt
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Normally, you'll authenticate here with backend logic

    // After successful authentication, mark the user as logged in
    localStorage.setItem("userLoggedIn", "true");

    // Check if there's a URL to redirect to (from the redirectAfterLogin key in localStorage)
    const redirectUrl = localStorage.getItem("redirectAfterLogin");

    // If there's a stored URL, redirect the user back to that page
    if (redirectUrl) {
        // Clear the stored URL after redirecting
        localStorage.removeItem("redirectAfterLogin");
        window.location.href = redirectUrl;
    } else {
        // If no URL is stored, redirect to a default page, e.g., packages page
        window.location.href = "packages.html";
    }
});