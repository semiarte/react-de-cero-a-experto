// variables and constants
const nombre = 'John';
// https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Variables#diferencia_entre_var_y_let
let age = 30;
age = 40;
console.log(nombre, age);

// scope
if (true) {
  const nombre = 'Juan';

  console.log(nombre);
}