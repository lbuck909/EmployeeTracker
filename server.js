const express = require('express');
const inquirer = require('inquirer');
// const db = require('./db/connection');
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
    password: 'spicy$%^wolf'
    // database: 'employee_db'
  },
  // console.log(`Connected to the employee_db database.`)
);
   
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  require('dotenv').config()
  console.log(`Database name is ${process.env.DB_NAME}`);
  console.log(`Database username is ${process.env.DB_USERNAME}`);
  console.log(`Database password is ${process.env.DB_PASSWORD}`);

// prompt functions
function newPrompt(){
  inquirer.prompt({
    name: "menu",
    type: "list",
    message: "What data would you like view?",
    choices: ['View All Roles', 'View All Departments', 'View All Emplyees', ' Add a Department', ' Add a Role', 'Add a Employee', 'Update Employee Role' ],
  })
}