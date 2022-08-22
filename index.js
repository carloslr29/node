const express = require('express');
const http = require('http');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const app = express();
const port = 5001;
require('dotenv').config();

app.use(helmet());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1', require('./source/routes/cliente.route'));

const server = http.createServer(app).listen(port, function (){
    console.log('Servidor Prueba');
    console.log('Servidor puerto ' + port);
});
