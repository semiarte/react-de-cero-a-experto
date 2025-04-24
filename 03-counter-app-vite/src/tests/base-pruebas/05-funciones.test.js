/* eslint-disable no-unused-vars */

import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

/* eslint-disable no-undef */
 describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( testUser ).toEqual( user )

    });

    test('getUsuarioActivo debe retornar un objeto', () => { 
        const name = "Fernando"
        const user = getUsuarioActivo(name);
        expect(user).toEqual(
            { 
                uid: 'ABC567', username: name 
            }
        )
     })
 });