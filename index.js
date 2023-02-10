/* realizar la tabla del 5 
5x1=5
5x2=10
...
5x10=50 */



// const { argv, options } = require('yargs');
const {crearArchivo}=require('./helpers/multiplicar');
const colors = require('colors');  
const argv =require('./config/yargs'); 
console.clear();


crearArchivo( argv.base, argv.l, argv.h)
    .then( nombreArchivo => console.log (nombreArchivo.magenta,'creado'))
    .catch( err => console.log(err));

/* console.log(process.argv); */
// console.log(argv);   ---------para evidenciar como es el funcionamiento del yargs 




// console.log('base:yargs', argv.base);



//se comienza a realizar para el versionamiento de el aplicativo
// console.log(process.argv);
//versionamiento aplicativo


//DESESTRUCTURACION DE ARGUMENTOS



/* const [,,arg3= 'base=5']= process.argv;
const[, base=5]=arg3.split('=')
*/
// console.log(base);
// const base = 3;
