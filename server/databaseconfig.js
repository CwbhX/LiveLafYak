const mysql = require('mysql');

const databaseConnection = mysql.createConnection({
    host: '192.168.1.214',
    user: 'testuser',
    password: 'test123',
    database: 'livelafyak'
});

databaseConnection.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    console.log(err);
    return;
  }
  console.log('Connection established');
});

databaseConnection.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});

module.exports = databaseConnection;
