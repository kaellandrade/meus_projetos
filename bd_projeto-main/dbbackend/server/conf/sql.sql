CREATE SCHEMA IF NOT EXISTS netprime;

INSERT INTO netprime.usuarioSistema (login, senha, nome) VALUES ('anderson@ufs.com', '123', 'Anderson Costa');
INSERT INTO netprime.usuarioSistema (login, senha, nome) VALUES ('micael@ufs.com', '123', 'Micael Andrade');
INSERT INTO netprime.usuarioSistema (login, senha, nome) VALUES ('vinicius@ufs.com', '123', 'Vinícius Moitinho');
INSERT INTO netprime.usuarioSistema (login, senha, nome) VALUES ('andcarv@academico.ufs.br', 'professor', 'André');

SELECT * FROM netprime.usuarioSistema;
SELECT * FROM netprime.filme;
SELECT * FROM netprime.titulo;
SELECT * FROM netprime.video;

-- SELECIONA TODOS OS VÍDEOS
SELECT f.titulo_idtitulo, f.video_idvideo, t.titulo, t.sinopse, t.ano, f.datalancamento, v.duracao, v.caminhodoarquivo 
						 FROM netprime.filme f INNER JOIN netprime.titulo t ON (t.idtitulo = f.titulo_idtitulo) 
					     INNER JOIN netprime.video v ON (f.video_idvideo = v.idvideo)

-- Table video
CREATE TABLE netprime.video (
	idVideo SERIAL,
	duracao REAL NOT NULL,
	caminhoDoArquivo VARCHAR(45) NOT NULL,
	CONSTRAINT pk_Idvideo PRIMARY KEY (idVideo)
);

-- Table titulo
CREATE TABLE netprime.titulo (
	idTitulo SERIAL,
	titulo TEXT NOT NULL,
	sinopse TEXT NULL,
	ano VARCHAR(5) NOT NULL,
	CONSTRAINT pk_idTitulo PRIMARY KEY (idTitulo)
);

-- Table filme
CREATE TABLE netprime.filme (
	dataLancamento VARCHAR(11) NOT NULL,
	titulo_idTitulo INT NOT NULL,
	video_idVideo INT NOT NULL,
	CONSTRAINT pk_tituloIdTitulo PRIMARY KEY (titulo_idTitulo),
 	CONSTRAINT fk_filme_titulo1 FOREIGN KEY (titulo_idTitulo)
 	REFERENCES netprime.titulo (idTitulo) ON DELETE CASCADE ON UPDATE CASCADE, 
 	CONSTRAINT fk_filme_video FOREIGN KEY (video_idVideo) 
	REFERENCES netprime.video (idVideo) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Table usuarioSistema
CREATE TABLE netprime.usuarioSistema (
	login VARCHAR(45) NOT NULL,
	senha VARCHAR(45) NOT NULL,
	nome VARCHAR(45) NULL,
	PRIMARY KEY (login)
);
