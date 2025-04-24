// Desestructuración
// Asignación desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ({nombre, edad, rango = 'Capitán', clave}) => {
    // console.log(nombre, edad, rango)
    return {
        nombreClave: clave,
        years: edad,
        latlng: {
            lat: 14.122,
            lng: -12.567
        }
    }
}

// const {nombreClave, years, latlng: {lat, lng}} = retornaPersona(persona);
const {nombreClave, years, latlng} = retornaPersona(persona);
const { lat, lng } = latlng;

console.log(nombreClave, years);
console.log(lat, lng);