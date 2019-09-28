// using all requirments for parsing - displaying the data from database and table
const express = require('express');
const bodyParser = require('body-parser');
const PeopleRoutes = require('./routes/people');
const mysqlConnection = require('./connection');
const app = express();

app.use(bodyParser.json());
app.use('/people', PeopleRoutes);

app.listen(3000); // open in chrome localhost:3000/people - you will see the json format of table from database