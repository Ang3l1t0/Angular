//Boolean
let esValido = true;
esValido: false;
//Numero
let edad = 30;
//String
let Nombre = "Angel";
let Apellido = "Palma";
let nombreCompleto = `${Nombre} ${Apellido}`;
//Array dos opciones se puede hacer con cada tipo
let numeros = [12, 13, 14, 15];
let numeros2 = [12, 13, 14, 15];
//Tupla
let sitio = ['Casa', 080001];
//Enum
var Estado;
(function (Estado) {
    Estado[Estado["Offline"] = -1] = "Offline";
    Estado[Estado["Indefinido"] = 0] = "Indefinido";
    Estado[Estado["Online"] = 1] = "Online";
})(Estado || (Estado = {}));
let stat = Estado.Online;
console.log(stat);
