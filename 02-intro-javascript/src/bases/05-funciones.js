const saludar = function(nombre) {
    return `Hola ${nombre}`;
}
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const saludar2 = (nombre) => `Hola ${nombre}`;
const saludar3 = () => `Hola Mundo`;

// devuelve un objeto
const getUser = () => ({ 
        username: 'Juan',
        age: 30
    })

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3());
console.log(getUser());

// Tarea
// 1. Transformar el siguiente código en una función arrow
// 2. Tiene que devolver un objeto implícito
// 3. Testear el código

const getUsuarioActivo = (nombre) => ({
        uid: 'ABC123',
        username: nombre,
        online: true, 
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);