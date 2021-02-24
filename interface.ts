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

