const express = require('express');
const socket = require("socket.io");

const app = express();
const port = process.env.PORT || 5000;


// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'client/build')))

// Creation of the server
const server = app.listen(port, function () {
    console.log(`The Server is running and listening on port ${port}`)
});

// Creation of the constant that will be used for the socket
const io = socket(server);

io.on('connection', (socket) => {

});

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
