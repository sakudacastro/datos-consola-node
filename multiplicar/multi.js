const fs = require('fs');

const crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base) || !Number(limite)) {
            reject(`Debe ingresar un numero => ${typeof(base)}, ${typeof(base)} 👀`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
            // console.log(resultado);
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt 🍟🍺`);
        });

    });
};


const listarTabla = (base, limite) => {
    // let data = '';
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('Debes ingresar Numeros, no letras');
            return
        } else {
            for (let i = 1; i <= limite; i++) {
                // data += `${base} x ${i} = ${base*i}\n`;
                let resultado = `${base} x ${i} = ${base*i}`;
                console.log(resultado);
            }
            resolve(`fin!`);
        }

        // fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        //     if (err)
        //         reject(err)
        //     else
        //         resolve(`tabla-${base}.txt`);
        // });
    });

};

module.exports = {
    crearArchivo,
    listarTabla
}