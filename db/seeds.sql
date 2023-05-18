INSERT INTO department (department_name)
Values
('Kitchen'),
('Catering'),
('Sales'),
('HR');

INSERT INTO role (title, salary, department_id)
Values
('Executive Chef', 75000, 1);
('Sous Chef', 50000, 1),
('Line Cook', 24000, 1),
('Catering Manager', 65000, 2),
('Banquet Server', 20000, 2),
('Sales Manager', 150000, 3),
('HR Manager', 80000, 4),
('Office Clerk', 36000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
Values
('Lena', 'Luther', 1,1),
('Pinky', 'Wilson', 2,NULL),
('Brian', 'Jackson', 3,1),
('Charlye', 'StrongFox', 4,NULL),
( 'Brooklynn', 'McBride', 5,NULL),
('Stephan', 'Sherwinn', 6,3),
('Frank', 'Jordan', 7,NULL),
('Bianca', 'Whethers', 8,4);