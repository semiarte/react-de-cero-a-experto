import { useState } from "react";
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const CounterApp = ({ title, value }) => {

    const [ counter, setCounter ] = useState( value );
    
    const handleApp = () => {
        // console.log(event);
        setCounter ( counter + 1 );
        // setCounter( (c) => c + 1 );
    }

    const handleSubstract = () => {
        setCounter ( counter - 1 );
    }

    const reset = () => {
        setCounter (value);
    }

    return (
        <div className="mainContent">
            <h1>{ title }</h1>
            <h2>Counter: { counter }</h2>

            <button onClick={ handleApp }>+1</button>
            <button onClick={ handleSubstract }>-1</button>
            <button onClick={ reset }>reset</button>
        </div>
    );
}

CounterApp.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number
}

export default CounterApp;