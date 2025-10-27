create database TCC;
use TCC;
drop database TCC;


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

