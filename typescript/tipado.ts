//Boolean
let esValido: boolean = true;
esValido: false;

//Numero
let edad: number = 30;

//String
let Nombre: string = "Angel"
let Apellido: string = "Palma"

let nombreCompleto: string = `${Nombre} ${Apellido}`;

//Array dos opciones se puede hacer con cada tipo
let numeros: number[] = [12, 13, 14, 15];
let numeros2: Array<number> = [12, 13, 14, 15];

//Tupla
let sitio: [string, number] = ['Casa', 080001];

//Enum
enum Estado {
    Offline = -1,
    Indefinido = 0,
    Online = 1
}

let stat: Estado = Estado.Online;
console.log(stat);