const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Example route for serving the index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'hello.html')); // Make sure it's in the "public" folder
});


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html')); // Serve the about.html page
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html')); // Serve the about.html page
});

app.get('/contacts', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contacts.html')); // Serve the contacts.html page
});




// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
