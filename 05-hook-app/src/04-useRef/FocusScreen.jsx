import { useRef, useState } from "react"

export const FocusScreen = () => {
  const inputRef = useRef();
    
  const onClick = () => {
      inputRef.current.select();
  }

  const [active, setActive] = useState(false);

  const toggleClassName = () => {
    setActive(!active);
  }

  return (
    <>
        <h1>FocusScreen</h1>
        <hr />

        <input
            ref={inputRef}
            type="text" 
            placeholder="Escriba su nombre" 
            className="form-control" 
        />

        <input
            type="text" 
            placeholder="Escriba su apellido" 
            className="form-control mt-2" 
        />

        <br />
        
        <p className={active ? "app" : null}>Hello world!</p>

        <button
            className="btn btn-primary mt-2"
            onClick={onClick}
        >
            Set focus
        </button>

        <button
            className="btn btn-primary mt-2"
            onClick={toggleClassName}
        >
            Toggle class
        </button>
    </>
  )
}
