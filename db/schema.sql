### Schema

CREATE DATABASE empanadas_db;
USE empanadas_db;

CREATE TABLE empanadas
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);