const fs = require ('fs');
const colors = require('colors');  
const crearArchivo = async(base= 3, listar=false, hasta= 10) => {
    try {
        let salida= '' ;
        let consola = '';
        
        for ( let i = 1; i<=hasta; i++ ){
            salida +=`${ base } x ${i} = ${ base*i }\n`;
            consola +=`${ base } ${'x'.red} ${i} ${'='.red} ${ base*i }\n`;
        }
        
        if (listar){
            console.log('==============='.magenta);
            console.log('Tabla del:', colors.yellow(base));
            console.log('==============='.magenta);
            
            console.log(consola);
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt creado`;
            
    } catch (err) {
        throw err;
    }
    
    
} 
module.exports={
    crearArchivo
}