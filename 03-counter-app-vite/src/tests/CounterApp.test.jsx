/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import CounterApp from '../CounterApp';

describe('Pruebas en el <CounterApp />', () => {
    const InitialValue = 10;
    
    test('debe de hacer match con el snapshot', () => { 
        const { container } = render(<CounterApp title='Counter' value={InitialValue} />)
        expect(container).toMatchSnapshot();
    });
    
})