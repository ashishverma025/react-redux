var mysql = require('mysql');
require('dotenv').config();
var connection = mysql.createConnection({
	database: process.env.DB_NAME,
	user:process.env.DB_USER,
	host:process.env.DB_HOST,
	password:process.env.DB_PASSWORD
});
// open the MySQL connection
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database APP PORT No " + process.env.APP_PORT);
 });
  
  module.exports = connection;