
const clienteService = require('../services/cliente.service');

exports.registrarClientes = async function(req, res, next){
    clienteService.registrarClientes(req.body)
    .then(resp =>{
        return res.json({ok: true, message: "cliente creado correctamente"})
    })
    .catch(err =>{
        console.log("error: " + err.message);
        return res.status(500).json({
            ok: false,
            message: err.message
        })
    });
}

exports.getClientes = async function(req, res, next){
    clienteService.getClientes()
    .then(resp =>{
        return res.json(resp)
    })
    .catch(err =>{
        console.log("error: " + err.message);
        return res.status(500).json({
            ok: false,
            message: err.message
        })
    });
}

exports.getClienteId = async function(req, res, next){
    const idCliente = req.params.id;

    clienteService.getClienteId(idCliente)
    .then(resp =>{
        return res.json(resp)
    })
    .catch(err =>{
        console.log("error: " + err.message);
        return res.status(500).json({
            ok: false,
            message: err.message
        })
    });
}

exports.actualizarClienteId = async function(req, res, next){
    const idCliente = req.params.id;

    clienteService.actualizarClienteId(idCliente, req.body)
    .then(resp =>{
        return res.json({ok: true, message: "cliente actualizado correctamente"})
    })
    .catch(err =>{
        console.log("error: " + err.message);
        return res.status(500).json({
            ok: false,
            message: err.message
        })
    });
}