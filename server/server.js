require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, {},
    () => { console.log('Database Online'); },
    err => { console.log(err); }
);

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto 3000');
});