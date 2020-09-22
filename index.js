const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multi');
const colors = require('colors');

const comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo: ${archivo.green} ha sido creado!`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('El comando no existe');
        break;
}