// Using the expressJs and router method
const express = require('express');
const Router = express.Router();
// import the connection file
const mysqlConnection = require('../connection');

// get the rows and fields from database
Router.get('/', (req, res) => {
    // the method used to select all from the table - using "query"
    mysqlConnection.query('SELECT * from people', (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(err);
        }
    })
});

module.exports = Router;