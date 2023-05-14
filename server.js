const express = require('express');
const inquirer = require('inquirer');
const db = require('./db/connection');
const mysql = require('mysql2');

const PORT = process.env. PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default repsonse for an error request
app.use((req, res) => {
  res.status(404).end();
});

// Connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);
   
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
