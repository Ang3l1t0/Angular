interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
}

function mostrarPersona(pPersona: Persona) {
    console.log(pPersona);
}

mostrarPersona({ nombre: 'Angel', apellido: 'Palma', edad: 30 });

interface Coche {
    marca: string;
    modelo: string;
    color?: string; // opcional
}

function mostrarCoche(cCoche: Coche) {
    console.log(`Marca: ${cCoche.marca}. Modelo: ${cCoche.modelo}`);
    if (cCoche.color) {
        console.log(`Color: ${cCoche.color}`);
    } else {
        console.log("El coche no tiene color")
    }
}

mostrarCoche({ marca: 'Renault', modelo: '4' });
mostrarCoche({ marca: 'Renault', modelo: '4', color: 'Verde' });

// Propiedades de solo lectura
interface Punto {
    readonly x: number;
    readonly y: number;
}

let p1: Punto = { x: 21, y: 22 };
// p1.x = 32; ---> Cannot assign to 'x' because it is a read-only property.

//Definir una funcion
interface Busqueda {
    (valor: string, buscar: string): boolean;
}

const miBusqueda: Busqueda = (v: string, b: string): boolean => {
    const result = v.search(b);
    return result > -1;
}

console.log(miBusqueda('hola', 'ola'));

//Interfaz en una clase
interface Humano {
    nombre: string;
    edad: number;
}

class Adulto implements Humano {
    nombre: string;
    edad: number;
    coche: boolean;

    constructor(pNombre: string, pEdad: number, pCoche: boolean) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.coche = pCoche;
    }
}

class Nino implements Humano {
    nombre: string;
    edad: number;
    colegio: string;
}
