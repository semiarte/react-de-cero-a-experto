import { useCounter } from "../hooks/UseCounter";

export const CounterWithCustomHooks = () => {

    const { counter, increment, decrement, reset } = useCounter();

    return(
        <>
            <h1 key="1">Counter with custom Hook: { counter }</h1>

            <hr />

            <button className="btn btn-primary" onClick={increment}>+1</button>
            <button className="btn btn-primary" onClick={reset}>Reset</button>
            <button className="btn btn-primary" onClick={decrement}>-1</button>
        </>
    )
}