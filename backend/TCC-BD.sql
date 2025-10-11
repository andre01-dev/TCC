create database TCC;
use TCC;

create table tb_curso(
	id_curso int primary key auto_increment,
    nome_curso varchar(100),
    descricao varchar (300),
    duracao varchar(100)
);

create table tb_usuario (
	id_usuario int primary key auto_increment,
    nome_usuario varchar (200),
    email varchar (300),
    cpf varchar (20),
    telefone varchar (20),
    dt_nascimento date,
    sabendo varchar(100),
    senha varchar(500),
    id_curso int,
    foreign key (id_curso) references tb_curso(id_curso)
);

create table tb_adm(
	id_adm int primary key auto_increment,
    nome varchar (200),
    email varchar (200),
    senha varchar (300),
    id_curso int,
    id_usuario int,
    foreign key (id_curso) references tb_curso(id_curso),
    foreign key (id_usuario) references tb_usuario(id_usuario)
);