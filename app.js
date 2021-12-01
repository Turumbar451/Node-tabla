const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
const colors = require('colors')
console.clear();

// const [, , arg3 = 'base=1'] = process.argv; 
// destructuracion, saco el argumento 3
// const [, base = 1] = arg3.split('=')
// uso la destructuracion para agarrar el numero que hay en --base = 2
// el metodo split divide la cadena por el simbolo dado

crearArchivo(argv.b, argv.l, argv.h)
    .then((nombreArchivo) => { console.log(nombreArchivo.yellow, 'creada') })
    .catch((err) => console.log(err));


