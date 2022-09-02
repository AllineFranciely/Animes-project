CREATE DATABASE IF NOT EXISTS animes_api;

USE animes_api;

CREATE TABLE IF NOT EXISTS users
(
	id INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	senha VARCHAR(20) NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO users (nome, senha)
VALUES ('Alline', 'animes123');
    
CREATE TABLE IF NOT EXISTS animes
(
	id INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	temporadas INT NOT NULL,
	plataforma VARCHAR(50),
    situacao BOOLEAN NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO animes (nome, temporadas, plataforma, situacao)
VALUES ('Naruto', 20, 'Netflix', true);