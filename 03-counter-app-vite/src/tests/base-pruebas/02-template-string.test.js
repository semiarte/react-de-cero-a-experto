/* eslint-disable no-undef */
import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en archivo 02-template-strings', () => {
    test('getSaludo debe retornar "Hola Fernando"', () => {
        const name = 'Fernando'
        const message = getSaludo(name)

        expect( message).toBe(`Hola ${name}`)
    });
});