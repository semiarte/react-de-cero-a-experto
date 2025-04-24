const person = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,
    direccion: {
        calle: 'Calle 123',
        ciudad: 'Madrid',
    }
}

// Clon del objeto persona mediante spread operator
const personaClonada = {...person};
personaClonada.nombre = 'Martin';

console.table(person);
console.log(personaClonada);