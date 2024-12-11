document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get the values of form fields
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const password = document.getElementById("password").value;
        const email = document.getElementById("email").value;

        // Check password length
        if (password.length < 4) {
            alert("Password too short. Please write >=4 symbols");
            return;  // Exit early if password is too short
        } else if(!/[A-Z]/.test(password)){
            alert("You must use uppercase in password!");
            return;
        }

        if (!email.includes('@')){
alert("You have to write @ symbol in email");
        }


        // Example check for admin and regular user
        if (firstName === "admin" && password === "Adminpass" && lastName === "admin" && email === "admin@gmail.com") {
            // If admin, redirect to admin page
            window.location.href = "admin.html"; // Redirect to admin page
        } else {
            // Store user data in localStorage
            localStorage.setItem('userData', JSON.stringify({ firstName, lastName, email, password }));

            // If regular user, redirect to user page
            window.location.href = "user.html"; // Redirect to user page
        }
    });
});
