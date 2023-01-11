const mysql = require('mysql');

const connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'askdfl734$',
  database: 'database1'
});

connection.connect((err) => {
  if (!err) {
    console.log('Successfully connected to the database');
  } else {
    console.log(err);
  }
});

module.exports = connection;
