const express = require('express');
const mysql = require('mysql');
const app = express();

const databaseConnection = mysql.createConnection({
    host: '192.168.1.214',
    user: 'testuser',
    password: 'test123',
    database: 'livelafyak'
});
const port = process.env.PORT || 5000;


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
