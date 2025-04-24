/* eslint-disable no-unused-vars */
import { render } from "@testing-library/react"
import FirstApp from "../FirstApp"

/* eslint-disable no-undef */
describe('Pruebas en <FirstApp />', () => { 
    test('debe de hacer match con el snapshot', () => { 
        
        const title = 'Hola, soy Goku'
        const container = render(<FirstApp title={ title } />)

        expect( container ).toMatchSnapshot();
     });

     test('debe mostrar el título del h1', () => {

        const title = 'Hola soy Goku';
        const { container, getByText } = render(<FirstApp title={ title } />)
        expect ( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain( title );

     });

     test('debe de mostrar el subtitulo enviado por props', () => {
        
        const title = 'Hola, Soy Goku';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText } = render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            /> 
        );

        expect( getAllByText(subTitle).length ).toBe(2);

    });
 })