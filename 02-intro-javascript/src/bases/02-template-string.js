const nombre = 'Joe';
const apellido = 'Connor';

//const nombreCompleto = nombre + ' ' + apellido;
// el resultado de la suma es un string en el template string
const nombreCompleto = ` 
${nombre} 
${apellido}
${1 + 1} 
`;

console.log(nombreCompleto);

function saludar(nombre) {
  return 'Hola ' + nombre;
}

console.log(`Te digo: ${ saludar(nombre) }`);