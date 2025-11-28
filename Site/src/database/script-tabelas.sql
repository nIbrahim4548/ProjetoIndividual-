CREATE DATABASE Performance;

use Performance;


drop table Quiz;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

SELECT * from usuario;
select * from Quiz;

CREATE TABLE Quiz (
    id INT AUTO_INCREMENT,
    fkUsuario INT,
    total_acertos INT,
    total_erros INT,
    porcentagem_acertos FLOAT,
    data_quiz datetime,
    
    PRIMARY KEY (id, fkUsuario),

    CONSTRAINT fk_quiz_usuario
        FOREIGN KEY (fkUsuario)
        REFERENCES usuario(id)
		ON DELETE CASCADE
        ON UPDATE CASCADE);