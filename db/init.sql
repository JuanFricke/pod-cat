CREATE TABLE cats (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  gender VARCHAR(10),
  age INTEGER
);

INSERT INTO cats (name, gender, age) VALUES
('Milo', 'Male', 2),
('Luna', 'Female', 3),
('Bella', 'Female', 1),
('Simba', 'Male', 4);
