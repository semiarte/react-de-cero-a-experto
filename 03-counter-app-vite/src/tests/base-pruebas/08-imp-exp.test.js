/* eslint-disable no-undef */
import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp"

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe retornar un heroe por ID', () => {
        const id = 3
        const heroe = getHeroeById(id)

        expect(heroe).toEqual({ id: 3, name: 'Superman', owner: 'DC' })
    })

    test('getHeroeById debe retornar undefined si no existe la ID', () => {
        const id = 100
        const heroe = getHeroeById(id)

        // expect(heroe).toBe(undefined)
        expect(heroe).toBeFalsy()
    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)
        expect(heroes.length).toBe(3)
        expect (heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ])
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ) )
    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)
        expect(heroes.length).toBe(2)
        expect(heroes).toEqual(heroes.filter( (heroe) => heroe.owner === owner ) )
    })
 })