const { describe } = require('yargs');

const argv= require ('yargs')  
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe: 'Es la base de la tabla de multiplicación'
    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        default: false,
        describe: 'muestra en consola la tabla de multiplicación'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default: 10,
        describe: 'hasta que # quiere ver la tabla de multiplicación'
    })

    .check( (argv,options) => {
        if (isNaN(argv.base)){
            throw 'la base tiene que ser un numero'
        }
        return true;
        // console.log('yargs',argv);
    })
    .argv;


    //EXPORTAR EL YARGS HACIA OTRA DEPENDENCIA 
    module.exports = argv;