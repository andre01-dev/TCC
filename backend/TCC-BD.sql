create database TCC;
use TCC;
drop database TCC;

create table tb_curso(
	id_curso int primary key auto_increment,
    nome_curso varchar(100),
    descricao varchar (300),
    duracao varchar(100),
    url varchar(100),
    caminho_img varchar(100)
);

insert into tb_curso (nome_curso, descricao, duracao, url, caminho_img)
values
("Fake News", "Nesse Curso vamos te ensinar como indentificar mensagens suspeitas", "3 min", "/curso1", "images/curso1.png"),
("Compras Online de Forma Segura", "Nesse Curso vamos te ensinar como evitar fraudes e compras impulsivas", "10 min", "/curso2", "images/curso2.png"),
("Pagamentos Seguras", "Nesse Curso vamos te ensinar a navegar de modo segura no seu Banco", "30 min", "/curso3", "images/curso3.png"),
("Organização Digital", "Nesse Curso vamos te ensinar a Armazenar documentos e fotos com segurança", "40 min", "/curso4", "images/curso4.png"),
("Criando e Usando E-mail", "Nesse Curso vamos te ensinar a criar uma conta e usar o E-mail", "15 min", "/curso5", "images/curso5.png"),
("Introdução a Inteligência Artificial", "Nesse Curso vamos te ensinar a usar a Inteligencia Artificial com o ChatGPT", "27 min", "/curso6", "images/curso6.png"),
("Educação Financeira Digital", "Nesse Curso vamos te dar dicas de como controlar seus gastos e evitar fraudes", "55 min", "/curso7", "images/curso7.png"),
("Senhas Seguras", "Nesse Curso vamos te ensinar a criar uma Senha Forte.", "23 min", "/curso8", "images/curso8.png"),
("Golpes", "Nesse Curso vamos te ensinar a como Reconhecer e-mail falsos e o que fazer?", "30 min", "/curso9", "images/curso9.png");

select*from tb_curso;

create table tb_usuario (
	id_usuario int primary key auto_increment,
    nome_usuario varchar (200),
    email varchar (300),
    cpf varchar (20),
    telefone varchar (20),
    dt_nascimento varchar (20),
    senha varchar(500),
    id_curso int,
    foreign key (id_curso) references tb_curso(id_curso)
);

select*from tb_usuario;

create table tb_matricula(
id_matricula int primary key auto_increment,
cursando boolean,
concluido boolean,
id_usuario int,
id_curso int,
foreign key (id_usuario) references tb_usuario(id_usuario),
foreign key (id_curso) references tb_curso(id_curso)
);

select * from tb_matricula;


create table tb_adm(
	id_adm int primary key auto_increment,
    nome varchar (200),
    email varchar (200),
    senha varchar (300),
    id_curso int,
    id_usuario int,
    id_matricula int,
    foreign key (id_curso) references tb_curso(id_curso),
    foreign key (id_usuario) references tb_usuario(id_usuario),
    foreign key (id_matricula) references tb_matricula(id_matricula)
);

create table denuncia(
id_denuncia int primary key auto_increment,
assunto varchar(300),
data date,
ocorrido varchar(5000),
email varchar(200)
);

create table depoimentos(
id_depoimento int primary key auto_increment,
imagem varchar(500),
titulo varchar(200),
depoimento varchar(250)
);