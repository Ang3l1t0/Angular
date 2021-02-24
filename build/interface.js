function mostrarPersona(pPersona) {
    console.log(pPersona);
}
mostrarPersona({ nombre: 'Angel', apellido: 'Palma', edad: 30 });
function mostrarCoche(cCoche) {
    console.log(`Marca: ${cCoche.marca}. Modelo: ${cCoche.modelo}`);
    if (cCoche.color) {
        console.log(`Color: ${cCoche.color}`);
    }
    else {
        console.log("El coche no tiene color");
    }
}
mostrarCoche({ marca: 'Renault', modelo: '4' });
mostrarCoche({ marca: 'Renault', modelo: '4', color: 'Verde' });
let p1 = { x: 21, y: 22 };
const miBusqueda = (v, b) => {
    const result = v.search(b);
    return result > -1;
};
console.log(miBusqueda('hola', 'ola'));
class Adulto {
    constructor(pNombre, pEdad, pCoche) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.coche = pCoche;
    }
}
class Nino {
}
