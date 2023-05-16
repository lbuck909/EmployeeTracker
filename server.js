require('dotenv').config()// const express = require('express');
const inquirer = require('inquirer');
// const db = require('./db/connection');
const mysql = require('mysql2');

// const PORT = process.env. PORT || 3001;
// const app = express();

// Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// Default repsonse for an error request
// app.use((req, res) => {
//   res.status(404).end();
// });

// Connect to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
   console.log(`Connected to the employee_db database.`)
);
   
  
  // app.listen(PORT, () => {
  //   console.log(`Server running on port ${PORT}`);
  // });

  
  console.log(`Database name is ${process.env.DB_NAME}`);
  console.log(`Database username is ${process.env.DB_USERNAME}`);
  console.log(`Database password is ${process.env.DB_PASSWORD}`);

// prompt functions
function newPrompt(){
  inquirer.prompt({
    type: "list",
    message: "What data would you like view?",
    choices: ['View All Departments','View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add a Employee', 'Update Employee Role', 'Nevermind'],
    name: "menu",
  })
.then((answer) => {
  console.log (answer)
  switch (answer.menu) {
    case 'View All Departments':
                viewAllDepartments();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'Add A Department':
                addDepartment();
                break;
            case 'Add a Role':
                addRole();
                break;
            case 'Add an Employee':
                addEmployee();
                break;
            case 'Update an Employee Role':
                updateEmployeeRole();
                break;
      
    default:
      return process.exit();
  }

})
};
function viewAllDepartments(){
  console.log('viewAll');
  connection.connect().query('select * from department', function (err,result){
if (err) throw err
console.table(result)
// newPrompt()
  })
}
newPrompt();

function viewAllDepartments() {
  const query = "select * FROM department";
  connection.query(query, function(err, res){
    if (err) throw err;
    console.table(res);
    newPrompt();
  });
}
function viewAllRoles() {
  const query = "select * FROM role";
  connection.query(query, function(err, res){
    if (err) throw err;
    console.table(res);
    newPrompt();
  });
}
function viewAllEmployees() {
  const query = "select * FROM employee";
  connection.query(query, function(err, res){
    if (err) throw err;
    console.table(res);
    newPrompt();
  });
}