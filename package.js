// Function to open the booking form
function openBookingForm(packageName, packagePrice) {
    // Check if the user is logged in
    if (!isUserLoggedIn()) {
        // Store the current page URL in localStorage so we can redirect back after login
        localStorage.setItem("redirectAfterLogin", window.location.href);

        // If not logged in, prompt user to log in or register
        alert("Please log in or register first to book a package.");
        // Open the login/signup modal (redirecting to login page)
        openLoginModal();
    } else {
        // If logged in, fill the booking form and show the modal
        document.getElementById("package-name").value = packageName;
        document.getElementById("price").value = packagePrice;
        document.getElementById("booking-modal").style.display = "block";
    }
}

// Function to close the booking modal
function closeBookingForm() {
    document.getElementById("booking-modal").style.display = "none";
}

// Function to open the login/signup modal (just a placeholder function)
function openLoginModal() {
    // You can implement your login/signup modal here.
    // For now, we'll just redirect to the login page.
    window.location.href = "login.html";
}

// Function to check if the user is logged in (you can replace this with actual logic)
function isUserLoggedIn() {
    // Check if the user is logged in based on session or local storage
    return localStorage.getItem("userLoggedIn") === "true"; // Simple check for demo
}

// Handle form submission for the booking form
document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const packageName = document.getElementById("package-name").value;
    const price = document.getElementById("price").value;

    // Save booking data (In real scenarios, you would save this in a database or send to a backend)
    const bookingDetails = {
        name: name,
        email: email,
        phone: phone,
        packageName: packageName,
        price: price,
    };

    // Simulating a successful booking
    document.getElementById("booking-message").innerHTML = `
        <h3>Booking Confirmed!</h3>
        <p>Thank you for booking the <strong>${packageName}</strong> package!</p>
        <p>We will send a confirmation to your email: <strong>${email}</strong>.</p>
    `;
    // Close the modal after booking
    setTimeout(function() {
        closeBookingForm();
    }, 3000); // Close the modal after 3 seconds
});