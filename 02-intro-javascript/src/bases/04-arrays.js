// Array
const numbers = [1, 2, 3, 4];
// operador spread en lugar de push para añadir valores al array
let numbers2 = [ ...numbers, 5 ];

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

/*
const numbers3 = numbers2.map(function(number) {
    return number * 2;
});
*/

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const numbers3 = numbers2.map(number => number * 2);

console.log(numbers);
console.log(numbers2);
console.log(numbers3);