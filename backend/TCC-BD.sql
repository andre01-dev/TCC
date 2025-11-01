create database TCC;
use TCC;
drop database TCC;

create table tb_curso(
	id_curso int primary key auto_increment,
    nome_curso varchar(100),
    descricao varchar (300),
    duracao varchar(100)
);

insert into tb_curso (nome_curso, descricao, duracao)
values
("Fake News", "Nesse Curso vamos te ensinar como indentificar mensagens suspeitas", "3 min"),
("Prevenção", "Nesse Curso vamos te ensinar como evitar fraudes e compras impulsivas", "10 min"),
("Digitalização Bancária", "Nesse Curso vamos te ensinar a navegar de modo segura no seu Banco", "30 min"),
("Gestão", "Nesse Curso vamos te ensinar a Armazenar documentos e fotos com segurança", "40 min"),
("Comunicação", "Nesse Curso vamos te ensinar a Criar uma conta e usar o E-mail", "15 min"),
("Introdução a Inteligência Artificial", "Nesse Curso vamos te ensinar a Usar a Inteligencia Artificial com o ChatGPT", "27 min"),
("Educação Financeira", "Nesse Curso vamos te dar dicas de como controlar seus gastos e evitar fraudes", "55 min"),
("Senhas Seguras", "Nesse Curso vamos te ensinar a Criar uma Senha Forte.", "23 min"),
("Golpes (Phishing)", "Nesse Curso vamos te ensinar a como Reconhecer E-mail Falsos e o Que Fazerh", "30 min");

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
ocorrido varchar(5000)
);
