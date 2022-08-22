create database dbclientes


create table clientes
(
	id UUID DEFAULT gen_random_uuid () PRIMARY key,
	created timestamp,
	updated timestamp,
	status bit,
	fname varchar(50),
	lname varchar(50),
	address text,
	birthdate date	
);



create PROCEDURE sp_InsertarClientes
(
	_status bit,
	_fname varchar(50),
	_lname varchar(50),
	_address text,
	_birthdate date	
)
language plpgsql
as $$
BEGIN
insert into clientes(created, updated, status, fname, lname, address, birthdate)
values(now(), now(), _status, _fname, _lname, _address, _birthdate);
COMMIT;
end; $$


create PROCEDURE sp_ActualizarClientes
(
	_id uuid,
	_status bit,
	_fname varchar(50),
	_lname varchar(50),
	_address text,
	_birthdate date	
)
language plpgsql
as $$
BEGIN
update clientes set updated = now(), status = _status, fname = _fname, 
lname = _lname, address = _address, birthdate = _birthdate 
where id = _id;
COMMIT;
end; $$