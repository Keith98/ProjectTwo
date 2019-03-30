DROP DATABASE IF EXISTS charactersdb;
CREATE DATABASE charactersdb;


USE charactersdb;

CREATE TABLE characters (	
	id INT AUTO_INCREMENT NOT NULL,
	name varchar(30) NOT NULL,
	hitpoints VARCHAR(30),
	strength FLOAT(11,2),
	forcepoints INT(11),
	PRIMARY KEY (id)
);


CREATE TABLE names(
	names_id INT(11) NOT NULL,
	name_name VARCHAR(30) NOT NULL,
	over_head_names INT(11) NOT NULL,
	PRIMARY KEY (names_id)
);


INSERT INTO characters (name, hitpoints, strength, forcepoints) VALUES ('Darth Maul', 500, 300, 600);
INSERT INTO characters (name, hitpoints, strength, forcepoints) VALUES ('Darth Vader', 600, 400, 800);
INSERT INTO characters (name, hitpoints, strength, forcepoints) VALUES ('Han Solo', 300, 500, 200);
INSERT INTO characters (name, hitpoints, strength, forcepoints) VALUES ('Luke Skywalker', 500, 600, 700);
INSERT INTO characters (name, hitpoints, strength, forcepoints) VALUES ('Chewbacca', 300, 400, 300);
INSERT INTO characters (name, hitpoints, strength, forcepoints) VALUES ('Princess Leia', 500, 400, 500);
INSERT INTO characters (name, hitpoints, strength, forcepoints) VALUES ('Akuma', 900, 10000, 20000);



 

SELECT * FROM characters