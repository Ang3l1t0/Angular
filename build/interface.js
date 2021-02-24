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
