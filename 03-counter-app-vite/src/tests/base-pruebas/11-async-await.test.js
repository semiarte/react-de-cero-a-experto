import { getImagen } from "../../base-pruebas/11-async-await"

/* eslint-disable no-undef */
describe('Pruebas en 11-async-await', () => { 
    test('getImagen debe de retornar la url de una imagen', async() => { 
        const url = await getImagen()
        expect(typeof url).toBe('string')
     })
 })