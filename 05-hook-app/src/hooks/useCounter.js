import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {
    const [counter, setCounter] = useState(initialValue);

    // exponemos métodos del hook para manejar el valor de counter
    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        // avoid -
        if(counter === 0) return;
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return { 
        counter, 
        increment,
        decrement,
        reset,
    }
}