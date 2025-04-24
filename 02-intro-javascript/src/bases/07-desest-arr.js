const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , p2, p3 ] = personajes;
console.log(p2, p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numbers] = retornaArreglo();
console.log(letras, numbers);