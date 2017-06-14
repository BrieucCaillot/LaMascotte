CREATE DATABASE lamascotte;
USE lamascotte;

CREATE TABLE booking (
	`id` INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	`lastname`VARCHAR(30),
	`date_booking` DATE,
	`time_booking` VARCHAR(5),
	`persons`INT(2) CHECK (persons>=1 AND persons<=20),
	`email` VARCHAR(70),
	`tel`INT(20),
	`infos`VARCHAR(700)
);

INSERT INTO booking (lastname, date_booking, time_booking, persons, email, tel, infos) VALUES 
	('caillot', '2017-03-23', '12h30', '3', 'dazdz@gmail.com', '0623322343', 'bonjour');