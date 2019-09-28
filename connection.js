// Import MySql database
const mysql = require('mysql');

// Create connection with credentials
const mysqlConnection = mysql.createConnection({ // create the connection with built-in method
    // define the credentials
    host: "localhost", // name of the host
    user: "root", // username
    password: "password", // password
    database: "ExampleDatabase", // name of database
    multipleStatements: true // using multiple statements - must
});

// Log a message to see what's happen with the connection
mysqlConnection.connect(err => {
    if (!err) {
        console.log("Connected");
    } else {
        console.log("Connection failed...");
    }
});

// Old style - export the database connection 
module.exports = mysqlConnection; // new style === export default "name"