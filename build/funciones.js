//formas de declarar una funcion
const sumar = function (a, b) {
    return a + b;
};
//la mas usada
const sumar2 = function (a, b) {
    return a + b;
};
const sumar3 = function (a, b) {
    return a + b;
};
//Parametros opcionales y valores por defecto
function nombreCompleto2(nombre, apellido) {
    if (apellido)
        return nombre + ' ' + apellido;
    else
        return nombre;
}
console.log(nombreCompleto2('Angel'));
console.log(nombreCompleto2('Angel', 'Palma'));
//Valores por defecto
function nombreCompleto3(nombre, apellido = 'Palma') {
    if (apellido)
        return nombre + ' ' + apellido;
    else
        return nombre;
}
console.log(nombreCompleto3('Angel'));
console.log(nombreCompleto3('Angel', 'Martinez'));
//Parametros REST
function nombreCompleto4(nombre, ...restoNombre) {
    return nombre + ' ' + restoNombre.join(' ');
}
console.log(nombreCompleto4('Angel', 'Maria', 'Rubby', 'Camilo', 'Andres'));
