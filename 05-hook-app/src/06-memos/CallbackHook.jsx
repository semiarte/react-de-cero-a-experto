import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {
  
    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
      () => {
        console.log('me volví a generar :(');
        setCounter((value) => value +1 );
      },
      [],
    )

    return (
    <>
        <h1>useCallback hook: { counter }</h1>
        <hr />
        <ShowIncrement increment={incrementFather} />
    </>
  )
}
