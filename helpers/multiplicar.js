const fs = require("fs")
const colors = require('colors')
const crearArchivo = async (base = 5, listar, hasta) => {
    try {

        let salida = "";
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if (listar) {
            console.log("==================".green);
            console.log(`    tabla del:`, colors.red(base));
            console.log("==================".green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`
    } catch {
        throw err;
    }
}
module.exports = {
    crearArchivo,
}

// const crearArchivo = (base = 5) => {
//     return new Promise((resolve, reject) => {
//         console.log("==================");
//         console.log(`    tabla del`, base);
//         console.log("==================");

//         let salida = "";
//         for (let i = 1; i <= 10; i++) {
//             salida += `${base} x ${i} = ${base * i}\n`;
//         }

//         /* fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//         if (err) throw err;
//         console.log(`se creo el archivo "tabla-${base}.txt" `);
//       }); */
//         console.log(salida);
//         fs.writeFileSync(`tabla-${base}.txt`, salida);
//         resolve(`tabla-${base}.txt`);


//     })
// }

// module.exports = {
//     crearArchivo,
// };
