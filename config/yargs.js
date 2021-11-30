const argv = require("yargs")
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'es la base de la tabla de multiplicar'
    }).option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    }).option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Limite de la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "la base tiene que ser un número"
        }
        return true
    })
    .argv

module.exports = argv;