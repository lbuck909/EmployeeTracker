INSERT INTO department (department_name)
Values
('Kitchen'),
('Catering'),
('Sales'),
('HR');

INSERT INTO role ( department_id, title, salary)
Values
(1, 'Executive Chef', 75000),
(1, 'Sous Chef', 50000),
(1, 'Line Cook', 24000),
(2, 'Catering Manager', 65000),
(2, 'Banquet Server', 20000),
(3, 'Sales Manager', 150000),
(4, 'HR Manager', 80000),
(4, 'Office Clerk', 36000),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
Values
('Lena', 'Luther', 1,1),
('Pinky', 'Wilson', 1,1)