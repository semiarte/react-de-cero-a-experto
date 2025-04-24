// el objeto heroes default y owner lo llamamos mediante desestructuración del array
import heroes, { owners } from '../data/heroes';

console.log(owners);

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
export const getHeroById = (id) => heroes.find( ( heroe ) => heroe.id === id);
// console.log( getHeroById(2) );

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
export const getHeroByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner);
// console.log( getHeroByOwner('DC'));