DROP DATABASE IF EXISTS employees;
DROP DATABASE IF EXISTS roles;
DROP DATABASE IF EXISTS departments;


CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

CREATE table employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR (30) NOT NULL,
  manager_id INT NULL,
  role_id INT
);

CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY Key,
  title VARCHAR(30),
 salary DECIMAL NOT NULL,
 department_id INT NOT NULL
);
