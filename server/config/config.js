// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;

console.log('Termina lectura de configuración');


// ============================
//  Vencimiento del token
// ============================
process.env.CADUCIDAD_TOKE = 60 * 60 * 24 * 30;

// ============================
//  SEED del token
// ============================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ============================
//  Google client ID
// ============================
process.env.CLIENT_ID = process.env.CLIENT_ID || '650128976501-n2ucajci9a209mgj6ql30l9v7enbkgsb.apps.googleusercontent.com';