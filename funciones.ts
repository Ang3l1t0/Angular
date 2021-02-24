//formas de declarar una funcion
const sumar: (a: number, b: number) => number = function (a: number, b: number): number {
    return a + b;
}

//la mas usada
const sumar2 = function (a: number, b: number) {
    return a + b;
}

const sumar3: (a: number, b: number) => number = function (a, b) {
    return a + b;
}

//Parametros opcionales y valores por defecto
function nombreCompleto2(nombre: string, apellido?: string): string {
    if (apellido) return nombre + ' ' + apellido;
    else return nombre;
}

console.log(nombreCompleto2('Angel'));
console.log(nombreCompleto2('Angel', 'Palma'));

//Valores por defecto
function nombreCompleto3(nombre: string, apellido: string = 'Palma'): string {
    if (apellido) return nombre + ' ' + apellido;
    else return nombre;
}
console.log(nombreCompleto3('Angel'));
console.log(nombreCompleto3('Angel', 'Martinez'));

//Parametros REST
function nombreCompleto4(nombre: string, ...restoNombre: string[]): string {
    return nombre + ' ' + restoNombre.join(' ');
}

console.log(nombreCompleto4('Angel', 'Maria', 'Rubby', 'Camilo', 'Andres'));