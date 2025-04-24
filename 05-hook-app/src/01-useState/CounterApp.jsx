import { useState } from "react"

export const CounterApp = () => {
    // el estado inicial es un objeto
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const {counter1, counter2, counter3} = state;

    return(
        <>
            <h1 key="1">{counter1}</h1>
            <h1 key="2">{counter2}</h1>
            <h1 key="3">{counter3}</h1>

            <hr />

            <button className="btn" onClick={
                () => setCounter({
                    // preservamos los valores de state y mutamos counter1
                    ... state,
                    counter1: counter1 + 1,
                })
            }>+1</button>
        </>
    )
}