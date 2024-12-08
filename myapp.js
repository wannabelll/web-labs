document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault(); // не дає сторінці перезавантажитись

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById("lastName").value;
        const password = document.getElementById("password").value;
        const email = document.getElementById("email").value;

        // Перевірка довжини паролю
        if (password.length <= 4) {
            alert("Password too short. Please write >= 5 symbols");
            return; 
        }

        // Перевірка на наявність великих літер та цифр у паролі
        if (!/[A-Z]/.test(password) && !/[0-9]/.test(password)) {
            alert("You must use uppercase and digits in password!");
            return;
        }

        /*
        if (!/[A-Z]/.test(password)) {
            alert("You must use uppercase in password!");
            return;
        } else if(!/[0-9]/.test(password)){
            alert("You must use digits in password!");
            return;
        }
            */

// чи є "@"
        if (!email.includes('@')){
            alert("You have to write @ symbol in email");
        }



       //
       
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").submit();  // форма успішно затверджена 
    });
});
