/*
    ===== Código de TypeScript =====
*/

// Va ser de tipo T y va recibir un tipo T, T puede ser cualquier tipo de dato
function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString  = queTipoSoy('Hola Mundo');
let soyNumbero = queTipoSoy( 100 );
let soyArreglo = queTipoSoy( [1,2,3,4,5,6,7,8,9,10] );

let soyExplicito = queTipoSoy<number>( 100 );