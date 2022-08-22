const {Client} = require("pg");

const client = new Client({
    user: process.env.USUARIO,
    host: process.env.SERVIDOR,
    database: process.env.BASEDATOS,
    password: process.env.CLAVE,
    port: process.env.PUERTO
})
client.connect();

module.exports = {
    registrarClientes, getClientes, getClienteId, actualizarClienteId
}

async function registrarClientes(body){
    let sQuery = "call sp_InsertarClientes('" + body.status + "','" + body.fname + "','" + 
    body.lname + "','" + body.address + "','" + body.birthdate + "')";
    console.log(sQuery)
    const res = await client.query(sQuery);

    return res;
}

async function getClientes(){
    const res = await client.query("select * from clientes");
    const result = res.rows

    return result;
}

async function getClienteId(id){
    let sQuery = "select * from clientes where id = '" + id + "'";
    const res = await client.query(sQuery);
    const result = res.rows

    return result;
}

async function actualizarClienteId(id,body){
    let sQuery = "call sp_ActualizarClientes('" + id + "','" + body.status + "','" + 
    body.fname + "','" + body.lname + "','" + body.address + "','" + body.birthdate + "')";
    const res = await client.query(sQuery);

    return res;
}