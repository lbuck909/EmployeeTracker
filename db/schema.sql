DROP DATABASE IF EXISTS employee_db;
-- DROP DATABASE IF EXISTS roles;
-- DROP DATABASE IF EXISTS departments;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);



CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY Key,
  title VARCHAR(30),
 salary DECIMAL (10,2) NOT NULL,
 department_id INT NOT NULL,
 FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE

);
CREATE table employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR (30) NOT NULL,
  manager_id INT NULL,
  role_id INT NOT NULL,
  FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
   FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);
-- ALTER USER 'root'@'localhost' IDENTIFIED BY 'NEW_USER_PASSWORD';
-- FLUSH PRIVILEGES;

