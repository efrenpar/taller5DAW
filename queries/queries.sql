create database libros;

use libros;

drop procedure if exists ingresar_libros;

delimiter //
create procedure ingresar_libros(in titulo varchar(500), in isbn char(40), in cali char(50), in calif float, in autor char(40))
begin
insert into libros (titulo,isbn,calificacion_promedio) values (titulo,isbn,cali);
insert into autor (nombre) values (autor);

select libros.id into @id from libros where libros.titulo = titulo;
select autor.id into @id_autor from autor where autor.nombre = autor;

insert into detallelibro (id_libro,id_autor) values (@id,@id_autor);
insert into calificacion (id_libro,id_usuario,calificacion) values (@id,1,calif);
end //

delimiter ;


create table usuarios(
id int(10) auto_increment,
nombre varchar(40),
apellido varchar(40),
cedula varchar(40),
correo varchar (40),
nacimiento date,
clave varchar(40),
primary key (id)
);

create table libros(
id int(10) auto_increment,
titulo varchar(500),
isbn varchar(40),
calificacion_promedio varchar(50),
primary key (id)

);

create table autor(
id int(10) auto_increment,
nombre varchar(40),
primary key (id)
);

drop table detalleLibro;

create table detalleLibro(
id_asignacion int(10) auto_increment,
id_libro int(10),
id_autor int(10),

primary key (id_asignacion),
foreign key (id_libro) references libros(id),  
foreign key (id_autor) references autor(id)
);

drop table calificacion;

create table calificacion(
id_calificacion int(10),
id_libro int(10),
id_usuario int(10),
calificacion float,
primary key (id_calificacion),
foreign key (id_libro) references libros(id),
foreign key (id_usuario) references usuarios(id)

);

call ingresar_libros('capitan escudo','1234','3',3,'mauricio')