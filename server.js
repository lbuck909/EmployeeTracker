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
            case 'Add a Department':
                addDepartment();
                break;
            case 'Add a Role':
                addRole();
                break;
            case 'Add a Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
      
    default:
      return process.exit();
  }

})
};

// function viewAllDepartments(){
//   console.log('viewAll');
//   connection.connect().query('select * from department', function (err,result){
// if (err) throw err
// console.table(result)

//   })
// }
newPrompt();

function viewAllDepartments() {
  const query = "SELECT * FROM department";
  connection.query(query, function(err, res){
    if (err) throw err;
    console.table(res);
    newPrompt();
  });
}
function viewAllRoles() {
  const query = "SELECT * FROM role";
  connection.query(query, function(err, res){
    if (err) throw err;
    console.table(res);
    newPrompt();
  });
}
function viewAllEmployees() {
  const query = "SELECT * FROM employee";
  connection.query(query, function(err, res){
    if (err) throw err;
    console.table(res);
    newPrompt();
  });
}

// add dept, role, emp files

function addDepartment() {
  inquirer.prompt([
  { type: "input",
    message: "What department would you like to add?",
    name: "newDept"
  },
  {
    type: "input",
    message: "What is the new department ID number?",
    name: "id"
    
  }



  ])
  .then(function(answer){
    console.log(answer);
    connection.query("INSERT INTO department (department_name) VALUES (?)", [answer.newDept] , function(err, res){
      if (err) throw err;
      console.table(res)
      newPrompt()
    })
  })

}

function addRole() {
  inquirer.prompt([
    {
      type: "input",
      message: "What's the name of the role?",
      name: "newRole"
    },
    
    {
      type: "input",
      message: "What's the department id for this role?",
      name: "deptID"
    },

    {
      type: "input",
      message: "What's the salary of the role?",
      name: "newSalary"
    },
  

  ])


  .then(function(answer) {
      console.log(answer);
      connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.newRole, answer.newSalary, answer.deptID] , function(err, res) {
      if (err) throw err;
      console.table(res);
      newPrompt();
    });
  });
}

function addEmployee() {
  inquirer.prompt([
  
  {
    type: "input",
    message: "What's the employee first name?",
    name: "firstName"

  },
  {
    type:"input",
    message: "What's the employee last name?",
    name: "lastName"

  },
  {
    type: "input",
    message: "What's the employee role id?",
    name: "roleID"

  },
  {
    type: "input",
    message: "Whats the manager id number associated with the employee?",
    name: "managerID"

  }, 
  ])
  .then(function(answer) {
    connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.firstName, answer.lastName, answer.roleID, answer.managerID], function(err, res) {
      if (err) throw err;
      console.table(res);
    newPrompt();  
  });
});
}

function updateEmployeeRole() {
  inquirer.prompt([
  
    {
      type: "input",
      message: "Which employee would you like to update?",
      name: "empUpdate"
  
    },

    {
      type: "input",
      message: "What would you like their new role ID to be?",
      name: "roleUpdate"
  
    },
  

  
])
.then(function(answer) {
  console.log(answer);
  connection.query('UPDATE employee SET role_id=? WHERE first_name=?', [answer.roleUpdate, answer.empUpdate], function(err, res) {
    if (err) throw err;
    console.table(res);
  newPrompt();   
  });
});
}

// function exit(){
//   connection.end();
//   process.quit();
// }
