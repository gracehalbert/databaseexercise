var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

let connection = mysql.createConnection({
  user: 'root',
  password: 'cat',
  database: 'chat',
  host: 'localhost'
});

module.exports = connection;
