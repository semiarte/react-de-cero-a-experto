/* eslint-disable no-unused-vars */
import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas"

/* eslint-disable no-undef */
describe('Pruebas en 09-promesas.js', () => { 
    test('getHeroeByIdAsync debe de retornar un heroe', (done) => { 
        const id = 1
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
                done()
            })
     })

     test('getHeroeByIdAsync debe de obtener un error si la id del heroe no coincide', (done) => { 
        const id = 100
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBeFalsy
                done()
            })
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el heroe ${id}`)
                done()
            })
     })
 })